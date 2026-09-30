<?php
function haalFilmsOp(string $token, string $filter = ''): array {
    $url = 'https://annex.pepijntw.com/api/v1/movies' . $filter;

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $token,
        'Accept: application/json',
    ]);

    $response = curl_exec($ch);
    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);

    if ($statusCode !== 200) {
        error_log("Fout bij ophalen films van de API: HTTP $statusCode");
        return [];
    }

    return json_decode($response, true) ?? [];
}