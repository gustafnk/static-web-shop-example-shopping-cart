
$(function(){
  $(document).pjax('.tab-links a', '#product-info-tabs-container', {
    fragment: '#product-info-tabs-container',
    push: false
  });
});