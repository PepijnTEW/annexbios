<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="src/output.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
</head>


<body>
    <div class="flex">
        <!-- achtergrond theater afbeelding -->
        <div class="w-full bg-gradient-to-b from-red-600 to-black">

            <div class="sticky top-0 z-20">
                <img src="assets/afbeeldingen/zaalAnnex.jpg" alt="annex bios zaal"
                    class="w-full h-40 sm:h-56 object-cover -mb-16 sm:-mb-16 relative -z-10">

                <header
                    class="flex flex-col sm:flex-row h-auto w-full gap-4 bg-white items-center justify-between py-2 px-4">
                    <img src="assets/afbeeldingen/logo.png" alt="Annex Bios"
                        class="h-16 sm:h-20 md:h-24 w-auto shrink-0 object-contain">
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="#" class="headLinks">vestigingen</a>
                        <a href="#" class="headLinks">aanbevolen films</a>
                        <a href="#" class="headLinks">contact</a>
                    </div>
                </header>

                <nav
                    class="flex flex-col sm:flex-row h-auto sm:h-16 w-full gap-2 sm:gap-4 bg-[#666666] items-center justify-start px-4 py-2 sm:py-0">
                    <p class="font-bold text-[#faf9f5] text-sm sm:text-base md:text-lg text-center sm:text-left">
                        kies een vestiging &amp; koop je tickets!
                    </p>
                    <div class="relative">
                        <button
                            class="bg-white border-2 rounded-md px-4 py-2 text-sm sm:text-base font-bold whitespace-nowrap"
                            onclick="document.getElementById('vestigingen').classList.toggle('hidden')">
                            kies je vestiging
                        </button>
                        <div id="vestigingen"
                            class="hidden absolute flex flex-col bg-white shadow-lg rounded-md p-2 gap-1 min-w-full z-30">
                            <a class="px-3 py-1 text-center text-sm whitespace-nowrap" href="#">leerdam</a>
                            <a class="px-3 py-1 text-center text-sm whitespace-nowrap" href="#">maarssen</a>
                            <a class="px-3 py-1 text-center text-sm whitespace-nowrap" href="#">breukelen</a>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- welkoms bericht -->
            <div class="flex justify-center">
                <div class="w-[90vw] sm:w-4/5 lg:w-2/3 my-10 bg-black/70 p-8 sm:p-10 md:p-12 rounded-sm">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#faf9f5] mb-3">Welkom bij Annex Bios
                    </h1>
                    <p class="text-[#faf9f5] text-sm sm:text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus inventore ea cum placeat maxime, doloribus deserunt vitae dolore aliquid nostrum
                        repellendus mollitia similique omnis repellat labore ratione, doloremque, ipsam deleniti?
                    </p>
                </div>
            </div>

            <!-- locaties met afbeelding -->
            <div class="page-container">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 gap-4 my-10">
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Leerdam</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#B97D46] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Maarssen</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#9E2629] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Breukelen</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#8B9E51] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Bilthoven</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#6E4F7D] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Montfoort</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#4596BA] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Woerden</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#FF2525] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Leidscherijn</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#399CFF] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                    <div class="locaties">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Zeist</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm">Rijksstraatweg 42, 3223 KA</p>
                        <a href="#"
                            class="bg-[#269617] text-white text-center font-bold text-xs sm:text-sm px-4 py-2 m-2 rounded-sm whitespace-nowrap block mx-auto w-[calc(100%-1rem)]">
                            bezoek website
                        </a>
                    </div>
                </div>
            </div>

            <!-- aanbevolen films -->
            <?php
            require 'includes/api.php';

            $token = '9|JaTe49xsmDqaiBv34hTxyrGUfh9KUsJLMyeZ3MdFf8f56ad2';
            $films = haalFilmsOp($token, '?imdRating[gt]=7');
            $films = $films['data'] ?? [];   // pak de daadwerkelijke lijst uit de 'data'-sleutel
            $films = array_slice($films, 0, 6);

            ?>
            <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#faf9f5] mx-4 sm:mx-10 mt-20 sm:mt-30">
                aanbevolen films</p>
            <div class="page-container">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mx-2 gap-2 my-10">
                    <?php foreach ($films as $film): ?>
                        <div class="films">
                            <img src="<?= htmlspecialchars($film['posterPath']) ?>"
                                alt="<?= htmlspecialchars($film['title']) ?>"
                                class="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-sm">
                            <p class="px-2 pt-2 text-sm sm:text-base"><?= htmlspecialchars($film['title']) ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- nieuws berichten -->
            <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#faf9f5] mx-4 sm:mx-10 mt-20 sm:mt-30">Nieuws
            </p>
            <div class="page-container">
                <div class="grid grid-cols-1 sm:grid-cols-2 mx-2 gap-4 my-10">
                    <div class="rounded-sm bg-white m-1">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Breukelen</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm text-gray-600">Rijksstraatweg 42, 3223 KA</p>
                    </div>
                    <div class="rounded-sm bg-white m-1">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Breukelen</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm text-gray-600">Rijksstraatweg 42, 3223 KA</p>
                    </div>
                    <div class="rounded-sm bg-white col-span-1 sm:col-span-2 m-1">
                        <img src="assets/afbeeldingen/locaties.jpg" alt="locatie"
                            class="w-full h-32 sm:h-40 object-cover rounded-t-sm">
                        <p class="px-2 pt-2 text-sm sm:text-base">Breukelen</p>
                        <p class="px-2 pb-2 text-xs sm:text-sm text-gray-600">Rijksstraatweg 42, 3223 KA</p>
                    </div>
                </div>
            </div>

            <footer
                class="flex flex-col sm:flex-row w-full gap-4 border-2 bg-[#666666] mt-10 items-center sm:items-start justify-start py-4 px-4">
                <div class="mx-2">
                    <img src="assets/afbeeldingen/ssFooter.png" alt="Annex Bios"
                        class="h-20 sm:h-24 w-auto shrink-0 object-contain">
                    <div class="w-full sm:w-64 text-sm sm:text-base m-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda id iste doloremque vitae
                            sit. Esse aspernatur repellat quis harum, at iste quidem nulla aliquid. Voluptate incidunt
                            dignissimos iste sed quia?</p>
                    </div>
                </div>
                <div>
                    <p class="text-white text-2xl sm:text-3xl my-6 sm:my-12 mx-2 font-bold">Navigeer</p>
                    <a class="mx-2 block" href="#">werken bij</a>
                    <a class="mx-2 block" href="#">veelgestelde vragen</a>
                    <a class="mx-2 block" href="#">vestigingen</a>
                    <a class="mx-2 block" href="#">contact</a>
                </div>
            </footer>

            <!-- links voorwaarden enzv -->
            <div class="flex flex-wrap m-2">
                <a class="text-white mx-1" href="#">voorwaarden |</a>
                <a class="text-white mx-1" href="#">privacy beleid |</a>
                <a class="text-white mx-1" href="#">cookie disclaimer |</a>
            </div>

        </div>
</body>

</html>