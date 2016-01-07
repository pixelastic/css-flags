/* globals algoliasearch, algoliasearchHelper, $, _ */
let CSSFlags = {
  init() {
    this.$searchInput = $('#searchbar-input');
    this.client = algoliasearch('O3F8QXYK6R', '3253f339ecaf4ff23f0afe8ad2ae655a');
    this.helper = algoliasearchHelper(this.client, 'cssflags');

    this.$searchInput.on('keyup', this.updateQuery);
    this.helper.on('result', this.updateResults);
  },
  updateQuery() {
    let query = $(CSSFlags.$searchInput).val();
    CSSFlags.helper.setQuery(query).search();
  },
  updateResults(results) {
    let flags = _.map(results.hits, (hit) => {
      let name = hit.name;
      if (hit._highlightResult.name) {
        name = hit._highlightResult.name.value;
      }

      return {
        code: hit.code,
        name
      };
    });

    // Hide them all
    $('.c-flaglist--item').hide();

    _.each(flags, (flag) => {
      let flagNode = $(`.c-flag__${flag.code}`);
      let parent = flagNode.closest('.c-flaglist--item');
      if (parent.hasClass('c-flaglist--name__hard') || parent.hasClass('c-flaglist--item__unknown')) {
        return;
      }
      parent.find('.c-flaglist--name').html(flag.name);
      parent.show();
    });
  }
};

export default CSSFlags;
