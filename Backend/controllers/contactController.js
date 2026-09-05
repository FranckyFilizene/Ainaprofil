import transporter from "../config/mail.js";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        //verification des champs
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "tous les champs sont obligatoires.",
            });
        }

        //Preparation de l'email
        const mailOptions = {
            from: `"Portfolio" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `Nouveau message du portfolio de ${name}`,

            text: `
            Vous avez recu un nouveau message depuis votre portfolio.

            Nom: ${name}
            Email : ${email}

            Message : ${message}
            `,

           html: `
            <!DOCTYPE html>
            <html lang="fr">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Nouveau message - Portfolio</title>
            </head>

            <body
                style="
                margin: 0;
                padding: 40px 20px;
                background-color: #000000;
                font-family: Arial, Helvetica, sans-serif;
                color: #E1DCC9;
                "
            >

                <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                >
                <tr>
                    <td align="center">

                    <!-- Conteneur principal -->

                    <table
                        width="600"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                        max-width: 600px;
                        width: 100%;
                        background-color: #1F150C;
                        border: 1px solid #412D15;
                        border-radius: 16px;
                        overflow: hidden;
                        "
                    >

                        <!-- Header -->

                        <tr>
                        <td
                            style="
                            padding: 30px;
                            background-color: #412D15;
                            text-align: center;
                            "
                        >

                            <h1
                            style="
                                margin: 0;
                                font-size: 24px;
                                color: #E1DCC9;
                            "
                            >
                            Nouveau message
                            </h1>

                            <p
                            style="
                                margin: 8px 0 0;
                                font-size: 14px;
                                color: #E1DCC9;
                                opacity: 0.75;
                            "
                            >
                            Depuis votre portfolio
                            </p>

                        </td>
                        </tr>

                        <!-- Contenu -->

                        <tr>
                        <td style="padding: 30px;">

                            <p
                            style="
                                margin: 0 0 25px;
                                font-size: 16px;
                                color: #E1DCC9;
                            "
                            >
                            Bonjour,
                            </p>

                            <p
                            style="
                                margin: 0 0 25px;
                                font-size: 15px;
                                line-height: 1.7;
                                color: #E1DCC9;
                                opacity: 0.75;
                            "
                            >
                            Vous avez reçu un nouveau message depuis
                            le formulaire de contact de votre portfolio.
                            </p>


                            <!-- Informations -->

                            <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="
                                background-color: #000000;
                                border: 1px solid #412D15;
                                border-radius: 10px;
                            "
                            >

                            <tr>
                                <td style="padding: 20px;">

                                <p
                                    style="
                                    margin: 0 0 8px;
                                    font-size: 12px;
                                    text-transform: uppercase;
                                    letter-spacing: 1px;
                                    color: #E1DCC9;
                                    opacity: 0.5;
                                    "
                                >
                                    Nom
                                </p>

                                <p
                                    style="
                                    margin: 0 0 20px;
                                    font-size: 16px;
                                    font-weight: bold;
                                    color: #E1DCC9;
                                    "
                                >
                                    ${name}
                                </p>


                                <p
                                    style="
                                    margin: 0 0 8px;
                                    font-size: 12px;
                                    text-transform: uppercase;
                                    letter-spacing: 1px;
                                    color: #E1DCC9;
                                    opacity: 0.5;
                                    "
                                >
                                    Email
                                </p>

                                <p
                                    style="
                                    margin: 0;
                                    font-size: 16px;
                                    color: #E1DCC9;
                                    "
                                >
                                    <a
                                    href="mailto:${email}"
                                    style="
                                        color: #E1DCC9;
                                        text-decoration: none;
                                    "
                                    >
                                    ${email}
                                    </a>
                                </p>

                                </td>
                            </tr>

                            </table>


                            <!-- Message -->

                            <div
                            style="
                                margin-top: 25px;
                                padding: 20px;
                                background-color: #000000;
                                border-left: 3px solid #412D15;
                                border-radius: 8px;
                            "
                            >

                            <p
                                style="
                                margin: 0 0 12px;
                                font-size: 12px;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                                color: #E1DCC9;
                                opacity: 0.5;
                                "
                            >
                                Message
                            </p>

                            <p
                                style="
                                margin: 0;
                                font-size: 15px;
                                line-height: 1.7;
                                color: #E1DCC9;
                                white-space: pre-line;
                                "
                            >
                                ${message}
                            </p>

                            </div>


                            <!-- Bouton -->

                            <div
                            style="
                                margin-top: 30px;
                                text-align: center;
                            "
                            >

                            <a
                                href="mailto:${email}"
                                style="
                                display: inline-block;
                                padding: 13px 25px;
                                background-color: #412D15;
                                color: #E1DCC9;
                                text-decoration: none;
                                font-size: 14px;
                                font-weight: bold;
                                border-radius: 8px;
                                "
                            >
                                Répondre au message
                            </a>

                            </div>

                        </td>
                        </tr>


                        <!-- Footer -->

                        <tr>
                        <td
                            style="
                            padding: 20px 30px;
                            border-top: 1px solid #412D15;
                            text-align: center;
                            "
                        >

                            <p
                            style="
                                margin: 0;
                                font-size: 12px;
                                color: #E1DCC9;
                                opacity: 0.4;
                            "
                            >
                            Message envoyé depuis le formulaire de contact
                            </p>

                        </td>
                        </tr>

                    </table>

                    </td>
                </tr>
                </table>

            </body>

            </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success : true,
            message: "Message envoyé avec succès.",
        });

    }catch(error){
        console.error("Erreur lors de l'envoi : ", error);
        
        return res.status(500).json({
            success : false,
            message : "Une erreur est survenue lors de l'envoi du message.",
        });
    }
};