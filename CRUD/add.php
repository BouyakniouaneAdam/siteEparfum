<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajouter utilisateur</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

<form class="flex flex-col h-screen justify-center items-center gap-3 w-1/2 mx-auto"
      action="add.php"
      method="POST">

    <input class="border p-2 rounded w-full" type="text" name="nom" placeholder="Nom">

    <input class="border p-2 rounded w-full" type="text" name="prenom" placeholder="Prénom">

    <input class="border p-2 rounded w-full" type="email" name="email" placeholder="Email">

    <input class="border p-2 rounded w-full" type="password" name="mot_de_passe" placeholder="Mot de passe">

    <input class="border p-2 rounded w-full" type="text" name="telephone" placeholder="Téléphone">

    <input class="border p-2 rounded w-full" type="text" name="adresse" placeholder="Adresse">

    <input class="border p-2 rounded w-full" type="text" name="ville" placeholder="Ville">

    <input class="border p-2 rounded w-full" type="text" name="role" placeholder="Role">

    <button class="bg-blue-500 text-white p-2 rounded" type="submit">
        Ajouter
    </button>

</form>

</body>
</html>
<?php

require 'connexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (
        !empty($_POST['nom']) &&
        !empty($_POST['prenom']) &&
        !empty($_POST['email']) &&
        !empty($_POST['mot_de_passe']) &&
        !empty($_POST['telephone']) &&
        !empty($_POST['adresse']) &&
        !empty($_POST['ville']) &&
        !empty($_POST['role'])
    ) {

        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];

        $mot_de_passe = password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT);
                $mot_de_passe=password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT);


        $telephone = $_POST['telephone'];
        $adresse = $_POST['adresse'];
        $ville = $_POST['ville'];
        $role = $_POST['role'];

        $sql = "INSERT INTO utilisateurs
        (nom, prenom, email, mot_de_passe, telephone, adresse, ville, role)VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nom,$prenom,$email,$mot_de_passe,$telephone, $adresse,$ville,$role]);
        echo "POST reçu<br>";

var_dump($_POST);


        header('location:index.html');
        exit();

    } else {

        echo "Tous les champs sont obligatoires.";

    }
}
