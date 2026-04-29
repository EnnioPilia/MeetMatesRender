package com.example.meetmates.common.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${resend.api.key}")
    private String apiKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    private final HttpClient client = HttpClient.newHttpClient();

    public void sendVerificationEmail(String toEmail, String token) {
        String url = frontendUrl + "/verify?token=" + token;

        String body = """
        {
          "from": "onboarding@resend.dev",
          "to": "%s",
          "subject": "Activation de votre compte",
          "html": "<p>Clique ici : <a href='%s'>Activer</a></p>"
        }
        """.formatted(toEmail, url);

        send(body);
    }

    public void sendPasswordResetEmail(String toEmail, String token) {
        String url = frontendUrl + "/reset-password?token=" + token;

        String body = """
        {
          "from": "onboarding@resend.dev",
          "to": "%s",
          "subject": "Reset password",
          "html": "<p>Clique ici : <a href='%s'>Reset</a></p>"
        }
        """.formatted(toEmail, url);

        send(body);
    }

private void send(String json) {
    try {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.resend.com/emails"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();

        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("EMAIL STATUS: " + response.statusCode());
        System.out.println("EMAIL BODY: " + response.body());

        if (response.statusCode() >= 400) {
            throw new RuntimeException("Resend error: " + response.body());
        }

    } catch (Exception e) {
        throw new RuntimeException("Erreur envoi email", e);
    }
}
}