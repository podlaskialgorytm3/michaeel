let headerTop = $('header').offset().top
let firstSectionTop = $('#firstSection').offset().top
let secondSectionTop = $('#secondSection').offset().top
let thirdSectionTop = $('#thirdSection').offset().top
let forthSectionTop = $('#forthSection').offset().top
$("a:nth-of-type(1)").on("click" , function ()
{
    $("body, html").animate({
    scrollTop: headerTop},1000)
}) 
$("a:nth-of-type(2)").on("click" , function ()
{
    $("body, html").animate({
    scrollTop: firstSectionTop},1000)
}) 
$("a:nth-of-type(3)").on("click" , function ()
{
    $("body, html").animate({
    scrollTop: secondSectionTop},1000)
})
$("a:nth-of-type(4)").on("click" , function ()
{
    $("body, html").animate({
    scrollTop: thirdSectionTop},1000)
})
$("a:nth-of-type(5)").on("click" , function ()
{
    $("body, html").animate({
    scrollTop: forthSectionTop},1000)
}) 