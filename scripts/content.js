chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      var commentCount = $(".review-comments").length;
      var numberOfChangedCode = $(".text-green").html();
      numberOfChangedCode = numberOfChangedCode.replace("+", "");
      numberOfChangedCode = numberOfChangedCode.replace(",", "");
      var prInfo = {
          issue: $(".issue-link").first().text(),
          author: $(".pull-header-username").text(),
          commentCount: commentCount,
          numberOfChangedCode: numberOfChangedCode,
          changedFiles: $("#files_tab_counter").text(),
          commentsPerchangedLineCode: commentCount/parseInt(numberOfChangedCode)
    };

    response(prInfo);
  }
});
