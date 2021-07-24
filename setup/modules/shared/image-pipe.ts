export const IMAGE_PIPE = `(value, row) => '<img alt="' + (row.imageAlt || '') + '" class="table-image" src="' + (value || '/assets/images/placeholders/placeholder.png') + '" />'`;
