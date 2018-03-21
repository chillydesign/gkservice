<?php if ( have_rows('people') ) : ?>
<div class="container">
<ul class="people_container">
	<?php $faq = 0; while ( have_rows('people') ) : the_row(); ?>
        <?php $image = get_sub_field( 'image' ); ?>
        <li>
            <div class="person_image" style="background-image:url(<?php echo $image['sizes']['medium']; ?>)"></div>
            <div class="bio_container">
            <h3><?php echo get_sub_field('name'); ?></h3>
            <p><?php echo get_sub_field('biography'); ?></p>
            </div>
        </li>


	<?php $faq++; endwhile; ?>
</ul>
</div><!--  END OF CONTAINER -->


<?php endif; ?>
