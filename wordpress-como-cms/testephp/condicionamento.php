<html>
<head>
	<title>Condicionamento</title>
</head>
<style>
	body {
		font-size: 1.5em;
	}
	div {
		margin: 0 auto;
		max-width: 500px;
	}
	.exemplo1 {
		color: #333;
	}
</style>
<body>

	<?php 
		$tituloSite = 'Site Origamid';
	?>
	<div class="exemplo1">
		<?php if ($tituloSite == 'Site Origamid') { ?>

			<h1><?php echo $tituloSite ?></h1>
			<p>Quer aprender Web Design então se cadastre no site da <?php echo $tituloSite ?></p>

		<?php } else { ?>

			<h1>Este não é o site da Origamid</h1>

		<?php } ?>
	</div>

	<?php $comprou = false ?>
	<div class="exemplo2">
		<?php if ($comprou == true) { ?>
			<p>Liberar acesso ao curso</p>
		<?php } else { ?>
			<p>Curso bloqueado.</p>
		<?php } ?>
	</div>

</body>
</html>