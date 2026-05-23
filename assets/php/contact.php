<?php
/**
 * contact.php - Handler Kontak Safrian Portfolio
 * Menerima data form POST dan meneruskan ke WhatsApp
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name    = htmlspecialchars(strip_tags(trim($_POST['name'] ?? '')));
$subject = htmlspecialchars(strip_tags(trim($_POST['subject'] ?? '')));
$message = htmlspecialchars(strip_tags(trim($_POST['message'] ?? '')));

if (empty($name) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Semua field wajib diisi.']);
    exit;
}

// Nomor WhatsApp Safrian
$phone = '6285640545387';

$waText = "Halo Safrian,\n\nPerkenalkan saya *{$name}* dari *{$subject}*.\n\n{$message}";
$encoded = urlencode($waText);
$waURL   = "https://wa.me/{$phone}?text={$encoded}";

// Opsional: kirim email notifikasi
$to      = 'safrianarbi@gmail.com';
$subject_mail = "[Portfolio] Pesan baru dari {$name}";
$body    = "Nama: {$name}\nSubjek: {$subject}\n\nPesan:\n{$message}";
$headers = "From: noreply@safrian.dev";

// mail($to, $subject_mail, $body, $headers); // Aktifkan jika server mendukung mail()

echo json_encode([
    'success' => true,
    'wa_url'  => $waURL,
    'message' => 'Pesan siap dikirim ke WhatsApp!'
]);
