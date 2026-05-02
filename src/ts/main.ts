
const actions: string[] = ["神父さんが","ビーガンの彼氏が","竹取の翁が","彼女のお父さんが", "友達と", "彼氏と", "後ろからずっとついてくる人と", "母と", "好きな人が", "先生と", "苦手な先輩が", "転校生と", "アイドルと", "カフェの店員と", "殺人犯と", "別れようとしている彼女が", "サンタクロースと", "通りすがりの美女と", "白雪姫と", "イケメンが", "近所のおじさんと", "バイト先の店長と", "友達のお母さんと", "貴族たちと","桃太郎と","口裂け女が","不倫相手と","看護師さんと","魔法使いと","猛獣使いが"];
const places: string[]= ["深い湖で", "ウユニ塩湖で", "夕日が綺麗な海辺で", "誰もいない教室で", "真夜中の廃病院で", "元カノの家で", "素敵なカフェで", "夜景を見ながら", "江戸時代に", "３０年前の過去に", "心霊スポットで", "市役所で", "押入れの中で", "SNS上で", "樹海で", "遠い未来に", "夢の中で", "思い出のあの場所で", "藁人形と", "観覧車に乗り", "あの世で", "ジムで", "宝くじが当たったので", "結婚式を挙げて","有名なあの村で","素敵な星空の下で","タイタニック号で"];
const actions2 :string[]= ["本を読んで", "肉を食べて", "バイクを盗んで", "俳句を読み", "犬の散歩をして", "フィギュアスケートをして", "スイカ割りをして", "手足を縛って", "ピアノを弾いて", "化粧をして", "シャトルランをして", "ギターを弾いて", "ケーキを顔に投げつけて", "約束をして", "タイムリープして", "置き手紙を書いて", "別れたことを後悔して", "訴訟を起こし", "引っ越しをして", "説教をして", "三角関係になって","血祭りになり","婚約を交わし"];
const actions3 :string[]= ["涙を流した", "この時間が永遠に続くように願った", "無表情で立ち尽くしていた", "キスをした", "殴り合った", "語り合った", "その後は覚えていない", "ごみのように捨てた", "物思いに耽った", "ずっと笑顔だった", "監禁した", "炎上した", "放置した", "顔に落書きをした", "秘密を暴露した", "絶対に許さない", "この日を忘れないだろう", "出家した", "目が覚めた", "思い出に蓋をした", "100年の眠りについた","決闘をした","幸せに暮らした","塩酸をかけられた"];
const loveActions2 :string[]= ["手をつないで","見つめ合って","一緒に笑って","プレゼントを渡して","肩を寄せ合って","名前を呼び合って","未来の話をして","同じ夢を語って","ドキドキしながら","優しく抱きしめて","照れながら話して","ぎこちなく笑って","初デートをして","思い出を作って","告白をして"];
const loveActions3 :string[]= ["恋が始まった","幸せな時間を過ごした","心が温かくなった","ずっと一緒にいたいと思った","お互いを大切にしようと誓った","忘れられない思い出になった","優しい気持ちになった","少しだけ距離が縮まった","胸が高鳴った","未来が楽しみになった","自然と笑顔になった","大切な存在になった","世界が輝いて見えた"];
const psychoActions2 :string[]= ["ずっと後ろから見つめていて","名前を何度も呼び続けて","気づかないうちに家に入り込んで","スマホの中を全部覗いて","寝ている間に近づいて","逃げられないようにして","「大丈夫だよ」と囁きながら","笑いながら近づいて","気づいたら隣にいて","どこまでも追いかけてきて","毎日同じ時間に現れて","誰にも見えないのに話しかけてきて","記憶を少しずつ奪っていって","気づくとすぐ後ろに立っていて"];
const psychoActions3 :string[]= ["もう戻れなくなった","すべてが手遅れだった","逃げ場はどこにもなかった","気づいたときには遅かった","もう二度と会えなくなった","それが最後の記憶だった","誰もその後を知らない","ずっと終わらなかった","なぜか笑いが止まらなかった","すべて壊れてしまった","その日から様子がおかしくなった","誰も信じてくれなかった","もう自分が誰かわからない","同じ日を繰り返している"];
const button = document.getElementById("button") as HTMLButtonElement;
const wwwBtn = document.getElementById("www_button") as HTMLButtonElement;
const loveBtn = document.querySelector("#loveBtn") as HTMLButtonElement;
const phycho = document.querySelector("#psychoBtn") as HTMLButtonElement;
const back = document.querySelector(".back") as HTMLButtonElement;
const kisekaeBtn = document.createElement("button") as HTMLButtonElement;
if(back)
back.appendChild(kisekaeBtn);
kisekaeBtn.textContent="背景を変える";

const routine =(actionArray: string[],placeArray: string[],nanodaAction3: string[])=>{
        const index1 = Math.floor(Math.random() * actionArray.length);
        const index2 = Math.floor(Math.random() * placeArray.length);
        const index3 = Math.floor(Math.random() * actions2.length);
        const index4 = Math.floor(Math.random() * nanodaAction3.length);
        const action = actionArray[index1];
        const place = placeArray[index2];
        const action2 = actions2[index3];
        const action3 = nanodaAction3[index4];
        const message = `${action}、${place}${action2}、${action3}。`;
        const output = document.getElementById("output");
        if(output)
        output.textContent = message;
        

};
    if(button)
    button.addEventListener("click", () => {
        routine(actions,places,actions3);
    });

    if(wwwBtn)
    wwwBtn.addEventListener("click",()=>{
    const wwwActions = actions.map((item)=>item+`www`);
    const exPlaces = places.map((item)=>item+`!!!`);
    const nanodaAction3 = actions3.map((item)=>item+"のであった!!");
    routine(wwwActions,exPlaces,nanodaAction3);
});

    if(loveBtn)
    loveBtn.addEventListener("click",()=>{
    const lovePerson: string[] = ["不良から助けてくれた人が","私のことを柱の影からいつも見守っている人が","ウェディングドレスを着た人が","初恋の人が","恋のライバルが","婚約者が","騎士が","王子様が","運命の人が","彼女の憧れの人が","優しく見守る幼馴染が"];
    const love = 
    [...actions.filter((item)=>item.includes("彼氏")||item.includes("好きな人")||item.includes("彼女")||item.includes("美女")||item.includes("イケメン"))
    .map((item)=>item+"❤️❤️❤️"),...lovePerson.map((item)=>item+"❤️❤️❤️")];
    const lovePlace =
    places.filter((item)=>item.includes("深い湖で")||item.includes("夕日が綺麗な海辺で")||item.includes("元カノの家で")||item.includes("素敵なカフェで")||item.includes("夜景を見ながら")||item.includes("素敵な星空の下で")||item.includes("タイタニック号で")||item.includes("結婚"));
    
    const action = love[Math.floor(Math.random() * love.length)];//配列の中でランダムに選んだ１こ
    const place = lovePlace[Math.floor(Math.random() * lovePlace.length)];
    const action2 = loveActions2[Math.floor(Math.random() * loveActions2.length)];
    const action3 = loveActions3[Math.floor(Math.random() * loveActions3.length)];

    const message = `${action}、${place}${action2}、${action3}。`;
    
    const output = document.getElementById("output");
        if(output)
        output.textContent = message;
        
    
});
    if(phycho)
    phycho.addEventListener("click",()=>{
    const horrorChara: string[] = ["護身用だと言って毎日ナイフを持ち歩く人が","八尺様が","貞子が","どこにいても偶然会う人が","関係を切ろうとすると異常に執着する人が","人の不幸を見てちょっと楽しそうな人が","絶対に怒らないけど限界で一気に壊れる人が","「君のためだよ」と言いながら支配してくる彼氏が","自殺スポット巡りが趣味なおばあちゃんが","友人のふりをした嫉妬の鬼が","生き霊を飛ばすのが得意なあのお断りした人が","いつもシャーペンで目を突き刺そうとしてくる彼氏が","蟻をチョークで白く塗りつぶすのが趣味なおじいさんが","笑顔なのに目は笑っていないあの子が","ナメクジに塩をかけて、もがき苦しんでいるところを見て微笑んでいる美女が"];
    const horror =
    [...actions.filter((item)=>item.includes("後ろからずっとついてくる人と")||item.includes("別れようとしている彼女")),...horrorChara];
    const action = horror[Math.floor(Math.random()* horror.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    const action2 = psychoActions2[Math.floor(Math.random() * psychoActions2.length)];
    const action3 = psychoActions3[Math.floor(Math.random() * psychoActions3.length)];

    const message = `${action}、${place}${action2}、${action3}…`;
    const output = document.getElementById("output");
    if(output)
    output.textContent = message;
});

document.body.classList.add("kisekaeImage1");


const classes: (string|null)[] = [
    "kisekaeImage1",
    "kisekaeImage2",
    "kisekaeImage3",
    "kisekaeImage4",
    "kisekaeImage5",
    "kisekaeImage6",
    "kisekaeImage7",
    "kisekaeImage8",
    null 
];

let currentIndex = 0;

const cls = classes[currentIndex];

if(cls){
    document.body.classList.add(cls);
}

kisekaeBtn.addEventListener("click",()=>{
    const currentClass = classes[currentIndex];

    if(currentClass){//null(背景画像なし)じゃないときは今のクラス削除する
        document.body.classList.remove(currentClass);
}
        currentIndex = (currentIndex + 1)% classes.length//次に進む(currentIndex+1)。最後なら最初に戻る。

        if(currentClass){
            document.body.classList.add(currentClass);
        };
});
        

