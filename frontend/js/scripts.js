$(document).ready(function () {

    $("#btn_inserir").click(function () {
        valorNome = $("#input_inserir_nome").val();
        valorDescricao = $("#input_inserir_descricao").val();
        valorMarca = $("#input_inserir_marca").val();
        valorPreco = $("#input_inserir_preco").val();
        $.ajax({
            url: 'http://localhost:3000/produto/inserir',
            type: 'POST',
            crossDomain: true,
            dataType: 'json',
            data: {
                nome: valorNome,
                descricao: valorDescricao,
                marca: valorMarca,
                preco: valorPreco
            },
            success: function (result, status, xhr) { alert(status); },
            error: function () { alert("error"); },
        });
    });

    $("#btn_listar").click(function () {
        $.ajax({
            url: 'http://localhost:3000/produto/listar',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (result, status, xhr) {
                table = '<table class="table" border="1">';
                table += '<tr><th>ID</th><th>Nome</th><th>Descricao</th><th>Marca</th><th>Preco</th></tr>'
                $.each(result, function (indice, obj) {
					table += `<tr><td>${obj.id}</td><td>${obj.nome}</td><td>${obj.descricao}</td><td>${obj.marca}</td><td>${obj.preco}</td></tr>`;
                });
                table += '</table>';
                $("#div_listar").html(table);
             },
            error: function () { alert("error"); }
        });
    });

    $("#btn_atualizar").click(function () {
        valorId = $("#input_atualizar_id").val();
        valorNome = $("#input_atualizar_nome").val();
        valorDescricao = $("#input_atualizar_descricao").val();
        valorMarca = $("#input_atualizar_marca").val();
        valorPreco = $("#input_atualizar_preco").val();

        $.ajax({
            url: 'http://localhost:3000/produto/atualizar',
            type: 'PUT',
            crossDomain: true,
            dataType: 'json',
            data: {
                id: valorId,
                nome: valorNome,
                descricao: valorDescricao,
                marca: valorMarca,
                preco: valorPreco
            },
            success: function (result, status, xhr) { alert(status); },
            error: function () { alert("error"); }
        });
    });

    $("#btn_excluir").click(function () {
        valorId = $("#input_excluir_id").val();
        $.ajax({
            url: 'http://localhost:3000/produto/excluir',
            type: 'DELETE',
            crossDomain: true,
            dataType: 'json',
            data: {
                id: valorId
            },
            success: function (result, status, xhr) { alert(status); },
            error: function () { alert("error"); }
        });
    });

    $("#btn_buscar").click(function () {
        valorId = $("#input_buscar_id").val();
        $.ajax({
            url: `http://localhost:3000/produto/buscar?id=${valorId}`,
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (result, status, xhr) {
                table = '<table class="table" border="1">';
                table += '<tr><th>ID</th><th>Nome</th><th>Descricao</th><th>Marca</th><th>Preco</th></tr>'
                $.each(result, function (indice, obj) {
					table += `<tr><td>${obj.id}</td><td>${obj.nome}</td><td>${obj.descricao}</td><td>${obj.marca}</td><td>${obj.preco}</td></tr>`;
                });
                table += '</table>';
                $("#div_listar").html(table);
             },
            error: function () { alert("error"); }
        });
    });

});