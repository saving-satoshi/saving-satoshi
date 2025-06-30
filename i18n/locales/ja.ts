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

export default translations
