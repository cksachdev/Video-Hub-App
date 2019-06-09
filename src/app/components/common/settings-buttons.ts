import { SettingsButton } from './settings-buttons.interface';

// Add `SettingsButtons` items here so they show up in the buttons ribbon and in the settings
// Each array separates buttons into their own button groups visually
export const SettingsButtonsGroups: string[][] = [
  [
    'hideSidebar',
  ],
  [
    'folderUnion',
    'folderIntersection',
    'fileUnion',
    'fileIntersection',
    'exclude',
    'tagUnion',
    'tagIntersection',
    'tagExclusion',
    'magic',
  ],
  [
    'durationFilter',
    'resolutionFilter',
    'starFilter',
    'sortOrder',
    'sortOptionTime',
    'sortOptionSize',
    'sortOptionTimesPlayed',
    'sortOptionStar',
    'sortOptionYear',
    'sortOptionModified',
  ],
  [
    'showFreq',
    'extendedWordCloud',
    'showRecent'
  ],
  [
    'showThumbnails',
    'showFilmstrip',
    'showFullView',
    'showDetails',
    'showFiles',
    'showClips',
  ],
  [
    'showRelatedVideosTray',
  ],
  [
    'showTags',
    'autoFileTags',
    'autoFolderTags',
  ],
  [
    'showTagTray',
    'manualTags',
    'tagFrequencySort'
  ],
  [
    'showMoreInfo',
    'fontSizeLarger',
    'hoverScrub',
    'muteClips',
    'returnToFirstScreenshot',
    'autoplayClips',
    'randomImage',
    'randomizeGallery',
    'shuffleGalleryNow',
    'showFolders'
  ],
  [
    'makeSmaller',
    'makeLarger',
  ],
  [
    'darkMode',
  ],
  [
    'hideTop',
    'flatIcons'
  ],
  [
    'startWizard',
    'rescanDirectory',
    'importNewFiles',
    'verifyThumbnails',
    'regenerateLibrary',
    'resetSettings',
    'clearHistory'
  ]
];

export const SettingsMetaGroup: any = [
  [
    ...SettingsButtonsGroups[0],
    'break',
    ...SettingsButtonsGroups[1],
    'break',
    ...SettingsButtonsGroups[2],
    'break',
    ...SettingsButtonsGroups[3],
  ],
  [
    ...SettingsButtonsGroups[4],
    'break',
    ...SettingsButtonsGroups[5],
    'break',
    ...SettingsButtonsGroups[6],
    'break',
    ...SettingsButtonsGroups[7],
    'break',
    ...SettingsButtonsGroups[8],
    'break',
    ...SettingsButtonsGroups[9],
    'break',
    ...SettingsButtonsGroups[10],
    'break',
    ...SettingsButtonsGroups[11],
  ],
  [
    ...SettingsButtonsGroups[12],
  ],
];

// correspond to each group above
export const SettingsMetaGroupLabels: string[] = [
  'SETTINGS.searchAndFilter',
  'SETTINGS.galleryAndView',
  'SETTINGS.otherSettings',
  'SETTINGS.reloadUpdate' // CURRENTLY UNUSED
];

export let SettingsButtons: { [s: string]: SettingsButton } = {
  'showThumbnails': {
    hidden: false,
    toggled: true,
    iconName: 'icon-show-thumbnails',
    title: 'BUTTONS.showThumbnailsHint',
    description: 'BUTTONS.showThumbnailsDescription',
  },
  'showDetails': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-details',
    title: 'BUTTONS.showDetailsHint',
    description: 'BUTTONS.showDetailsDescription',
  },
  'showFilmstrip': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-filmstrip',
    title: 'BUTTONS.showFilmstripHint',
    description: 'BUTTONS.showFilmstripDescription',
  },
  'showFullView': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-full-view',
    title: 'BUTTONS.showFullViewHint',
    description: 'BUTTONS.showFullViewDescription',
  },
  'showFiles': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-filenames',
    title: 'BUTTONS.showFilesHint',
    description: 'BUTTONS.showFilesDescription',
  },
  'showClips': {
    hidden: false,
    toggled: false,
    iconName: 'icon-video-blank',
    title: 'BUTTONS.showClipsHint',
    description: 'BUTTONS.showClipsDescription',
  },
  'showTags': {
    hidden: false,
    toggled: false,
    iconName: 'icon-tag',
    title: 'BUTTONS.showTagsHint',
    description: 'BUTTONS.showTagsDescription',
    settingsHeading: 'SETTINGS.autoGenerated',
    moreInfo: 'BUTTONS.showTagsMoreInfo',
  },
  'showMoreInfo': {
    hidden: false,
    toggled: true,
    iconName: 'icon-tag',
    title: 'BUTTONS.showMoreInfoHint',
    description: 'BUTTONS.showMoreInfoDescription',
    settingsHeading: 'SETTINGS.miscView',
  },
  'fontSizeLarger': {
    hidden: true,
    toggled: false,
    iconName: 'icon-larger',
    title: 'BUTTONS.fontSizeLargerHint',
    description: 'BUTTONS.fontSizeLargerDescription',
  },
  'hoverScrub': {
    hidden: true,
    toggled: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.hoverScrubHint',
    description: 'BUTTONS.hoverScrubDescription',
  },
  'muteClips': {
    hidden: true,
    toggled: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.muteClipsHint',
    description: 'BUTTONS.muteClipsDescription',
  },
  'returnToFirstScreenshot': {
    hidden: true,
    toggled: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.returnToFirstScreenshotHint',
    description: 'BUTTONS.returnToFirstScreenshotDescription',
  },
  'autoplayClips': {
    hidden: true,
    toggled: false,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.autoplayClipsHint',
    description: 'BUTTONS.autoplayClipsDescription',
  },
  'randomImage': {
    hidden: true,
    toggled: false,
    iconName: 'icon-random',
    title: 'BUTTONS.randomImageHint',
    description: 'BUTTONS.randomImageDescription',
  },
  'randomizeGallery': {
    hidden: true,
    toggled: false,
    iconName: 'icon-random',
    title: 'BUTTONS.randomizeGalleryHint',
    description: 'BUTTONS.randomizeGalleryDescription',
  },
  'shuffleGalleryNow': {
    hidden: false,
    toggled: false,
    iconName: 'icon-random',
    title: 'BUTTONS.shuffleGalleryNowHint',
    description: 'BUTTONS.shuffleGalleryNowDescription',
  },
  'showFolders': {
    hidden: true,
    toggled: true,
    iconName: 'icon-folder-blank',
    title: 'BUTTONS.showFoldersHint',
    description: 'BUTTONS.showFoldersDescription',
  },
  'makeSmaller': {
    hidden: false,
    toggled: false,
    iconName: 'icon-minus',
    title: 'BUTTONS.makeSmallerHint',
    description: 'BUTTONS.makeSmallerDescription',
    settingsHeading: 'SETTINGS.zoom'
  },
  'makeLarger': {
    hidden: false,
    toggled: false,
    iconName: 'icon-plus',
    title: 'BUTTONS.makeLargerHint',
    description: 'BUTTONS.makeLargerDescription',
  },
  'darkMode': {
    hidden: false,
    toggled: false,
    iconName: 'icon-darken',
    title: 'BUTTONS.darkModeHint',
    description: 'BUTTONS.darkModeDescription',
    settingsHeading: 'SETTINGS.darkMode'
  },
  'showRelatedVideosTray': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-thumbnails',
    title: 'BUTTONS.relatedTrayHint',
    description: 'BUTTONS.relatedTrayDescription',
    settingsHeading: 'SETTINGS.relatedVideosTray'
  },
  'showTagTray': {
    hidden: false,
    toggled: false,
    iconName: 'icon-tag',
    title: 'BUTTONS.tagTrayHint',
    description: 'BUTTONS.tagTrayDescription',
    settingsHeading: 'SETTINGS.manualTags'
  },
  'tagFrequencySort': {
    hidden: false,
    toggled: false,
    iconName: 'icon-tag',
    title: 'BUTTONS.tagFrequencySortHint',
    description: 'BUTTONS.tagFrequencySortDescription',
  },
  'folderUnion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-folder-plus',
    title: 'BUTTONS.folderUnionHint',
    description: 'BUTTONS.folderUnionDescription',
    settingsHeading: 'SETTINGS.searchFilters'
  },
  'folderIntersection': {
    hidden: false,
    toggled: true,
    iconName: 'icon-folder-minus',
    title: 'BUTTONS.folderHint',
    description: 'BUTTONS.folderDescription',
  },
  'fileUnion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-video-plus',
    title: 'BUTTONS.fileUnionHint',
    description: 'BUTTONS.fileUnionDescription',
  },
  'fileIntersection': {
    hidden: false,
    toggled: true,
    iconName: 'icon-video-minus',
    title: 'BUTTONS.fileHint',
    description: 'BUTTONS.fileDescription',
  },
  'exclude': {
    hidden: true,
    toggled: false,
    iconName: 'icon-video-x',
    title: 'BUTTONS.excludeHint',
    description: 'BUTTONS.excludeDescription',
  },
  'tagUnion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-video-plus',
    title: 'BUTTONS.tagUnionHint',
    description: 'BUTTONS.tagUnionDescription',
  },
  'tagIntersection': {
    hidden: false,
    toggled: false,
    iconName: 'icon-video-minus',
    title: 'BUTTONS.tagIntersectionHint',
    description: 'BUTTONS.tagIntersectionDescription',
  },
  'tagExclusion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-video-x',
    title: 'BUTTONS.tagExclusionHint',
    description: 'BUTTONS.tagExclusionDescription',
  },
  'manualTags': {
    hidden: true,
    toggled: true,
    iconName: 'icon-cloud',
    title: 'BUTTONS.manualTagsHint',
    description: 'BUTTONS.manualTagsDescription'
  },
  'autoFileTags': {
    hidden: true,
    toggled: true,
    iconName: 'icon-cloud',
    title: 'BUTTONS.autoFileTagsHint',
    description: 'BUTTONS.autoFileTagsDescription',
  },
  'autoFolderTags': {
    hidden: true,
    toggled: false,
    iconName: 'icon-cloud',
    title: 'BUTTONS.autoFolderTagsHint',
    description: 'BUTTONS.autoFolderTagsDescription',
  },
  'magic': {
    hidden: false,
    toggled: true,
    iconName: 'icon-looking-glass',
    title: 'BUTTONS.magicHint',
    description: 'BUTTONS.magicDescription',
  },
  'resolutionFilter': {
    hidden: false,
    toggled: false,
    iconName: 'icon-res-filter',
    title: 'BUTTONS.resolutionFilterHint',
    description: 'BUTTONS.resolutionFilterDescription',
  },
  'starFilter': {
    hidden: false,
    toggled: false,
    iconName: 'icon-star',
    title: 'BUTTONS.starFilterHint',
    description: 'BUTTONS.starFilterDescription',
  },
  'durationFilter': {
    hidden: false,
    toggled: false,
    iconName: 'icon-hourglass',
    title: 'BUTTONS.durationFilterHint',
    description: 'BUTTONS.durationFilterDescription',
    settingsHeading: 'SETTINGS.sortingFilters',
  },
  'sortOrder': {
    hidden: false,
    toggled: false,
    iconName: 'icon-res-filter',
    title: 'BUTTONS.sortOrderHint',
    description: 'BUTTONS.sortOrderDescription',
  },
  'sortOptionTime': {
    hidden: false,
    toggled: true,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionTimeDescription',
    settingsHeading: 'BUTTONS.sortOptionsHeading'
  },
  'sortOptionSize': {
    hidden: false,
    toggled: true,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionSizeDescription',
  },
  'sortOptionTimesPlayed': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionTimesPlayedDescription',
  },
  'sortOptionStar': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionStarDescription',
  },
  'sortOptionYear': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionYearDescription',
  },
  'sortOptionModified': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark',
    title: '',
    description: 'BUTTONS.sortOptionModifiedDescription',
  },
  'showFreq': {
    hidden: false,
    toggled: false,
    iconName: 'icon-cloud',
    title: 'BUTTONS.showFreqHint',
    description: 'BUTTONS.showFreqDescription',
    settingsHeading: 'SETTINGS.wordCloud'
  },
  'extendedWordCloud': {
    hidden: false,
    toggled: false,
    iconName: 'icon-cloud-plus',
    title: 'BUTTONS.extendedWordCloudHint',
    description: 'BUTTONS.extendedWordCloudDescription',
  },
  'showRecent': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-filenames',
    title: 'BUTTONS.showRecentHint',
    description: 'BUTTONS.showRecentDescription',
  },
  'hideSidebar': {
    hidden: false,
    toggled: false,
    iconName: 'icon-chevron-left',
    title: 'BUTTONS.hideSidebarHint',
    description: 'BUTTONS.hideSidebarDescription',
  },
  'hideTop': {
    hidden: false,
    toggled: false,
    iconName: 'icon-chevron-up',
    title: 'BUTTONS.hideTopHint',
    description: 'BUTTONS.hideTopDescription',
    settingsHeading: 'SETTINGS.hideTopBar'
  },
  'flatIcons': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.flatIconsHint',
    description: 'BUTTONS.flatIconsDescription',
    settingsHeading: 'SETTINGS.buttonStyle'
  },
  'startWizard': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.startWizardHint',
    description: 'BUTTONS.startWizardDescription'
  },
  'clearHistory': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.clearHistoryHint',
    description: 'BUTTONS.clearHistoryDescription',
  },
  'resetSettings': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.resetSettingsHint',
    description: 'BUTTONS.resetSettingsDescription',
    settingsHeading: 'SETTINGS.variousSettings'
  },
  // TODO: Make these able to add to the button bar!
  'importNewFiles': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.importNewFilesHint',
    description: 'BUTTONS.importNewFilesDescription',
  },
  'verifyThumbnails': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.verifyThumbnailsHint',
    description: 'BUTTONS.verifyThumbnailsDescription',
  },
  'rescanDirectory': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.rescanDirectoryHint',
    description: 'BUTTONS.rescanDirectoryDescription',
    settingsHeading: 'SETTINGS.currentHub'
  },
  'regenerateLibrary': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.regenerateLibraryHint',
    description: 'BUTTONS.regenerateLibraryDescription',
  }
};
