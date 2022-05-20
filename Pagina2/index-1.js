function cambiar()
    {
        var imagenumber = 6;
        var randomnumber = Math.random() ;
        var rand1 = Math.round((imagenumber-1) * randomnumber) + 1 ;
        images = new Array
        images[1]="img/01.jpg";
        images[2]="img/02.jpg";
        images[3]="img/03.jpg";
        images[4]="img/04.jpg";
        images[5]="img/05.jpg";
        images[6]="img/06.jpg";
        document.miimagen.src =  images[rand1];
    };
    