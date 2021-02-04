// get one element by CSS selector
function _( selector )
{
	return document.querySelector( selector );

}

export function scrollToElement(element)
{
    _(element).scrollIntoView();
}