<?php if ( have_rows('questions') ) : ?>
<div class="container">
<dl class="faq_container">
	<?php $faq = 0; while ( have_rows('questions') ) : the_row(); ?>

    <dt data-answer="faq_<?php echo $faq; ?>"><?php echo get_sub_field('question'); ?></dt>
    <dd id="faq_<?php echo $faq; ?>"><?php echo get_sub_field('answer'); ?></dd>




	<?php $faq++; endwhile; ?>
</dl>
</div><!--  END OF CONTAINER -->


<?php endif; ?>
