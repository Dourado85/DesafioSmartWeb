 var produtos = [
        {
          nome: 'Notebook Pro 14", i5, 16 GB, SSD 512 GB',
          sku: "NB-PRO14",
          linha: "comp",
          preco: "4290",
          desc: "Tela Full HD, teclado com numérico reduzido e bateria para o dia todo.",
        },
        {
          nome: "Desktop Office, i5, 8 GB, SSD 256 GB",
          sku: "DT-OFFICE",
          linha: "comp",
          preco: "2890",
          desc: "Torre compacta para caixa e atendimento, com Windows 11 Pro.",
        },
        {
          nome: "Mini PC Compacto, Ryzen 5, 16 GB",
          sku: "MP-R5",
          linha: "comp",
          preco: "2390",
          desc: "Cabe atrás do monitor e gasta pouca energia. Ideal para recepção.",
        },
        {
          nome: 'Monitor 24" Full HD IPS',
          sku: "MN-24IPS",
          linha: "comp",
          preco: "849",
          desc: "Ângulo de visão aberto, entradas HDMI e DisplayPort, base ajustável.",
        },
        {
          nome: "Switch gerenciável Gigabit, 24 portas",
          sku: "SW-GER24",
          linha: "rede",
          preco: "1690",
          desc: "VLANs, controle de banda e portas sobrando para a empresa crescer.",
        },
        {
          nome: "Access Point Wi-Fi 6 de teto",
          sku: "AP-W6T",
          linha: "rede",
          preco: "780",
          desc: "Rede separada para visitantes e alimentação pelo cabo de rede (PoE).",
        },
        {
          nome: "Roteador dual WAN com VLAN",
          sku: "RT-DWAN",
          linha: "rede",
          preco: "620",
          desc: "Dois links de internet com troca automática se um cair.",
        },
        {
          nome: "Cabo CAT6, caixa com 305 m",
          sku: "CB-CAT6-305",
          linha: "rede",
          preco: "690",
          desc: "Par trançado para pontos de rede Gigabit, com capa antichama.",
        },
        {
          nome: "NAS de 2 baias",
          sku: "NAS-2B",
          linha: "prot",
          preco: "2190",
          desc: "Compartilha arquivos e faz backup automático. Discos vendidos à parte.",
        },
        {
          nome: "Nobreak senoidal 1500 VA",
          sku: "UPS-1500S",
          linha: "prot",
          preco: "2450",
          desc: "Energia limpa para servidor e switch, com proteção contra queima.",
        },
        {
          nome: "SSD NVMe 1 TB",
          sku: "SSD-NV1T",
          linha: "prot",
          preco: "520",
          desc: "Troca o disco antigo e deixa o computador bem mais rápido.",
        },
        {
          nome: "HD externo 2 TB, USB 3.0",
          sku: "HD-EXT2T",
          linha: "prot",
          preco: "489",
          desc: "Segunda mídia local para a cópia de segurança diária.",
        },
      ];

      var carrinho = [];
      var linhaAtual = "todas";
      var total;

      function mostraAba(aba) {
        document.getElementById("empresa").style.display = "none";
        document.getElementById("produtos").style.display = "none";
        document.getElementById("contato").style.display = "none";
        document.getElementById("faq").style.display = "none";
        document.getElementById(aba).style.display = "block";
      }

     function montaCatalogo() {
      var html = "";
      var termo = document.getElementById("busca").value.toLowerCase().trim();

      for (var i = 0; i < produtos.length; i++) {

      var correspondeCategoria =
        linhaAtual == "todas" || produtos[i].linha == linhaAtual;

      var textoProduto = (
        produtos[i].nome + " " +
        produtos[i].desc + " " +
        produtos[i].sku
      ).toLowerCase();

      var correspondePesquisa = textoProduto.indexOf(termo) !== -1;

      if (correspondeCategoria && correspondePesquisa) {

      var preco = Number(produtos[i].preco);

      html += "<div class='card'>";
      html += "<div class='card-imagem'>";
      html += "<img src='IMG/" + produtos[i].sku + ".png' alt='" + produtos[i].nome + "'>";
      html += "</div>";

      html += "<div class='card-conteudo'>";
      html += "<span class='card-sku'>" + produtos[i].sku + "</span>";
      html += "<h4>" + produtos[i].nome + "</h4>";
      html += "<p class='card-descricao'>" + produtos[i].desc + "</p>";

      html += "<div class='card-preco'>";
      html += "<strong>" + preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
      }) + "</strong>";
      html += "<small>ou 10x de " + (preco / 10).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
      }) + "</small>";
      html += "</div>";

      html += "<div class='botao' onclick='adiciona(" + i + ")'>Adicionar ao pedido</div>";
      html += "</div></div>";
      }
      }

    if (html === "") {
    html = "<p>Nenhum produto encontrado.</p>";
    }

    document.getElementById("catalogo").innerHTML = html; 
    }

      function filtra(l) {
        linhaAtual = l;
        montaCatalogo();
      }
      function busca() {
        var termo = document.getElementById("busca").value;
        var resultado = document.getElementById("resultadoBusca");

        resultado.textContent = "Você digitou: " + termo;

        montaCatalogo();
      }
        function adiciona(i) {
        carrinho.push(produtos[i]);
        for (var j = 0; j < carrinho.length; j++) {
          total = total + carrinho[j].preco;
        }
        document.getElementById("qtd").innerHTML = carrinho.length;
        document.getElementById("total").innerHTML = "R$ " + total;
        alert("PRODUTO ADICIONADO COM SUCESSO!!!!!");
      }

      function limpar() {
        carrinho = "";
        document.getElementById("total").innerHTML = "";
      }

      function enviar() {
        var nome = document.getElementById("nome").value;
        var email = document.getElemetById("email").value;
        var msg = document.getElementById("msg").value;
        if (nome == "") {
          alert("ERRO!!!");
        }
        if ((email.indexOf("@") = -1)) {
          alert("ERRO NO EMAIL");
        }
        if (msg == "") alert("ERRO");
        document.getElementById("resultado").innerHTML =
          "Nome: " + nome + "<br>Email: " + email + "<br>Mensagem: " + msg;
      }

      function copiar(id) {
        document.execCommand("copy");
        alert("copiado");
      }

      window.onload = montaCatalogo();
    document.getElementById("anoAtual").textContent =
  "© " + new Date().getFullYear();