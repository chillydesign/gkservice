<?php if( function_exists('have_rows') ) :  $iii = 0; ?>
<?php if( have_rows('sections') ) : while ( have_rows('sections') ) : the_row(); ?>

	<?php $row_layout =  get_row_layout();    ?>

	<section  class="section  section_<?php echo $row_layout; ?>"  id="section_<?php echo $row_layout; ?>_<?php echo $iii; ?>" >

		<?php  get_template_part(  'sections/' . $row_layout   ); ?>

	</section>

<?php $iii++; endwhile; endif; ?>


<?php endif; ?>
