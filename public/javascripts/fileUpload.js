FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

FilePond.setOptions({
  stylePanelAspectRatio: 150 / 100,
  imageResozeTargetHeight: 150,
  imageResozeTargetWidth: 100,
});

FilePond.parse(document.body);
