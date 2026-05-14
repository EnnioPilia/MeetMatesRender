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

        String html = """
                <div style="
                    font-family: Arial, sans-serif;
                    background:#f5f5f5;
                    padding:40px 20px;
                ">

                    <div style="
                        max-width:600px;
                        margin:auto;
                        background:white;
                        border-radius:16px;
                        padding:40px;
                        border:1px solid #e5e7eb;
                        box-shadow:0 10px 30px rgba(0,0,0,0.08);
                    ">

                        <h1 style="
                            margin:0 0 24px;
                            font-size:32px;
                            color:#111827;
                            text-align:center;
                        ">
                            Bienvenue sur MeetMates
                        </h1>

                        <p style="
                            font-size:16px;
                            line-height:1.7;
                            color:#374151;
                        ">
                            Merci pour votre inscription.
                        </p>

                        <p style="
                            font-size:16px;
                            line-height:1.7;
                            color:#374151;
                        ">
                            Cliquez sur le bouton ci-dessous pour activer votre compte.
                        </p>

                        <div style="text-align:center; margin:40px 0;">

                            <a href="%s"
                            style="
                                display:inline-block;
                                background:#ff6200;
                                color:white;
                                text-decoration:none;
                                padding:16px 32px;
                                border-radius:14px;
                                font-weight:700;
                                font-size:16px;
                            ">
                                Activer mon compte
                            </a>

                        </div>

                        <p style="
                            font-size:14px;
                            color:#6b7280;
                            text-align:center;
                            margin-top:32px;
                        ">
                            Si vous n'êtes pas à l'origine de cette demande,
                            ignorez simplement cet email.
                        </p>

                    </div>

                </div>
                """.formatted(url);

        String body = """
                {
                "from": "onboarding@resend.dev",
                "to": "%s",
                "subject": "Activation de votre compte",
                "html": %s
                }
                """.formatted(
                toEmail,
                "\"" + html.replace("\"", "\\\"").replace("\n", "") + "\""
        );

        send(body);
    }

    public void sendPasswordResetEmail(String toEmail, String token) {

        String url = frontendUrl + "/reset-password?token=" + token;

        String html = """
            <div style="
                font-family: Arial, sans-serif;
                background:#f5f5f5;
                padding:40px 20px;
            ">

                <div style="
                    max-width:600px;
                    margin:auto;
                    background:white;
                    border-radius:20px;
                    padding:40px;
                    border:2px solid black;
                    box-shadow:
                    0 10px 30px rgba(0,0,0,0.10),
                    0 0 18px rgba(255,98,0,0.18);
                ">

                    <h1 style="
                        margin:0 0 24px;
                        font-size:32px;
                        color:#ff6200;
                        text-align:center;
                        font-weight:800;
                    ">
                        Réinitialisation du mot de passe
                    </h1>

                    <p style="
                        font-size:16px;
                        line-height:1.7;
                        color:#374151;
                    ">
                        Une demande de réinitialisation de mot de passe a été effectuée.
                    </p>

                    <p style="
                        font-size:16px;
                        line-height:1.7;
                        color:#374151;
                    ">
                        Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe.
                    </p>

                    <div style="text-align:center; margin:40px 0;">

                        <a href="%s"
                        style="
                            display:inline-block;
                            background:#ff6200;
                            color:white;
                            text-decoration:none;
                            padding:16px 32px;
                            border-radius:16px;
                            border:2px solid black;
                            font-weight:800;
                            font-size:16px;
                            box-shadow:0 6px 14px rgba(0,0,0,0.18);
                        ">

                            Réinitialiser mon mot de passe

                        </a>

                    </div>

                    <p style="
                        font-size:14px;
                        color:#6b7280;
                        text-align:center;
                        margin-top:32px;
                        line-height:1.6;
                    ">
                        Si vous n'êtes pas à l'origine de cette demande,
                        ignorez simplement cet email.
                    </p>

                </div>

            </div>
            """.formatted(url);

                String body = """
            {
            "from": "MeetMates <onboarding@resend.dev>",
            "to": "%s",
            "subject": "Réinitialisation du mot de passe",
            "html": %s
            }
            """.formatted(
                        toEmail,
                        "\"" + html.replace("\"", "\\\"").replace("\n", "") + "\""
                );

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

            HttpResponse<String> response
                    = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() >= 400) {
                throw new RuntimeException("Resend error: " + response.body());
            }

        } catch (Exception e) {
            throw new RuntimeException("Erreur envoi email", e);
        }
    }
}
