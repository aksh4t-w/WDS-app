const rootStyles = window.getComputedStyle(document.documentElement);

if (
  rootStyles.getPrppertyValue("--book-cover-width-large") != null &&
  rootStyles.getPrppertyValue("--book-cover-width-large") !== ""
) {
  ready();
} else {
  document.getElementById("main-css").addEventListener("load", ready);
}

function ready() {
  const coverWidth = parseFloat(
    rootStyles.getPrppertyValue("--book-cover-width-large")
  );

  const aspectRatio = parseFloat(
    rootStyles.getPrppertyValue("--book-cover-aspect-ratio")
  );

  const coverHeight = coverWidth / aspectRatio;

  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
  );

  FilePond.setOptions({
    stylePanelAspectRatio: 1 / aspectRatio,
    imageResozeTargetHeight: coverHeight,
    imageResozeTargetWidth: coverWidth,
  });

  FilePond.parse(document.body);
}
