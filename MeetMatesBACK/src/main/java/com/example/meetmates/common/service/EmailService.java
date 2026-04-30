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
          "html": "<body>

    <div class="email-wrapper">
        <div class="email-container">
            <h2 th:text="${title}">Vérification de votre compte</h2>
            <p th:text="${content}">
                Merci de cliquer sur le bouton ci-dessous pour activer votre compte.
            </p>
            <a th:href="${actionUrl}" class="button">
                <span th:text="${buttonText}">Activer mon compte</span>
            </a>
        </div>
    </div>

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
            font-family: 'Poiret One', cursive;
        }

        .email-wrapper {
            width: 100%;
            padding: 20px;
            background-color: #f3f4f6;
        }

        .email-container {
            width: 400px;
            margin: 0 auto;
            background: linear-gradient(to bottom, #3b82f6, #4f46e5);
            border-radius: 10px;
            text-align: center;
            padding: 30px 20px;
            color: white;
        }

        .email-container h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .email-container p {
            font-size: 16px;
            margin-bottom: 25px;
        }

        .email-container a.button {
            display: inline-block;
            background-color: #ffffff;
            color: #4f46e5;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
        }
    </style>
</body>"
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
          "html": "<body>

    <div class="email-wrapper">
        <div class="email-container">
            <h2 th:text="${title}">Vérification de votre compte</h2>
            <p th:text="${content}">
                Merci de cliquer sur le bouton ci-dessous pour activer votre compte.
            </p>
            <a th:href="${actionUrl}" class="button">
                <span th:text="${buttonText}">Activer mon compte</span>
            </a>
        </div>
    </div>

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
            font-family: 'Poiret One', cursive;
        }

        .email-wrapper {
            width: 100%;
            padding: 20px;
            background-color: #f3f4f6;
        }

        .email-container {
            width: 400px;
            margin: 0 auto;
            background: linear-gradient(to bottom, #3b82f6, #4f46e5);
            border-radius: 10px;
            text-align: center;
            padding: 30px 20px;
            color: white;
        }

        .email-container h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .email-container p {
            font-size: 16px;
            margin-bottom: 25px;
        }

        .email-container a.button {
            display: inline-block;
            background-color: #ffffff;
            color: #4f46e5;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
        }
    </style>
</body>"
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

        if (response.statusCode() >= 400) {
            throw new RuntimeException("Resend error: " + response.body());
        }

    } catch (Exception e) {
        throw new RuntimeException("Erreur envoi email", e);
    }
}
}