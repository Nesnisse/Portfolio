
function showInfo(option) {
    var content = "";

    switch (option) {
        case 'presentation':
            content = "Actuellement en licence MIASHS. Mon parcours académique m'a ouvert les portes du monde fascinant du développement web. Je m'intéresse particulièrement à l'intersection entre la créativité et la fonctionnalité dans la conception de solutions web ";
            break;
        case 'langue':
            content = "Langues : <br> <strong> Arabe </strong> (langue maternelle) <br>  <strong>  Français </strong> (C1)  <br>  <strong> Anglais </strong> (B2)";
            break;
        case 'passions' :
            content = "Mes passions: <br> <strong> Le volley-ball </strong>🏐 :Le volley-ball , c'est bien plus qu'un sport pour moi, c'est l'énergie, la collaboration et la passion réunies sur le terrain  <br> <strong> La cuisine </strong> 🍳:cuisiner est un moyen créatif qui me permet de composer des saveurs et de partager des moments chaleureux ";
            break;
        default:
            content = "";
            break;
    }

    document.getElementById('aboutMeContent').innerHTML = content;
}
