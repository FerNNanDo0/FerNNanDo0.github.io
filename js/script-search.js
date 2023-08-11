$(function(){

    const obs = [
        'Cores: preta, branca, marron.',
        'Cores: preta, branca.',
        'Cores: preta, branca.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
    ];
    
    const produtos = [
        {item:'Camisa Hight', img:'img-01.jpg', preco:'50,00', desc:obs[0]},
        {item:'Bermuda Jeans', img:'img-01.jpg', preco:'70,00', desc:obs[1]},
        {item:'Calça 0.40', img:'img-01.jpg', preco:'100,00', desc:obs[2]},
    
        {item:'Camisa Nike', img:'img-01.jpg', preco:'98,90', desc:obs[3]},
        {item:'Tênis Nike', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Nike2', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
    
        {item:'Tênis Nike3', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Nike4', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Ous', img:'img-01.jpg', preco:'400,00', desc:obs[5]},
    
        {item:'Tênis Adidas', img:'img-01.jpg', preco:'300,00', desc:obs[6]},
        {item:'Camisa Diamond', img:'img-01.jpg', preco:'00,00', desc:obs[7]},
        {item:'Moletom 0.40', img:'img-01.jpg', preco:'00,00', desc:obs[8]}
        // ... adicione mais objetos conforme necessário
    ];


    // eliminando acentuação
    function removerSpecials(texto) { 
        texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
        texto = texto.replace(/[àáâãäå]/,"a");
        texto = texto.replace(/[ÈÉÊË]/,"E");
        texto = texto.replace(/[èéêË]/,"e");
        texto = texto.replace(/[Ç]/,"C");
        texto = texto.replace(/[ç]/,"c");
        return texto//.replace(/[^a-z0-9]/gi,''); 
    }

    // Função que faz o filtro de pesquisa
    function search(txtBusca){
        let item = ''
        for( index in produtos ){
            // converter nome do produto pra letras minusculas
            let produto = produtos[index].item.toLowerCase();
            // tirar acentuções dos nomes 
            produto = removerSpecials(produto)
            txtBusca = removerSpecials(txtBusca)

            // verifica se o nome ta na lista
            if( produto.includes( txtBusca.toLowerCase() ) ){
              /*console.log(`${produtos[index].item} ${produtos[index].img} 
                            R$${produtos[index].preco} ${produtos[index].desc}`);*/
                
                
                let htmlList = $('#list-itens');
                // ocultar elementos html
                $('#banner').hide()
                $('#div-carousel').hide()
                $('[name=whats]').hide()

                item += 
                `
                <div class="d-inline-flex float-left mb-2 text-center" id="list-search">
                  <a href="#" class="card-link" id="elevacao">
                   <div id="div-imgs">
                     <img src="imagens/${produtos[index].img}" class="img-fluid">
                     <h5 class="titulo">${produtos[index].item}</h5>
                     <p class="texto">${produtos[index].desc}</p>
                     <p class="real">R$${produtos[index].preco}</p>
                   </div>
                  </a>
                </div>
                `
                $(htmlList).html(item);
            }
        }
    }

    // Button search
    $('[btn-click-search]').on('click', function(){
        let txtBusca = document.getElementById('txtBusca').value;
        if( txtBusca != '' ){
            search(txtBusca);
        }/**/
    });


    // Button enter-search
    $('[name=txtBusca]').on('keypress', function(e){
        //console.log(e.keyCode);
        if( e.keyCode == 13 ){// 13 == enter
            let txtBusca = document.getElementById('txtBusca').value;
            if( txtBusca != '' ){
                search(txtBusca)
            }
        }
    });


    // input da caixa de pesquisa
    $('#txtBusca').on('input', function(){
        let character = document.getElementById('txtBusca').value
        if( character == 0 ){
            // console.log(character.length)
            window.location.reload(false);
        }
    });




});