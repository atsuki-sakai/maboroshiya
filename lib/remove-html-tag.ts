

function removeHtmlTag(htmlString: string): string {
    return htmlString.replace(/(<([^>]+)>)/gi, '')
}

export default removeHtmlTag