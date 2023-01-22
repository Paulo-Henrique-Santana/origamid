<html>
<head>
	<title>Loop</title>
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

	<div class="exemplo1">

		<h1>Total de Sites Vendidos</h1>
		<ul>
		<?php
			$total = 1;
			$maximo = 10;
			while ($total <= $maximo) :
		?>
			<li>Site <?php echo $total; ?></li>
		<?php 
			$total++;
			endwhile;
		?>
		</ul>

	</div>

</body>
</html>