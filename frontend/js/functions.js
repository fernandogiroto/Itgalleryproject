function artsListComponent(elementAppend) {
    $.get("http://localhost:8000/api/art", function (artData) {
        $.each(artData, function (key, art) {
            $('.' + elementAppend).append(
                "<div class='col-12 col-md-6 col-lg-3 mt-3'><div class='card'> <a href='art.html?art=" +
                art.id +
                "'><img src='" +
                art.image_art +
                "' class='card-img-top' alt='" +
                art.name_art +
                "'  /></a><div class='card-body'><h5 class='card-title'>" +
                art.name_art +
                "</h5><p class='card-text'>" +
                art.description +
                "</p><a href='art.html?art=" +
                art.id +
                "' class='btn btn-dark'>Ver más</a></div></div></div>"
            );
        });
    });
}

function formArtEditComponent() {
    let artId;
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("art")) {
        artId = searchParams.get("art");
        $.get("http://localhost:8000/api/art/" + artId, function (data) {
            $(".formArtUpdate").html(
                '<form name="updateArtform" action="#" id="updateArtform"><div class="mb-2"> <label for="name_art" class="form-label">Nombre de la Obra</label > <input type="text" class="form-control" id="name_art" value="' + data.name_art + '" name="' + data.name_art + '" /> </div><div class="mb-2"> <label for="name_artist_art" class="form-label" >Nombre de el Artista</label > <input type="text" class="form-control" id="name_artist_art" value="' + data.name_artist_art + '"  name="' + data.name_artist_art + '"/> </div><div class="mb-2"> <label for="image_art" class="form-label" >Foto de la Arte</label > <input type="file" class="form-control" name="image_art" id="image_art" /> </div><div class="mb-2"> <label for="measurements" class="form-label">Medidas</label> <input type="text" class="form-control" id="measurements" value="' + data.measurements + '" name="' + data.measurements + '" /> </div><div class="mb-2"> <label for="year_art" class="form-label">Año de la Obra</label > <input type="text" class="form-control" id="year_art" value="' + data.year_art + '" name="' + data.year_art + '" /> </div><div class="mb-2"> <label for="inventory_number" class="form-label" >Numero del Inventario</label > <input type="text" class="form-control" id="inventory_number" value="' + data.inventory_number + '" name="' + data.inventory_number + '"/> </div><div class="mb-2"> <label for="description" class="form-label" >Descripción</label > <input type="text" class="form-control" id="description" value="' + data.description + '" name="' + data.description + '" /> </div><button class="btn btn-dark mb-4 mt-3"   onclick="updateArt(' + data.id + ')"> Actualizar Descripción Arte</button> </form>'
            );
        });
    } else {
        console.log('The id was not indicated by parameter in the url');
    }
}

function artDescription(artId) {
    $url = 'http://localhost:8000/api/art/' + artId;
    $.get($url, function (artData) {
        document.getElementById("artData").innerHTML =
            "<div class='col-12 col-md-6 pt-4'> <img src='http://localhost:8000/storage/" + artData.image_art + "' alt='" + artData.name_art + "' class='img-fluid border border-dark border-5 rounded shadow' /> <br /></div> <div class='col-12 col-md-6 pt-4'> <div id='art-information'> <h1 class='fw-bolder'>" + artData.name_art + "</h1> <span class='d-block text-muted'>From series: Intervention</span> <span class='d-block text-danger' >" + artData.name_artist_art + "</span > <div class='mb-3' id='art-status'> <span class='badge bg-warning text-dark'>Reserved</span> <span class='badge bg-success'>Available</span> </div> <span class='d-block'>" + artData.inventory_number + "</span> <span class='d-block'>" + artData.year_art + "</span> <span class='d-block' >" + artData.measurements + " 5x25x13 cm . 1.9x9.8x5.1 in</span > <span class='d-block'>800€ | 1,299 USD</span> <span class='d-block fw-bold mt-3'>Descripción del Arte</span> <p>" + artData.description + "</p></div></div></div>";
    });
}
function getArtDescriptionById() {
    let artId;
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("art")) {
        artId = searchParams.get("art");
        $.get("http://localhost:8000/api/art/" + artId, function (artData) { })
            .done(function () {
                artDescription(artId);
            })
            .fail(function () {
                console.log("Id not Found");
            });
    } else {
        window.location.href = "index.html";
    }
}

function updateArt(artId) {
    event.preventDefault();
    $url = 'http://localhost:8000/api/art/' + artId;
    var formData = new FormData();
    if ($('#image_art')[0].files[0]) {
        formData.append('file', $('#image_art')[0].files[0]);
    }
    formData.append('name_art', $('#name_art').val());
    formData.append('name_artist_art', $('#name_artist_art').val());
    formData.append('year_art', $('#year_art').val());
    formData.append('inventory_number', $('#inventory_number').val());
    formData.append('measurements', $('#measurements').val());
    formData.append('description', $('#description').val());
    formData.append('_method', 'PUT');
    console.log(formData);
    $.ajax({
        url: $url,
        dataType: 'JSON',
        method: 'POST',
        cache: false,
        processData: false,
        contentType: false,
        enctype: 'multipart/form-data',
        data: formData,
        success: function (data) {
            location.reload();
            wait = false;
        },
        error: function (data) {
            console.log(data);
            console.log('All fields are mandatory');
        }
    });
}

function createArt() {
    event.preventDefault();
    var formData = new FormData();
    formData.append('file', $('#image_art')[0].files[0]);
    formData.append('name_art', $('#name_art').val());
    formData.append('name_artist_art', $('#name_artist_art').val());
    formData.append('year_art', $('#year_art').val());
    formData.append('inventory_number', $('#inventory_number').val());
    formData.append('measurements', $('#measurements').val());
    formData.append('description', $('#description').val());
    $.ajax({
        url: "http://127.0.0.1:8000/api/art",
        dataType: 'JSON',
        method: 'POST',
        cache: false,
        processData: false,
        contentType: false,
        enctype: 'multipart/form-data',
        data: formData,
        success: function (data) {
            window.location.href = "index.html";
            wait = false;
        },
        error: function (data) {
            console.log(data);
            console.log('All fields are mandatory');
        }
    });
}