// pages/api/contact.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Récupérer les données du formulaire depuis le corps de la requête
        const { name, email, message } = req.body;

        // Préparer le contenu à envoyer à Discord
        const discordData = {
            content: `📨 Nouveau message de contact\n**Nom :** ${name}\n**Email :** ${email}\n**Message :** ${message}`,
        };

        try {
            // Envoi des données au webhook Discord
            await fetch(process.env.DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discordData),
            });

            // Réponse en cas de succès
            res.status(200).json({ message: 'Message envoyé avec succès.' });
        } catch (error) {
            // Gestion des erreurs
            res.status(500).json({ error: 'Erreur lors de l\'envoi du message.' });
        }
    } else {
        // Méthode HTTP non prise en charge
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
