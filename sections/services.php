<?php $services = get_sub_field('service'); ?>


<div class="container">
    <div class="services_container">
        <?php foreach ($services as $service)  :  ?>
            <div class="single_service">
                <div class="service_icon"></div>
                <h3><?php echo $service['content']; ?></h3>
            </div>
        <?php endforeach; ?>
    </div>
</div>
