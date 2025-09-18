import { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectType: string;
}

// E-mail template voor bevestiging naar klant
const getConfirmationEmailTemplate = (data: ContactFormData) => {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bevestiging van uw bericht</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .content {
            background-color: #ffffff;
            padding: 30px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
        }
        .footer {
            margin-top: 30px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            font-size: 14px;
            color: #666;
        }
        .highlight {
            background-color: #e3f2fd;
            padding: 15px;
            border-left: 4px solid #2196f3;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="color: #1f2937; margin: 0;">AgataSoftware</h1>
        <p style="color: #6b7280; margin: 10px 0 0 0;">Professionele Website Ontwikkeling</p>
    </div>
    
    <div class="content">
        <h2 style="color: #1f2937;">Beste ${data.name},</h2>
        
        <p>Hartelijk dank voor uw bericht! Wij hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen.</p>
        
        <div class="highlight">
            <h3 style="margin-top: 0; color: #1f2937;">Uw bericht:</h3>
            <p><strong>Naam:</strong> ${data.name}</p>
            <p><strong>E-mail:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Telefoon:</strong> ${data.phone}</p>` : ''}
            ${data.company ? `<p><strong>Bedrijf:</strong> ${data.company}</p>` : ''}
            <p><strong>Project type:</strong> ${data.projectType || 'Niet gespecificeerd'}</p>
            <p><strong>Bericht:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <h3 style="color: #1f2937;">Wat kunt u verwachten?</h3>
        <ul>
            <li><strong>Reactietijd:</strong> Wij streven ernaar om binnen 3-5 uur te reageren</li>
            <li><strong>Werkdagen:</strong> Maandag t/m vrijdag van 09:00 - 18:00</li>
            <li><strong>Weekend:</strong> Berichten ontvangen in het weekend worden maandag beantwoord</li>
        </ul>
        
        <p>Wij nemen uw project serieus en zullen een passende oplossing voor u uitwerken. Heeft u dringende vragen? U kunt ons ook direct bellen.</p>
        
        <p>Met vriendelijke groet,<br>
        <strong>Het team van AgataSoftware</strong></p>
    </div>
    
    <div class="footer">
        <p><strong>AgataSoftware</strong><br>
        E-mail: info@agatasoftware.nl<br>
        Lelystad, Nederland<br>
        KVK: 92654762</p>
        
        <p style="font-size: 12px; color: #999; margin-top: 20px;">
            Deze e-mail is automatisch gegenereerd. Beantwoord deze e-mail niet direct, 
            maar gebruik het contactformulier op onze website of stuur een nieuwe e-mail naar info@agatasoftware.nl
        </p>
    </div>
</body>
</html>
  `;
};

// E-mail template voor notificatie naar eigenaar
const getOwnerNotificationTemplate = (data: ContactFormData) => {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuw contactformulier bericht</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #dc2626;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #ffffff;
            padding: 30px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
        }
        .info-box {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .urgent {
            background-color: #fef2f2;
            border-left: 4px solid #dc2626;
            padding: 15px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0;">🔔 Nieuw Contactformulier Bericht</h1>
        <p style="margin: 10px 0 0 0;">AgataSoftware Website</p>
    </div>
    
    <div class="content">
        <div class="urgent">
            <h3 style="margin-top: 0; color: #dc2626;">⚠️ Actie Vereist</h3>
            <p>Er is een nieuw bericht ontvangen via het contactformulier. Reageer binnen 3-5 uur voor optimale klanttevredenheid.</p>
        </div>
        
        <h2>Contactgegevens:</h2>
        <div class="info-box">
            <p><strong>Naam:</strong> ${data.name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p><strong>Telefoon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
            ${data.company ? `<p><strong>Bedrijf:</strong> ${data.company}</p>` : ''}
            <p><strong>Project type:</strong> ${data.projectType || 'Niet gespecificeerd'}</p>
        </div>
        
        <h2>Bericht:</h2>
        <div class="info-box">
            <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <h2>Snelle Acties:</h2>
        <ul>
            <li><a href="mailto:${data.email}?subject=Re: Uw bericht via AgataSoftware&body=Beste ${data.name},%0D%0A%0D%0A">📧 Direct antwoorden</a></li>
            ${data.phone ? `<li><a href="tel:${data.phone}">📞 Bellen</a></li>` : ''}
            <li><a href="https://agatasoftware.nl/admin">🔧 Admin panel</a></li>
        </ul>
        
        <p><strong>Ontvangen op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
    </div>
</body>
</html>
  `;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validatie
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ message: 'Naam, e-mail en bericht zijn verplicht' });
    }

    // E-mail validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ message: 'Ongeldig e-mailadres' });
    }

    // Voor TransIP hosting - gebruik SMTP via een e-mail service
    // Hier gebruiken we een eenvoudige implementatie die werkt met TransIP
    const nodemailer = require('nodemailer');

    // TransIP SMTP configuratie
    const transporter = nodemailer.createTransporter({
      host: 'smtp.transip.email',
      port: 465,
      secure: false, // true voor 465, false voor andere poorten
      auth: {
        user: process.env.SMTP_USER || 'info@agatasoftware.nl',
        pass: process.env.SMTP_PASS || 'Jeandro1'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verstuur bevestigingsmail naar klant
    const confirmationMail = {
      from: '"AgataSoftware" <info@agatasoftware.nl>',
      to: formData.email,
      subject: 'Bevestiging van uw bericht - AgataSoftware',
      html: getConfirmationEmailTemplate(formData),
      replyTo: 'info@agatasoftware.nl'
    };

    // Verstuur notificatiemail naar eigenaar
    const notificationMail = {
      from: '"AgataSoftware Contactformulier" <info@agatasoftware.nl>',
      to: 'info@agatasoftware.nl',
      subject: `Nieuw contactformulier bericht van ${formData.name}`,
      html: getOwnerNotificationTemplate(formData),
      replyTo: formData.email
    };

    // Verstuur beide e-mails
    await Promise.all([
      transporter.sendMail(confirmationMail),
      transporter.sendMail(notificationMail)
    ]);

    res.status(200).json({ 
      message: 'E-mails succesvol verzonden',
      success: true 
    });

  } catch (error: any) {
    console.error('E-mail verzend fout:', error);
    res.status(500).json({ 
      message: 'Er is een fout opgetreden bij het verzenden van de e-mails',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
