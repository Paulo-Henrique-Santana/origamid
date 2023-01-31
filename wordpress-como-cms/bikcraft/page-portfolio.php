<?php
// Template Name: Portfolio
get_header();
?>

<section class="introducao-interna interna_portfolio">
	<div class="container">
		<h1>Portfólio</h1>
		<p>conheça os projetos que amamos mostrar</p>
	</div>
</section>

<section class="container animar-interno">
	<ul class="rslides">
		<li>
			<blockquote class="quote_clientes">
				<p>“Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.”</p>
				<cite>Barbara Moss</cite>
			</blockquote>
		</li>

		<li>
			<blockquote class="quote_clientes">
				<p>“Nada melhor do que dar um rolê com a minha Bikcraft na orla. Essa é a minha companheira mais fiel, nunca me traiu e está sempre a minha disposição.”</p>
				<cite>Jhony Rato</cite>
			</blockquote>
		</li>

		<li>
			<blockquote class="quote_clientes">
				<p>“Aqueles que ainda não possuem uma Bikcraft, não sabem o que estão perdendo. A precisão é absurda e a velocidade transcendental. Nunca vida nada igual.”</p>
				<cite>Bernardo</cite>
			</blockquote>
		</li>
	</ul>
</section>

<section class="portfolio">
	<div class="container">
		<ul class="portfolio_lista rslides_portfolio">

			<li>
				<div class="grid-8"><img src="img/portfolio/retro.jpg" alt="Bicicleta Retrô"></div>
				<div class="grid-8"><img src="img/portfolio/passeio.jpg" alt="Bicicleta Passeio"></div>
				<div class="grid-16"><img src="img/portfolio/esporte.jpg" alt="Bicicleta Esporte"></div>
			</li>

			<li>
				<div class="grid-8"><img src="img/portfolio/passeio.jpg" alt="Bicicleta Passeio"></div>
				<div class="grid-8"><img src="img/portfolio/retro.jpg" alt="Bicicleta Retrô"></div>
				<div class="grid-16"><img src="img/portfolio/esporte.jpg" alt="Bicicleta Esporte"></div>
			</li>

		</ul>
	</div>
</section>

<?php get_footer(); ?>