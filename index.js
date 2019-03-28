$(function(){
  $('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    dots:true
  });

  // $('.slide').click(function(e){

  // });
  
  // When the filter values are changed, 
  // apply the filter to slick.
  $('form.filter select').on('change', function() {
    var filterClass = getFilterValue();
    $('.filter-class').text(filterClass);
    $('.slick').slick('slickUnfilter');
    $('.slick').slick('slickFilter', filterClass);
  });
  
  
  /**
   * This just reads the inputs from the 
   * selects and creates the filter.
   */
  function getFilterValue() {
    // Grab all the values from the filters.
    var values = $('.filter-group').map(function() {
      // For each group, get the select values.
      var groupVal = $(this).find('select').map(function() {
        return $(this).val();
      }).get();
      // join the values together.
      return groupVal.join('');
    }).get();
    // Remove empty strings from the filter array.
    // and join together with a comma. this way you 
    // can use multiple filters.
    return values.filter(function(n) {
      return n !== "";
    }).join(',');
  }
  
  /**
   * Add a delete button to the filter group.
   */
  $('.filter-group .delete').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.filter-group').remove();
  });
  
  /**
   * Add a filter group row.
   */
  $('.add-filter').on('click', function(event) {
    event.preventDefault()
    $('form.filter .filter-group').first().clone(true).insertBefore($('form.filter .add-filter'));
  });
});