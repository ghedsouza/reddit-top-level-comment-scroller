chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse)
   {
      switch (request.name)
      {
         case "getPreferences":
            // request from the content script to get the preferences.
            sendResponse(
                  {
                     Enabled : localStorage["RedditCommentScroller_box_enabled"],
                  });
            break;
      }
   }
);
