
$(function(){
  $(document).pjax('.tab-links a', '#product-info-tabs-container', {
    fragment: '#product-info-tabs-container'
  });

  $(document).pjax('.product-variations-links a', '#product-variations-container', {
    fragment: '#product-variations-container'
  });
});