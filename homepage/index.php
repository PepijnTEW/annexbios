<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="src/output.css" rel="stylesheet">
</head>


<body>
    <div class="flex">
        <!-- achtergrond theater afbeelding -->
        <div class="h-[90vw] w-full bg-red-500 ">
            <header
                class="sticky top-0 z-0 flex flex-col sm:flex-row h-auto sm:h-64 w-full gap-4 border-2 bg-[#faf9f5] mt-10 items-center justify-between py-4">
                <img src="assets/locaties.png" alt="Annex Bios" class="h-40 w-auto shrink-0 object-contain">
                <div class="flex gap-4">
                    <a href="#" class="headLinks">vestigingen</a>
                    <a href="#" class="headLinks">aanbevolen films</a>
                    <a href="#" class="headLinks">contact</a>
                </div>
            </header>

            <nav
                class="sticky top-auto sm:top-64 flex h-24 w-full gap-4 border-2 bg-[#716d6d] mb-10 items-center justify-start">
                <p class="bold font-bold mx-5 text-[#faf9f5] text-sm sm:text-base md:text-lg lg:text-[1.5vw]">kies een
                    vestiging & koop je tickets!</p>
                <div class="relative">
                    <button class="bg-white border-2 rounded-md w-[10vw] h-[2vw] text-[15px] font-bold"
                        onclick="document.getElementById('vestigingen').classList.toggle('hidden')">kies je
                        vestiging</button>
                    <div id="vestigingen" class="hidden absolute flex flex-col bg-white shadow-lg rounded-md p-2 gap-1">
                        <a class="w-[10vw] h-[2vw] text-center" href="#">leerdam</a>
                        <a class="w-[10vw] h-[2vw] text-center" href="#">maarsen</a>
                        <a class="w-[10vw] h-[2vw] text-center" href="#">breukelen</a>
                    </div>
                </div>
            </nav>

            <!-- welkoms bericht -->
            <div class="flex justify-center">
                <div class="h-65 w-[90vw] my-10 bg-black my-20">
                    <h1 class="text-6xl text-[#faf9f5] m-3">Welkom bij Anox Bios</h1>
                    <p class="text-[#faf9f5] m-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus inventore ea cum placeat maxime, doloribus deserunt vitae dolore aliquid nostrum
                        repellendus mollitia similique omnis repellat labore ratione, doloremque, ipsam deleniti?</p>
                </div>
            </div>

            <!-- locaties met afbeelding -->
            <div class="flex justify-center">
                <div class="inline-grid grid-cols-1 sm:grid-cols-4 mx-2 gap-2 my-10">
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                    <div class="locaties"></div>
                </div>
            </div>
            <!-- aanbevolen films -->
            <p class="text-6xl text-[#faf9f5] mx-55 mt-30">aanbevolen films</p>
            <div class="flex justify-center">
                <div class="inline-grid grid-cols-1 sm:grid-cols-6 mx-2 gap-1 my-10">
                    <div class="films"></div>
                    <div class="films"></div>
                    <div class="films"></div>
                    <div class="films"></div>
                    <div class="films"></div>
                    <div class="films"></div>
                </div>
            </div>


        </div>
</body>

</html>