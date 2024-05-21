function showDetail(hamburgerName)
{
  let hamburgerDetail = document.getElementById("hamburgerDetail");

  let detailName = document.getElementById('detailName');
  let detailImage = document.getElementById('hamburgerDetailImage');
  let detailTextEng = document.getElementById('detailTextEng');
  let detailTextJap = document.getElementById('detailTextJap');
  let detailPrice = document.getElementById('detailPrice');

  detailName.innerHTML = hamburgerName;

  if (hamburgerName == 'Hamburger' || hamburgerName == 'ハンバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Cheeseburger' || hamburgerName == 'チーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Bacon Cheeseburger' || hamburgerName == 'ベーコンチーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Avocado Cheeseburer' || hamburgerName == 'アボカドチーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Avocacdo Bacon Cheeseburger' || hamburgerName == 'アボカドベーコンチーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Avocado Friedeggburger' || hamburgerName == 'アボカドフライドエッグバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Cheese Fridedeggburger' || hamburgerName == 'チーズフライドエッグバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Double Patties Cheeseburger' || hamburgerName == 'ダブルパティチーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'B.B.Q.burger' || hamburgerName == 'B.B.Q.バーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'B.B.Q.Avocadoburger' || hamburgerName == 'B.B.Q.アボカドバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'B.B.Q.Avocado Friedeggburger' || hamburgerName == 'B.B.Q.アボカドエッグバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Mexicanburger' || hamburgerName == 'メキシカンバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Chili Beans Cheeseburger' || hamburgerName == 'チリビーンズチーズバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'S.Mushburger' || hamburgerName == 'スマッシュバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Gorgonzolaburger' || hamburgerName == 'ゴルゴンゾーラバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  } else if (hamburgerName == 'Vegetable Burger' || hamburgerName == 'ベジタブルバーガー') {
    detailImage.innerHTML = '<img class="image" id="detailImage" src="./../static/images/H1.jpg">'
  }

  if (hamburgerName == 'Mexicanburger') {
    detailText.innerHTML = 'Avocado+Salsa Souce';
  } else if (hamburgerName == 'メキシカンバーガー') {
    detailText.innerHTML = 'アボカド + サルサソース';
  } else if (hamburgerName == 'S.Mushburger') {
    detailText.innerHTML = '3Mushrooms + Cheese + Sour Cream';
  } else if (hamburgerName == 'スマッシュバーガー') {
    detailText.innerHTML = 'マッシュルーム + チーズ + サワークリーム';
  } else if (hamburgerName == 'Vegetable Burger') {
    detailText.innerHTML = 'Vegetable Only';
  } else if (hamburgerName == 'ベジタブルバーガー') {
    detailText.innerHTML = '野菜のみ';
  } else {
    detailText.innerHTML = '';
  }

  hamburgerDetail.style.display = 'block';
}

function hideDetail()
{
  let hamburgerDetail = document.getElementById("hamburgerDetail");
  hamburgerDetail.style.display = 'none';
}

function moveToOtherPage(fileName) {
  let html = '.html';
  let url = fileName + html;
  location.href = url;
}