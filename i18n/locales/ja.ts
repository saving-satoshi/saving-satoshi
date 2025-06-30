const translations = {
  shared: {
    next: `続ける`,
    start: `開始`,
    copy: `コピー`,
    info: `情報`,
    copy_acknowledged: `コピーしました！`,
    about: `このプロジェクトについて`,
    chapter: `章`,
    chapters: `章一覧`,
    challenge: `チャレンジ`,
    challenges: `チャレンジ一覧`,
    coming_soon: `近日公開`,
    start_chapter: `章を始める`,
    back: `戻る`,
    end: `終了`,
    close: `閉じる`,
    poweroff: `章の選択へ戻る`,
    loading: `読み込み中`,
    bitcoin_dev_project: `Bitcoin開発プロジェクト`,
  },
  ///ABOUT PAGE
about: {
  title: `このプロジェクトについて`,
  mobile_title: `Saving Satoshi（サトシを救え）とは`,
  subtitle: `2139年。最後のビットコイン採掘まであと2週間。数か月にわたり、サトシ・スクエアではカウントダウンの時計が時を刻んでいる。`,
  intro: `世界がこの歴史的な瞬間を待ちわびる中、ネットワークが突然停止する。<br><br>あなたの時計「Everything Watch」には、「サトシ・ナカモト」と名乗る誰かから、WhiskerWareブランドのホロキャットが届く。（他のeホログラムと似ているが、これは猫の形をしている。）<br>あなたが鼻をちょんと押すと、ホロキャットが現れる。`,
}

project: {
  title: `ビットコインは奥深いもの。でも、学び方は堅苦しくなくてもいい。`,

  paragraph_one: `Saving Satoshi は、ビットコイン技術をテーマにした、気軽に楽しめるインタラクティブ（双方向的）なロールプレイングゲーム（RPG）です。物語仕立てのストーリーとゲーム要素、そしてちょっとユニークな課題を組み合わせて、ビットコイン開発の学びを楽しく始められるようにしています。`,

  paragraph_two: `このゲームは、ビットコインが<span className="italic">本当に</span>どう動いているのかを知りたい人や、好奇心旺盛なプログラマーのために、楽しみながら学べるよう設計されています。ビットコインのオープンソースソフトウェア（₿OSS）に魅了され、貢献したいと考えている人にぴったりです。`,

  paragraph_three: `各章には、コードを使ったレッスンコンテンツ、シミュレーション、プログラミング演習が含まれており、ビットコイン技術の奥深い仕組みを楽しく学べるよう工夫されています。`,

  paragraph_four: `シンプルでわかりやすい例から始まり、段階的に複雑さを積み重ねていきます。臨場感のあるユーザー体験、豊かなビジュアル、そしてシームレスな操作を通じて、プレイヤーは次のようなさまざまなトピックを旅していきます：`,

  chapter_topics: {
    list_one: `ジェネシスブロックに隠された秘密のメッセージを探し、解読する`,
    list_two: `ハッシュ関数とプルーフ・オブ・ワーク`,
    list_three: `プールマイニングの仕組み`,
    list_four: `楕円曲線暗号の基礎と、公開鍵・秘密鍵のペアからアドレスを導出する方法`,
    list_five: `ECDSAでの署名と検証`,
    list_six: `トランザクションを一から構築する`,
    list_seven: `複数のトランザクションを集めてブロックテンプレートを作る`,
    list_eight: `Bitcoin Core の RPC API を使ってブロック報酬を計算する`,
    list_nine: `ビットコインスクリプト`,
    list_ten: `Lightning Networkの仕組み`,
  },

  paragraph_five: `でも、このゲームは単なるカリキュラムではありません。ビットコインの教育も、その技術と同じくらい創造的でユニークであるべきだと、私たちは考えています。だからこそ、このゲームでは、文化・歴史・デザインといったビットコインの魅力的な側面にも触れています。`,

  paragraph_six: `私たちは、ビットコインは世界にとってポジティブな力だと信じています。このプロジェクトは、情熱的な貢献者たちによって最高の基準で作られており、100％無料・オープンソース（FOSS）です。Saving Satoshi の制作背景についてもっと知りたい方は、<Link href="https://bitcoin.design/guide/case-studies/saving-satoshi" className="underline" target="_blank">Bitcoin Design Guide のケーススタディ</Link>をご覧ください。`,

  paragraph_seven: `ゲームをプレイすることから、ワークショップの開催、コードの貢献まで、Saving Satoshi コミュニティに参加する方法はさまざまです。あなたの参加を心から歓迎します。<Link href="https://github.com/saving-satoshi/saving-satoshi" className="underline" target="_blank">GitHub の Saving Satoshi</Link>をフォローしたり、<Link href="https://discord.gg/eBGRaCSjg5" className="underline" target="_blank">Bitcoin Design コミュニティの Discord</Link>内 #saving-satoshi チャンネルに参加して、ぜひご連絡ください。`,

  paragraph_eight: `また、<Link href="https://x.com/savingsatoshi" className="underline" target="_blank">X</Link>、<Link href="https://njump.me/npub1vy6wcgw6jhhtcmpawvlnsfx7g8qt8r40z7qlks9zwa4ed57vm5eqx527hr" className="underline" target="_blank">nostr</Link>、<Link href="https://bsky.app/profile/bitcoindevs.bsky.social" className="underline" target="_blank">Bluesky</Link>でもつながることができます。メンションや感想をいただけるととてもうれしいです！`,
},

contributing: {
  title: `貢献するには`,

  paragraph_one: `Saving Satoshi はオープンソースプロジェクトです。誰でも自由に参加し、一緒に作り上げることができます。`,

  feedback: {
    title: `フィードバック`,
    paragraph_one: `あなたの声を聞かせてください！良かった点、気になった点、改善できそうな点など、どんなことでも歓迎です。<a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">こちらのフォーム</a>から送信できます。`,
  },

  contribute: {
    title: `貢献する`,
    paragraph_one: `どんな提案も大歓迎です。コードのレビューや品質チェック（QA）を手伝ってくれる方も常に募集中です。コードの改善提案があれば、<a href="https://github.com/saving-satoshi/saving-satoshi" target="_blank" rel="noreferrer">GitHub</a>で issue を立てたり、Pull Request を送ったりしてください。`,

    paragraph_two: `デザインやストーリー、その他何らかの形で関わりたい方は、<a href="https://discord.gg/B9WURkwF" target="_blank" rel="noreferrer">Bitcoin Design Discord</a>内の #saving-satoshi チャンネルにご参加ください。やりたいことを伝えていただければ、サポートします。`,
  },
},

privacy: {
  title: `プライバシーへの取り組み`,
  paragraph_one: `Saving Satoshi では、ユーザーのプライバシーとセキュリティの確保に全力で取り組んでいます。私たちは透明性を信条としており、アプリの利用状況をどのように、なぜ計測しているのかを知っていただきたいと考えています。そのために、<Link href="https://umami.is/" className="underline" target="_blank">Umami</Link> という強力なツールを使用しています。`,

  sub_heading_one: `Umami とは？`,
  paragraph_two: `Umami はオープンソースの解析プラットフォームで、アプリの利用状況を把握するための重要なインサイトを提供してくれます。これにより、データに基づいた判断を行い、アプリをより使いやすく、ユーザーフレンドリーで安全なものへと改善し続けることができます。Umami のダッシュボードは<Link className="underline" href="https://visits.bitcoindevs.xyz/share/zFmD5WIus09mDxEf/Saving%20Satoshi" target="_blank">こちら</Link>で公開しています。`,

  sub_heading_two: `収集するデータは？`,
  paragraph_three: `ご安心ください。私たちが収集するのは、個人を特定しない匿名化されたデータのみです。具体的には次のような目的で活用しています：`,

  list_item_one_title: `プロダクト改善：`,
  list_item_one_text: `アプリのどこを改良すればよいかを把握し、より効率的で使いやすく、安全なものにするためにデータを利用します。`,

  list_item_two_title: `互換性向上：`,
  list_item_two_text: `ユーザーがどのデバイスやプラットフォームを使っているかを理解し、さまざまな環境でアプリがスムーズに動作するように最適化します。`,

  sub_heading_three: `あなたのプライバシーが最優先`,
  paragraph_four: `個人を特定できる情報は一切収集せず、データはアプリ改善の目的のみに使用されます。第三者に共有・販売することは決してありません。`,

  paragraph_five: `データ収集やプライバシーポリシーについてご不安やご質問がある場合は、いつでもお気軽にご連絡ください。私たちは透明性と安全性をもって、安心してご利用いただける体験を提供します。`,
},

contributors: {
  title: `ぜひお楽しみください！`,
  paragraph_one: `Saving Satoshi は、過去数年間にわたる、多くの人々の協力なしには実現できませんでした。まさに「村全体」で取り組んできた成果と言えます！`,

  paragraph_two: `コアチームは、<Link href="https://adamjonas.com/" className="underline" target="_blank">Adam Jonas</Link>、<Link href="https://www.germanysbestkeptsecret.com/" className="underline" target="_blank">Christoph Ono</Link>（デザインリード）、<Link href="https://satsie.dev/" className="underline" target="_blank">Satsie</Link>、<Link href="https://github.com/benalleng" className="underline" target="_blank">BenAllenG</Link>（エンジニアリングリード）、<Link href="https://github.com/pinheadmz" className="underline" target="_blank">Matthew Zipkin</Link>（レッスンコンテンツリード）、<Link href="https://x.com/TuedonTuoyo" className="underline" target="_blank">Tuedon Tuoyo</Link>、<Link href="https://www.artassoiants.com/" className="underline" target="_blank">Art Assoiants</Link>（プロダクトマネージャー）、そして物語執筆のために <Link href="https://spiral.xyz/" className="underline" target="_blank">Spiral</Link> からお借りした 4 匹の謎めいた猫たちで構成されています。`,

  paragraph_three: `そのほかにも、多くの貢献者がさまざまな場面で重要な役割を果たしてくれました。ここでご紹介するのはその一部ですが、 <Link href="https://x.com/ecurrencyhodler" className="underline" target="_blank">ecurrencyhodler</Link>、<Link href="https://www.jtwoodhouse.com/" className="underline" target="_blank">JT Woodhouse</Link>、<Link href="https://x.com/_Jsms_" className="underline" target="_blank">JSMS</Link>、<Link href="https://github.com/afterburn" className="underline" target="_blank">Kevin Karsopawiro</Link>、<Link href="https://github.com/daviroo" className="underline" target="_blank">daviroo</Link>、<Link href="https://github.com/nully0x" className="underline" target="_blank">nully0x</Link>、<Link href="https://github.com/vinayaksh42" className="underline" target="_blank">Vinayak Sharma</Link>、<Link href="https://github.com/shaavan" className="underline" target="_blank">Shashwat Vangani</Link>、<Link href="https://github.com/aureleoules" className="underline" target="_blank">Aurèle Oulès</Link>、<Link href="https://github.com/sabakhilji" className="underline" target="_blank">sabakhilji</Link> などが挙げられます（順不同）。`,

  paragraph_four: `コード貢献者の全リストは、<Link href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" className="underline" target="_blank">GitHub</Link> でご覧いただけます。`,
},

satoshi_needs_you: `さあ、急いで！ サトシがあなたを必要としています。`,
},

///CHAPTERS TITLE PAGE
chapter_one: {
  title: `隠された秘密は目の前に`,
  paragraph_one: `時は2139年。最後のビットコインが採掘されるまで、あと2週間。サトシ・スクエアでは、何か月ものあいだカウントダウンの時計が時を刻んでいた。これまで、すべてのブロックにはビットコインの報酬、つまり新規発行報酬が存在していた。これは新しいビットコインが生成される唯一の方法だったが、それもまもなく終わる。100年以上にわたり続いてきたビットコインの発行スケジュールが、いよいよ終わりを迎える。世界は、最後の発行報酬付きブロックが採掘されるその瞬間を待ちわびている。時代の終わりを告げる歴史的イベントだ。`,
  paragraph_two: `突如として、ネットワークが停止する。`,

  ///CHAPTER 1
  intro_one: {
    title: `イントロ`,
    nav_title: `マイナーたちの抗議`,
    paragraph_one: `数秒後、あなたのホログラム画面が起動する。`,
    paragraph_two: `―― デボラ・チャンク：「トーマス・ヴァンダープールさん。あなたは、ビットレイ社のCEOであり、世界最大のビットコインマイニングプールを運営しています。さらに、マイニングマシンの製造も手がけています。今何が起きているのですか？ビットコインは死にかけているのですか？」`,
    paragraph_three: `―― ヴァンダープール：「まずは順を追って説明しましょう。ええ、デボラ、その通りです。我がヴァンダープール家――身なりの整った私の父、そしてそのまた父――は、ブロック21,000からずっとマイニングを続けてきました。だからこそ、自信を持って言えるのです。世界中のマイナーたちがマシンの電源を切ることで、意図的に遅延を引き起こしています。これは抗議です。誰も、ビットコインの発行が2,100万枚で終わることを望んでいません。マイナーは手数料報酬だけでは生き残れませんから。」`,
    start: `続ける`,
  },

  intro_two: {
    title: `Genesis（はじまり）`,
    nav_title: `サトシのホロキャット`,
    paragraph_one: `あなたの「Everything Watch」に、「サトシ・ナカモト」と名乗る人物から WhiskerWare ブランドのホロキャットが届く。（他のeホログラムと似ているが、これは猫の形をしている。）あなたはその鼻をちょんと押して、ホロキャットを起動する。`,
    paragraph_two: `――「ビットコインは死んではいない。でも、君の助けが必要だ。猫のことを忘れないで。」 ―― サトシ・ナカモト`,
    paragraph_three: `―― サトシ？あのサトシ？あのホワイトペーパーの？いや、まさか。あの人はもう100年以上も前に死んだとされていたはず……`,
    paragraph_four: `……だったよね？`,
    paragraph_five: `ホロキャット：「さあ、今すぐ行動開始ニャ。手伝ってあげるけど、今すぐ始めないとダメにゃん。」`,
  },

  
      
export default translations
