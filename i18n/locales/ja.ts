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
    paragraph_two: `―― デボラ・チャンク：「トーマス・ヴァンダープールさん。あなたは、BitRey社のCEOであり、世界最大のビットコインマイニングプールを運営しています。さらに、マイニングマシンの製造も手がけています。今何が起きているのですか？ビットコインは死にかけているのですか？」`,
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

  genesis_one: {
  title: `Genesis`,
  nav_title: `ジェネシスの秘密`,
  heading: `最初のチャレンジ`,
  paragraph_one: `ビットコインは検閲耐性のあるお金です。ネットワークにトランザクションをブロードキャスト（送信）することで、誰でも送金ができます。ブロードキャスト後、トランザクションはマイナーによってブロックにまとめられます。マイナーたちは、チェーン上にブロックを追加する権利を得るために互いに競い合います。この仕組みによって、ビットコインは非中央集権的に保たれているのです。`,
  paragraph_two: `ビットコインの匿名の発明者、サトシ・ナカモトは、最初のビットコインブロック（ジェネシスブロック）を採掘しました。そしてその最初のトランザクションの中に、世界への秘密のメッセージを残しました。あなたの最初のチャレンジは、それを見つけて解読することです。`,
},

genesis_two: {
  title: `Genesis`,
  nav_title: `メッセージを探せ`,
  heading: `隠されたメッセージを見つけよう`,
  paragraph_one: `ビットコインブロックチェーンの最初のブロックを探しましょう。下のボタンをクリックすると、ブロック番号0、いわゆるジェネシスブロックを<Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">ブロックエクスプローラー</Tooltip>で開けます。`,
  paragraph_two: `下へスクロールし、このブロックに含まれている1つのトランザクションの詳細を展開します。“Coinbase” という入力を探してください。次に “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)” というラベルを見つけましょう。その横に表示されている値が、暗号化されたメッセージです。`,
  paragraph_three: `その値をコピーして、コードブロックに貼り付けてください。`,
  tooltip_block_explorer: `<a  href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">ブロックエクスプローラー</a>は、ビットコインのトランザクション情報をすばやく確認できる便利なツールです。`,
  tooltip_hex: `16を基数とする数値システムである「hexadecimal」（16進数）の略。`,
  view_block_0: `ブロック0を表示`,
  placeholder: `見つけた値をここに貼り付けてください`,
},

genesis_three: {
  title: `Genesis`,
  nav_title: `メッセージを解読せよ`,
  heading: `メッセージを解読しよう`,
  paragraph_one: `見つけたメッセージは「HEX」という形式でエンコードされています。これを私たちが読み取れる文字列（ASCII）に変換するコマンドを実行します。`,
  paragraph_two: `以下のコマンドをコードブロックのターミナルにコピー＆ペーストして、「Enter」キーを押してください。`,
  terminal_challenge_lines: `ここにコマンドを入力してEnterを押してください...\n 変数 $scriptSigHex はすでに定義されています。\n\n var $scriptSigHex = '04fff...e6b73'`,
  waiting_for_input: `あなたがスクリプトを書いて実行するのを待っています…`,
  success: `すばらしい！解読されたメッセージは、<Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link>紙の2009年1月3日付の一面を引用していました。この日は、サトシがジェネシスブロックを採掘した日でもあります。なんてクールなのでしょう！<br><br>このメッセージから、サトシがビットコインを作ろうとした動機の一端がうかがえます。\n\nさあ、次に進みましょう。`,
},

genesis_four: {
  title: `Genesis`,
  nav_title: `初めての成功`,
  subtitle: `おめでとう！最初のチャレンジをクリアしました！`,
  paragraph_one: `あなたは、サトシ・ナカモトがジェネシスブロックに仕込んだ秘密のメッセージを発見しました。次のチャレンジでは、今回学んだことを踏まえ、物語にとって重要な手がかりを解き明かしましょう。`,
},

transacting_one: {
  title: `トランザクション`,
  nav_title: `トランザクションの中身とは？`,
  heading: `トランザクションの中身とは？`,
  paragraph_one: `トランザクションの主な構成要素は「インプット（入力）」と「アウトプット（出力）」の2つです。前のチャレンジでは、トランザクションのインプットに含まれていた秘密のメッセージを解読しました。今回は、アウトプット側に含まれているメッセージを解読していきます。`,
  paragraph_two: `次のトランザクションでは、「OP_RETURN」というタイプのアウトプットを特定してみましょう。`,
},

transacting_two: {
  title: `トランザクション`,
  nav_title: `OP_RETURNを探せ`,
  heading: `OP_RETURN`,
  paragraph_one: `トランザクションに秘密のメッセージを隠す方法は他にもあります。ビットコインには「OP_RETURN」と呼ばれる特殊なコードがあり、これを使ってトランザクションのアウトプットにメッセージを添付することができます。実際に探してみましょう。`,
  paragraph_two: `1. 特定のトランザクションを確認するには<Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">こちら</Link>をクリックしてください。`,
  paragraph_three: `2. 詳細を開いて、「OP_RETURN」タイプの部分を探します。`,
  paragraph_four: `3. 次に「SCRIPTPUBKEY（ASM）」フィールドを見つけてください。「OP_RETURN OP_PUSHBYTES_33」という記述があるはずです。これらは「オペコード」と呼ばれますが、今回はその後に続くデータに注目します。`,
  paragraph_five: `4. 「OP_RETURN OP_PUSHBYTES_33」の後にある長い数字の文字列をコピーして、コードブロックに貼り付けてください。`,
  input_challenge_label: `OP_RETURNの値を入力`,
},

transacting_three: {
  title: `トランザクション`,
  nav_title: `OP_RETURNを解読`,
  heading: `もうひとつの秘密のメッセージ`,
  paragraph_one: `トランザクションのアウトプットの中にあるメッセージ部分を特定しました。`,
  paragraph_two: `あとは前のチャレンジと同じように、これを解読するだけです。もう一度このトランザクションを確認したい場合は<Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">こちら</Link>からどうぞ。`,
  terminal_challenge_success: `正解です！よくできました。\n\n ご覧のとおり、手がかりは「アドレス」でした。そのアドレスを見に行ってみましょう。\n\n 次のチャレンジがあなたを待っています。`,
  terminal_challenge_lines: `ここにコマンドを入力してEnterを押してください...\n\n コマンド：\n echo $scriptPubKeyBytes | xxd -r -p \n\n ※今回、$scriptPubKeyBytes は定義されていません。前のページでコピーした値を、そのままコマンドに使ってください。`,
  terminal_challenge_error: `惜しい！今回は $scriptPubKeyBytes という変数はあらかじめ定義されていませんよ。`,
},

outro_one: {
  title: `アウトロ（締めくくり）`,
  nav_title: `冒険のはじまり`,
  paragraph_one: `あなたはガレージに駆け下り、父の古いバジェットコプターに乗り込み、座標を入力して21地区へ向かう。`,
  paragraph_two: `ホログラムにも反応するほどの激しい猫アレルギーにもかかわらず、ホロキャットは同行してくる。あなたは抗議したが、猫はそういう生き物だ。`,
  button_text: `第1章を完了`,
},

outro_two: {
  title: `ミッション成功！`,
  nav_title: `チャプター完了`,
  description: `すばらしい！第1章をクリアし、ハッシュやトランザクションについて多くを学びました。楽しめましたか？`,
},

end: {
  save: `進行状況を保存する`,
  next: `保存せずに進む`,
  feedback: `フィードバックを送る`,
},

resources: {
  genesis_two: {
    scriptsig_heading: `ScriptSig`,
    scriptsig_paragraph: `'scriptSig' は新しいトランザクションの入力として提供されるスクリプトです。これはアンロックスクリプトとも呼ばれ、参照されたUTXO（未使用トランザクション出力）を使用する権限があることを証明します。'scriptSig' は入力フィールド内のデータです。`,
    block_explorer_heading: `ブロックエクスプローラー`,
    block_explorer_paragraph: `ブロックエクスプローラーは、ブロックチェーンネットワークを探索し理解するための重要なツールです。使いやすいインターフェースを通じて、ブロックチェーン上のデータを調査・分析できます。トランザクション履歴の確認、残高の閲覧、個々のブロックやトランザクションの進捗を追跡することが可能です。`,
    tip: `ブロック内のトランザクションを展開し、Coinbase入力の中にある「scriptSig(Hex)」カテゴリを探してください。`,
  },

  genesis_three: {
    bash_heading: `Bashコマンド`,
    bash_paragraph: `ジェネシスブロックにサトシが埋め込んだテキストの圧縮を元に戻すため、いくつかの基本的なBashコマンドとオプションを使用します。`,
    tip: `'xxd' コマンドの主な機能は、バイナリファイルを16進数に変換することです。'-r' オプションを付けると、逆の変換を行い、16進ダンプをバイナリに変換します。ASCII文字列の場合、このバイナリ形式は人間が読める形になります。'-p' オプションを使うと、プレーンなスタイルで出力が表示され、結果を読みやすくなります。`,
  },

  transacting_two: {
    transactions_heading: `トランザクション`,
    transactions_paragraph: `暗号通貨におけるトランザクションとは、ひとまとまりで実行される（途中で分割できない）支払い処理、いわば「原子的な（不可分な）」送金に相当します。ビットコインのようなUTXOベースの通貨では、既存のUTXO（未使用のトランザクション出力）を消費し、新しいUTXOを生成することで処理が行われます。誰かが暗号通貨のトランザクションを開始するということは、特定の量のコインを、あるウォレットから別のウォレットに送るようブロックチェーンに指示することです。ビットコインのようなUTXOベースの通貨では、このとき送信者の既存UTXOが消費され、受信者のために新しいUTXOが生成されることで、所有権台帳が更新されます。`,
    bitcoin_script_heading: `ビットコインスクリプト`,
    bitcoin_script_paragraph: `ビットコインスクリプトとは、ビットコイントランザクションで「どのような条件でビットコインが使えるか」を定義するための、スタックベースのシンプルなプログラミング言語です。各種「オペコード」（operation codeの略）を用いて、スクリプト内のデータに対して実行すべき処理を指定します。`,
    asm_heading: `ASM（アセンブリ形式）`,
    asm_paragraph: `scriptSig や scriptPubKey の隣に「ASM」と表示されている場合、それはその値が「アセンブリ形式」、つまりスクリプト命令のより人間に読みやすい形式であることを意味します。`,
    tip: `Op_Code「OP_Pushbytes_33」がある場合、OP_RETURNの中に33バイト（合計66文字）の文字列があるはずです。`,
  },

  transacting_three: {
    secrets_heading: `ビットコインに秘められた秘密`,
    secrets_paragraph: `前のチャレンジで見たように、ビットコインスクリプトに秘密を埋め込む文化は、ジェネシスブロックの時代から存在していました。情報をブロックチェーン上に保存したり、ビットコインの外の価値に関連付けたり、他人にメッセージを伝えたりするために、人々は入出力以外のデータもブロックチェーンに保存してきたのです。`,
    tip: `'xxd' コマンドで文字列を解読する際、今回は変数を使わないので、文字列全体をそのまま入力してください。`,
      },
    },
  },

chapter_two: {
  title: `ハッシュ化された計画`,
  paragraph_one: `サトシが教えてくれた座標は、残念ながら期待を裏切りません。そこは倉庫で、しかも不気味で寂れた場所です。`,
  paragraph_two: `あなたはバジェットコプターで倉庫を3周以上旋回する。やれやれ、やっぱり中に入るしかなさそうだ。バジェット熱探知機は、暗闇しか検知しない。この場所の存在を知っている者がいたとしても、記憶の中以外ではもう長らく訪れていないのだろう。`,

  intro_one: {
    title: `イントロ`,
    nav_title: `倉庫`,
    paragraph_one: `―ホロキャット：「なんてひどい場所ニャ。せめて電子アンチョビくらい置いてあってほしいニャ。サイバーキャットフードでも我慢するニャ…」`,
    paragraph_two: `あなたは着陸し、体勢を整えて、侵入口を探す。あそこにある壊れた窓が使えそうだ。レンガで窓の残骸を壊し、中に飛び込む。建物の中には、埃をかぶってはいるが保存状態のよいビットコインマイナーが何千台も並んでいた。`,
    paragraph_three: {
      a: `―ホロキャット：「ここは倉庫じゃなくて、博物館だニャ。たぶんヴァンダープール家の古いマイニング機器だと思うニャン。ビットコインの初期には、一般的なコンピュータを使ってマイニングしていたニャ。でも数年後、マイナーたちは特別なチップを搭載したマシンを使えることに気づいたニャ。それが、Application-Specific Integrated Circuit、つまり`,
      b: `、略してASICだニャン。このチップはひとつの目的――ビットコインのマイニングだけに特化してるニャ。そのおかげで効率が高く、マイナーはマイニングに費やすエネルギーを減らせるから有利ニャン。かつてはノートパソコンでマイニングしてたなんて信じられるかニャ？」`
    },
    paragraph_four: `このヴァンダープール家のコレクションに、これだけの機器があった理由がわかった。`,
    tooltip_one: {
      question: `ASICマイナーとは？`,
      link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520an%2520ASIC%2520miner%253F`,
      highlighted: `ASIC`,
    },
  },

  intro_two: {
    title: `ハッシュ化された計画`,
    nav_title: `コンピュータの起動`,
    paragraph_one: `隅には、かろうじて点滅している古いモニター付きのコンピュータがある。そこには「電源を入れろ、間抜けめ」と書かれたメモが貼ってある。`,
    paragraph_two: `―ホロキャット：「なんて失礼ニャ～。あっ、メカニカルキーボードだニャ。聞いたことあるニャン、あまりにうるさくて、ユーザーの聴力を奪うって噂されて、禁止されたらしいニャ」`,
    paragraph_three: `ホロキャットはキーボードの上に飛び乗り、キーの上を歩いて、押すべきキーを教えてくれる。`,
  },

hashing_one: {
  title: `ゼロ`,
  nav_title: `コンピュータがうなりを上げて起動する`,
  paragraph_one: `偶然なのか、それともホロキャットが本当に分かってやっていたのか、彼女が踏んだランダムな文字や数字は……別のランダムな文字や数字に変わっただけ？`,
  list_one: `> QX23Y6VGECTUKSNIEUTUB[P[pihof`,
  list_two: `> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf`,
  paragraph_two: `モニターには「ハッシュが間違っています。やり直してください」と表示されている。`,
  paragraph_three: `当然ながら、ホロキャットが入力したでたらめは正解ではなかった。彼女は生意気なホログラム猫にすぎないのだから！`,
  paragraph_four: `では、何か別のものを入力するとどうなる？`,
},

hashing_two: {
  title: `ゼロ`,
  nav_title: `何かをハッシュしてみよう`,
  heading: `何でも入力してみよう`,
  return_hash: `下に、入力内容がハッシュに変換された結果が表示されます`,
  progress_message: `続けてみよう…`,
  success_message: `よし、うまく遊べたね。それじゃ次に進もう。`,
},

hashing_three: {
  title: `ゼロ`,
  nav_title: `SHA256の威力`,
  heading: `ハッシュについて、何か気づいたことは？`,
  list_one: `ハッシュは指紋のように一つ一つが異なります。ごくまれな例外を除き、異なるものが同じハッシュになることはありません。`,
  list_two: `ハッシュ関数は一方通行です。ハッシュから元のデータを逆算することはできません。`,
  list_three: `ハッシュは非常に信頼性が高く、「決定論的」です。つまり、同じデータを何度ハッシュしても、必ず同じ結果が得られます。`,
  paragraph_one: {
    a: `ここで使われている関数は `,
    b: `という非常に人気のあるものです。`,
  },
  paragraph_two: `それでは、特定のハッシュを探してみましょう。`,
  paragraph_three: `ゼロ（“0”）で始まるハッシュを見つけてください。下にいろいろ入力して、目標のハッシュが出るまで試してみましょう。`,
  tooltip_one: {
    question: `SHA-256はビットコインでどのように使われているの？`,
    link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520SHA-256%2520used%2520in%2520bitcoin%253F`,
    highlighted: `SHA-256`,
  },
},

hashing_four: {
  title: `ゼロ`,
  nav_title: `ゼロで始まるハッシュを探す`,
  heading: `ゼロ（“0”）で始まるハッシュが出るまで何か入力してみよう`,
  hint_prompt: `<Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">ヒント</Tooltip>が必要？`,
  hint_tooltip: `<span className="text-m whitespace-nowrap leading-none text-white/50">試してみて：</span> <span className="whitespace-nowrap text-white">popcorn</span>`,
},

hashing_five: {
  title: `ゼロ`,
  nav_title: `難易度アップ`,
  heading: `そんなに難しくなかったね！`,
  paragraph_one: `もう少し難しくしてみよう。今度は、先頭がゼロ2つ（"00"）のハッシュを探してみて。`,
},

hashing_six: {
  title: `ゼロ`,
  nav_title: `ゼロ2つで始まるハッシュを探す`,
  heading: `ゼロ2つ（“00”）で始まるハッシュが出るまで何か入力してみよう`,
  hint_prompt: `<Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">ヒント</Tooltip>が必要？`,
  hint_tooltip: `<span className="text-m whitespace-nowrap leading-none text-white/50">試してみて：</span> <span className="whitespace-nowrap text-white">trigonometry</span>`,
},

scripting_one: {
  title: `自動化`,
  nav_title: `ナンスをハッシュする`,
  heading: `これをコンピュータにやらせてみよう。`,
  paragraph_one: `おそらく、これにはかなり時間がかかったかもしれませんね。では、先頭が5個や10個のゼロで始まるハッシュを見つけることを想像してみてください。これこそが、マイナーが新しいブロックとトランザクションを提出する際に、ビットコインネットワークから課されるチャレンジです。`,
  paragraph_two: `マイナーは、前のブロックヘッダーのハッシュ、ブロックに含めたいトランザクションのハッシュ（コインベーストランザクションも含む）、時刻、そして「ナンス（nonce）」と呼ばれるランダムな数値など、ブロックに入れる情報を集めて、それらを組み合わせてハッシュ関数に入力し、「ブロックハッシュ」と呼ばれる値を生成します。`,
  paragraph_three: `ビットコインが最初に登場した頃、マイナーはブロックヘッダー内のナンス（32ビットのフィールド）を1ずつ増やしながら試していました。しかし、マイナーがより強力で効率的になるにつれて、難易度も上昇しました。やがて、32ビット内のすべての値を試しても、目標を満たすハッシュが1つも見つからないことが珍しくなくなりました。`,
  paragraph_four: `これに対応するため、マイナーはブロックヘッダーの他の部分、たとえば時刻や含まれるトランザクションを変更するようになりました。`,
  paragraph_five: `ビットコインネットワークには「難易度」という設定があり、一定数のゼロで始まるハッシュしかブロックとして受け付けません。この「難易度」は2016ブロックごとに調整されます。`,
  paragraph_six: `次のチャレンジでは、先頭が5つのゼロ（00000）で始まるハッシュを見つけるスクリプトを書いてください。`,
  tooltip_one: {
    question: `ターゲット難易度とは？`,
    link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520is%2520target%2520difficulty%253F`,
    highlighted: `ターゲット難易度`,
  },
},

scripting_two: {
  title: `自動化`,
  nav_title: `ハッシュ関数を作る`,
  paragraph_one: `さあ、自分でコードを書いて動かす時です。先頭が5つのゼロ（"00000..."）で始まるSHA256ハッシュを生成するスクリプトを書きましょう。異なる入力でSHA256関数を何度も呼び出して、条件を満たすまで繰り返し試してください。ループ内で整数を増加させて、入力を変えてみるのがいいでしょう。暗号学ではこの数を「ナンス（nonce）」または「一度だけ使う数値」と呼ぶことがあります。`,

  python: {
    paragraph_two: `先頭が5つのゼロで始まるハッシュを見つけたら、そのナンスを関数から返してください。ここではPythonのhashlibライブラリを使って関数を作ります。必要であれば、以下の外部リソースも参考にしてください：`,
    list_one: `<Link href="https://docs.python.org/3/library/hashlib.html" target="_blank" className="underline">hashlib ドキュメント</Link>`,
    list_two: `<Link href="https://datagy.io/python-sha256/" target="_blank" className="underline">Python 関数チュートリアル</Link>`,
  },

  javascript: {
    paragraph_two: `先頭が5つのゼロで始まるハッシュを見つけたら、そのナンスを関数から返してください。ここではJavaScriptのcryptoライブラリを使って関数を作ります。必要であれば、以下の外部リソースも参考にしてください：`,
    list_one: `<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">crypto ドキュメント</Link>`,
    list_two: `<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">JavaScript 関数チュートリアル</Link>`,
  },
},

mining_one: {
  title: `採掘へ`,
  nav_title: `ブロックのマイニング`,
  heading_one: `マイニングの仕組みがわかったところで、実際に体験してみましょう`,
  heading_two: `あなたは今、マイニングをしています`,
  heading_three: `よくできました！`,
  heading_four: `100ブロックを目指そう`,
  heading_five: `達成しました！`,
  paragraph_one: `現在のビットコインネットワークでは、ブロックには先頭にゼロが10個並んだハッシュが必要です。さあ、始めましょう！`,
  paragraph_two: `このシンプルなシミュレーションでは、各ブロックに3,500件のトランザクションと、報酬・手数料として合計0.061 BTCが含まれていると仮定します。`,
  paragraph_two_one: `マイナーのスイッチを入れてみましょう。`,
  paragraph_three: `前のレッスンで書いた、何度もハッシュを計算するコードが実行されています。`,
  paragraph_four: `先頭にゼロが10個並んだハッシュが見つかると、自動的に停止します。`,
  paragraph_five: `ナンスの値がどんどん増えていくのが見えますか？ それは、今までに試したハッシュの回数を表しています！`,
  paragraph_six: `このときのナンスは：`,
  paragraph_seven: `そのときのハッシュは：`,
  paragraph_eight: `これは、新しいブロックに必要な「ゼロ10個」を満たしています。もう少しブロックをマイニングしてみましょう。`,
  paragraph_eight_one: `もう一度、マイナーのスイッチを入れてください。`,
  paragraph_nine: `少し時間がかかるかもしれません。でも、ブロックをマイニングしてトランザクションを承認するのがいかに大変か、よくわかります。`,
  paragraph_ten: `すごい！ これだけのハッシュ計算にはかなりの計算能力が必要でした。試されたナンスの数を見てください！ ハッシュパワー（1秒あたりに試せるハッシュの数）が増えたおかげで、ずいぶん助かりましたね。`,
  paragraph_eleven: `予想通り、各ブロックに3,500件のトランザクションが含まれていたため、100ブロックで合計35万件のトランザクションが承認されました。`,
  paragraph_twelve: `そして、このマイニングでしっかりと報酬も得られました！ ブロック報酬（ネットワークが各ブロックに支払うBTC）に加えて、トランザクション手数料という追加収入も受け取れるしくみになっています`,
  paragraph_thirteen: `ただし、これはあくまでシミュレーションです。実際のブロックは平均して10分ごとに生成されるものです。`,
  paragraph_fourteen: `さらに、もし本当にメインネットでマイニングをするなら、これらのブロックを掘るには現在の何万倍もの計算能力が必要です。`,
  progress_bar_title: `見つかったブロック`,
  progress_bar_one: `ナンス`,
  progress_bar_two: `ハッシュ／秒`,
  progress_bar_three: `承認されたトランザクション数`,
  progress_bar_four: `獲得したビットコイン`,
  button_hash: `10倍のハッシュパワーをください`,
  ten_x_hint: `ハッシュを加速するには「100x」ボタンをタップ！`,
},
outro_one: {
  title: `エンディング`,
  nav_title: `チャプター完了`,
  heading: `よくできました！`,
  paragraph_one: `機械たちが轟音を上げて動き出します。すべてが正常に作動しているようです。古いモニターに、世界中の他の倉庫の場所が表示されます。それらの倉庫にも、ヴァンダープール家の古いマイニング装置が設置されており、あなたがマイニングチャレンジを達成したときに起動したようです。`,
  paragraph_two: `—ホロキャット：「見て、メッセージだニャ」`,
  paragraph_three: `「よくやった。これでビットコインは10分に1ブロックのペースに戻るはずだ。」– サトシ・ナカモト`,
  paragraph_four: `また彼？`,
},
resources: {
  hashing_two: {
    hash_functions_heading: `ハッシュ関数`,
    hash_functions_paragraph: `ハッシュ関数とは、任意のサイズのデータを固定サイズの値に変換する関数のことです。ハッシュ関数から得られる値は、ハッシュ値、ハッシュコード、ダイジェスト、または単にハッシュと呼ばれます。通常は固定サイズのテーブル（ハッシュテーブル）を参照するために使われます。ハッシュテーブルの参照にハッシュ関数を使うことを、ハッシングまたは散在記憶方式と呼びます。`,
    tip: `どんどん入力してみよう！SHA-256アルゴリズムでは、似たような入力でもまったく異なるランダムなハッシュになります。`,
    spoiler: `8文字の単語を試してみて。`,
  },

  hashing_four: {
    power_of_random_heading: `ランダムの力`,
    power_of_random_paragraph: `完全にランダムな状況と同じように、SHA-256のハッシュ関数は新しいデータを追加するたびに完全にランダムな結果を返します。たとえば『戦争と平和』をハッシュしてから、たった1文字を追加するだけでも、まったく違うハッシュになります。1文字ごとにハッシュがランダムに変化するのです。16進数では使用される文字は16種類（0〜9とa〜f）なので、ハッシュが「0」で始まる確率はどのくらいでしょうか？`,
    tip: `計算してみよう！1桁ごとに16通りあるなら、「00」で始まる確率は？「000」では？`,
    spoiler: `文字「s」で始まる単語を試してみて。`,
  },

  hashing_six: {
    collision_resistance_heading: `SHA256と衝突耐性`,
    collision_resistance_paragraph: `SHA-256は256ビット（64文字）のハッシュ値を返します。これは入力データを一意に表すものです。SHA-256はMerkle–Damgård構造に基づいたハッシュ関数の一種で、これはシンプルな圧縮関数を繰り返し処理してハッシュ関数を構築する方法です。メッセージは固定サイズのブロックに分割され、それぞれのブロックが前の結果と結合されて処理されていき、最終的なハッシュ値が生成されます。この構造によりSHA-256は高いセキュリティ性と衝突耐性を持ち、現代の暗号技術においてデータの整合性や認証の基礎として広く使われています。`,
    tip: `このレッスンでは特にヒントはありません。Saving Satoshiが進むにつれて、少しずつ自分で解く力が求められるようになります。`,
    spoiler: `1文字加えるごとに完全に異なるハッシュができるので、「00」で始まるまで追加し続ける手もあります…あるいは「trigonometry」という単語を試しても。`,
  },

  scripting_one: {
    hash_libraries_heading: `ハッシュ関数`,
    hash_libraries_paragraph: `Node.jsのcryptoライブラリや、Pythonのhashlibライブラリは、ハッシュアルゴリズムを実用的なツールとして提供してくれるコードライブラリです。多くの人が大切なシステムの安全性をこれらに依存しているため、これらのライブラリは正確性とセキュリティを確保するために厳しく検証されています。`,
    nonce_heading: `ナンス`,
    nonce_paragraph: `ナンス（nonce）とは「一度だけ使われる数値」の略で、暗号処理や計算処理においてランダムまたは半ランダムに使われる数です。ナンスの主な目的は予測不可能性を与えることで、同じ操作や計算が繰り返し使われたり予測されたりしないようにすることです。ビットコインのマイニングにおいても重要な役割を果たしますが、詳しくは後ほど学びましょう…`,
    tip_one: `入力を正しくデコードしているか確認しましょう。ハッシュアルゴリズムはしばしばバイトで返しますが、ここでは16進数で読み取れるようにする必要があります！`,
    tip_two: `特定の値になるまで実行し続ける関数をどう作るか考えてみましょう。`,
    tip_three: `答えを必ず <span className="p-1 font-mono bg-[#0000004D] m-1">console.log()</span> または <span className="p-1 font-mono bg-[#0000004D] m-1">print()</span> で表示するようにしてください。これが唯一、IDEがあなたの答えを検証できる方法です。`,
  },

  mining_one: {
    mining_heading: `マイニング`,
    mining_paragraph: `マイニングはこれまで学んできたすべての概念が一つに集まる場所です。ビットコインのマイニングとは、新しいビットコインを発行し、トランザクションをブロックチェーンに追加するプロセスです。マイナーたちは各ブロックにおいて、有効で一意な「ナンス」を見つけるという複雑な数学的パズルを解くために競い合います。このプルーフ・オブ・ワークには膨大な計算力とエネルギーが必要ですが、これによって取引の正当性が保証され、ネットワーク全体の分散性と安全性が保たれています。成功したマイナーは新しく発行されたビットコインと、トランザクション手数料を報酬として受け取ります。`,
    difficulty_heading: `難易度`,
    difficulty_paragraph: `マイニングの難易度とは、ブロック生成の間隔を平均10分に保つために調整されるものです。`,
    spoiler: `ネタバレはなし！このレッスンを読み進めるだけで大丈夫です。これから先のレッスンで、あなたのマイニング知識を試す機会がたくさんあります！`,
     },
   },
 },    
chapter_three: {
  title: `51%攻撃`,

  paragraph_one: `あなたはブロックエクスプローラーのアドレスを入力し、ブロック生成が再び10分間隔に戻っていることを確認します。なお、ホロキャットは、大量のASICがうなりを上げているというのにぐっすり眠っています。`,
  paragraph_two: `まったく、ネコってやつは…`,
  paragraph_three: `でも、何かがおかしい。ブロックが空で、トランザクションが処理されていません。何かミスをした？偶然か？——そんな疑問が浮かぶ中、コンピュータの画面に新たなメッセージが表示され、ホロキャットが飛び起きます。`,
  paragraph_four: `偶然なんかじゃない。`,

  intro_one: {
    title: `イントロ`,
    nav_title: `ハッシュで対決`,
    paragraph_one: `—サトシ・ナカモト：「おい、そこのキミ！そう、キミだ！私のことを覚えているか？ビットコインが今、51%攻撃を受けてるぞ！キミがマイニング装置を起動させたあと、ヴァンダープールがBitReyのASICを再稼働させて、空のブロックばかりマイニングしているんだ。しかも問題は彼のマシンだけじゃない。標準のASICファームウェアに仕掛けられたバックドアを使って、既存のマイナーを感染させ、空のブロックしか掘れないようにするウイルスをばら撒いたんだ。奴はビットコインの供給量を増やすというアイデアを強引に支持させようとして、エコシステム全体を人質に取っている。何ボーっとしてるんだ、のんびり屋！」`,
    paragraph_two: `古いコンピュータが埃を吐き出しながら、「スプレッドシート」と呼ばれるデータの束を出力します。そこには主要なビットコインマイナーの連絡先と、ウイルス除去用のパッチが含まれていました。早くこのパッチを他のマイナーに届ければ、彼らは自分のマシンを取り戻して、あなたと一緒にBitReyと戦えるようになります。`,
    paragraph_three: `—ホロキャット：「また仕事が増えたニャ。…ま、やるのはキミだけどニャ。ボクは壁を駆け抜けてネズミでも脅かしてくるニャ〜」`,
  },

  solo_one: {
    title: `あなた vs. BitRey`,
    nav_title: `ひとりでマイニング`,
    step_zero_heading: `やってみよう`,
    step_zero_paragraph_one: `他のマイナーたちからの返事を待っている間に、BitReyを一人で食い止められるか試してみることにしました。もしかしたら、自分の力だけで空のブロックを止められるかもしれません。あなたのハッシュレートはこんな感じです。うまくいくと思いますか？`,
    step_one_heading: `競争開始`,
    step_one_paragraph_one: `BitReyと競いながら、100ブロック分のマイニングに挑戦します。あなたはいくつブロックを獲得できるでしょうか。`,
    step_two_heading: `うまくいかなかった！`,
    step_two_paragraph_one: `残念！BitReyとウイルスに支配されたマイナーに対抗するには、ハッシュパワーが全然足りない…。次の100ブロックでは、他のマイナーたちと力を合わせてBitReyを倒せるか試してみましょう。ビットコインは100年以上続いてきたんだ、そう簡単には倒れない。`,
  },

pool_one: {
  title: `プール vs. BitRey`,
  nav_title: `仲間を探そう`,
  waiting_screen_heading: `応援が必要だ！`,
  waiting_screen_paragraph_one: `倉庫のマイニング装置だけでは太刀打ちできません。他のマイナーたちとハッシュパワーを結集すれば、BitReyの猛攻に耐えられるかもしれません。`,
  waiting_screen_paragraph_two: `仲間が合流するのを待って、力を合わせましょう。`,
  waiting_button: `待機中…`,
  continue_button: `さあ行こう`,
},

pool_two: {
  title: `プール vs. BitRey`,
  nav_title: `協力してマイニング`,
  step_zero_heading: `いよいよ本番`,
  step_zero_paragraph_one: `他のマイナーとハッシュレートをプールすることで、BitReyに立ち向かえるでしょうか？`,
  step_two_heading: `またしても敗北！`,
  step_two_paragraph_one: `何かがおかしい。ブロックを見つけたのは「ハッシュレート・ホッパーズ」だけでした。なぜだと思いますか？`,
},

coop_one: {
  title: `協力 vs. BitRey`,
  nav_title: `何かがおかしい`,
  heading: `まだ何かがうまくいっていません。`,
  paragraph_one: `最もハッシュパワーを持つ「ハッシュレート・ホッパーズ」がすべてのブロックを見つけていて、他の仲間たちは何も見つけられていません。`,
  paragraph_two: `問題は、みんながマイニング中に同じナンスをチェックしていることです。どうすればもっと効率よく分担できるでしょうか？`,
  paragraph_three: `そこであなたは、ブロックデータを準備するときに各自の「extraNonce（エクストラナンス）」に固有の識別子を入れ、作業の重複を防ぐことにしました。`,
},

coop_two: {
  title: `協力 vs. BitRey`,
  nav_title: `extraNonceとは`,
  heading: `extraNonceって何？`,
  paragraph_one: `Stratumというマイニングプール用プロトコル（ビットコインの本体プロトコルではない）では、コインベーストランザクションに「extraNonce（エクストラナンス）」と呼ばれるデータがあります。マイニングプールがブロックデータをマイナーに配布する際、このextraNonceは「extranonce1」と「extranonce2」に分けて使われます。`,
  paragraph_two: `extraNonceを2つに分けることで、以下のような利点があります：`,
  list_one: `プール参加者同士が同じ作業をするのを防げます。`,
  list_two: `全員に同じトランザクションリストを送れるので、マイナーは「extranonce2」だけを更新すればよく、ブロック内のトランザクションを変更する必要がありません。`,
  list_three: `「extranonce1」は各マイナーに割り当てられるため、誰がどれだけ貢献したかをプール側で識別できます。`,
  paragraph_three: `プールに参加しているマイナーは「extranonce2」を更新しながら、ブロックヘッダー内のナンスを回していきます。もし解が見つからなければ、異なる「extranonce2」で再挑戦するのです。`,
  paragraph_four: `この方法で作業を分担して、もう一度挑戦してみましょう。`,
},

coop_three: {
  title: `協力 vs. BitRey`,
  nav_title: `チームワークでマイニング`,
  step_zero_heading: `もう一度…`,
  step_zero_paragraph_one: `ナンス空間を分割するこの新しい戦略で、今度こそBitReyに対抗できるか試してみましょう。`,
  step_two_heading: `やったぞ！`,
  step_two_paragraph_one: `あなたと仲間のマイナーたちは協力して、BitReyのネットワーク掌握を食い止めました。`,
},

split_one: {
  title: `報酬の分配`,
  nav_title: `公平な分け方`,
  heading: `よくできました！`,
  paragraph_one: `あなたはBitReyからネットワークを守っただけでなく、報酬としてビットコインも手に入れました！`,
  paragraph_two: `ブロックを1つマイニングするたびに、マイナーにはビットコインの報酬が与えられます。複数人でブロックを掘った場合は、マイニングプールという形で報酬を分け合います。`,
  paragraph_three: `この報酬は、以下の2つで構成されています：`,
  list_one: `そのブロック内のすべての取引に対する手数料`,
  list_two: `ブロック報酬（新しく発行されるビットコイン）`,
  paragraph_four: `あなたと仲間のマイナーたちは、合計7.41BTCを獲得しました。それをどう公平に分配するかを考える必要があります。作業量に応じて分けるのが筋です。`,
  paragraph_five: `マイニングプールは、各マイナーが提出した部分的な解（パーシャルソリューション）の数を記録することで、これを解決しています。プールはマイナーのハッシュパワーに応じて、それぞれに本番より低い難易度を割り当てます。マイナーは数秒ごとにその簡単な問題の解を見つけてプールに通知します。プールは提出されたすべての「シェア」を追跡し、それに応じて報酬を分配するのです。`,
  paragraph_six: `実際にどうなるか見てみましょう。`,
},

split_two: {
  title: `報酬の分配`,
  nav_title: `報酬の計算`,
  step_zero_heading: `みんなのがんばりを確認しよう`,
  step_zero_paragraph: `もう一度BitReyとの戦いを再現します。今回はプール内だけに注目し、それぞれのマイナーがどれだけ部分的な解を見つけたかを見ていきます。`,
  step_two_heading: `計算してみよう`,
  step_two_paragraph: `上の数字を見て、公平な分け方を考えてみましょう。わかりましたか？ではステップごとに確認していきましょう。`,
  step_three_heading: `ハッシュレートの割合`,
  step_three_paragraph: `これは各マイナーがどれだけ働いたかを示しますが、マイニングプール側ではこの数値を直接知ることはできません。なぜなら、マイナーは成功した結果しか送らないからです。`,
  step_four_heading: `ブロック発見の割合`,
  step_four_paragraph: `ブロックを見つける確率はとても低く、運にも大きく左右されます。強力なマイナーがいる場合、小さなマイナーは貢献していても一度もブロックを見つけられないこともあります。`,
  step_five_heading: `部分的な解の割合`,
  step_five_paragraph: `この数値こそが使える指標です。マイナーたちは簡単な問題の解を定期的にプールに報告しており、それによってどれだけ働いたかをかなり正確に測ることができます。`,
  step_six_heading: `報酬の分配`,
  step_six_paragraph: `これで、7.41BTCの報酬を、それぞれの部分的な解の割合に基づいて分配できます。おめでとう！`,
}

outro_one: {
  title: `エンディング`,
  nav_title: `チャプター完了`,
  heading: `どうだ、ヴァンダープール！`,
  paragraph_one: `よくやりました！あなたと仲間のマイナーたちは、リソースをプールしてヴァンダープールの51％攻撃を撃退することに成功しました。もう空のブロックは提出されておらず、どうやら彼は諦めたようです。`,
  paragraph_two: `さあ、報酬を受け取りましょう！次の章でビットコインを引き出してください。`,
},

resources: {
  solo: {
    hashrate_heading: `マイニングハッシュレート`,
    hashrate_paragraph: `個々のマイナーのハッシュレートとは、ビットコインネットワークのマイニングにおいて、彼らが提供する計算能力のことです。これは、新しいブロックをマイニングするために必要な数学的計算を、どれだけの速さで実行できるかを示します。個人のハッシュレートは通常「ハッシュ/秒」で測定され、大規模な場合は「テラハッシュ/秒（TH/s）」のように表されます。これはそのマイナーの規模や使用しているマイニング機器の性能によって異なります。`,
  },
  pool: {
    pool_heading: `マイニングプール`,
    pool_paragraph: `マイニングプールは、仮想通貨のマイニングにおいて重要な役割を果たします。多くの参加者が計算能力とリソースを持ち寄ることで、新しいブロックをマイニングする成功率が高まり、より安定した収益が得られるようになります。また、マイニングプールは、高性能な機器や専門サポートにアクセスする場も提供しており、参入のハードルを下げ、公平な環境をつくっています。さらに、報酬を効率的に分配する仕組みが整っており、それぞれの貢献に見合った分配がされることで、より幅広い人々が仮想通貨マイニングに取り組みやすくなっています。`,
  },
  coop: {
    distribution_heading: `作業の分担`,
    distribution_paragraph: `マイニングプールでは、同じブロックに対して複数のマイナーが同じナンスを使ってしまわないよう、注意深く管理されています。ビットコインのマイニングでは、有効なナンスを最初に見つけたマイナーが報酬を得るため、同じナンスで競ってしまうと非効率で、報酬も1人しか得られません。この問題を防ぐために、プールでは「ワークアサインメント（作業割り当て）」や「ジョブディストリビューション（仕事の分配）」という仕組みで効率的に仕事を振り分けます。新しいブロックを掘る際、プールサーバー（運営者）は、未確認トランザクションの一覧や前のブロックヘッダー、目標難易度などを含む「ジョブ」を生成してマイナーに送ります。`,
    shares_heading: `シェアの提出`,
    shares_paragraph: `マイナーは割り当てられたジョブに取り組み、正しいナンスを見つけようと計算を繰り返します。そして「これが解かもしれない」と思ったときには、「シェア」と呼ばれるものをプールサーバーに提出します。シェアは本物の解よりも簡単に見つけられるものですが、「マイニング作業をしている証拠」としての役割を果たします。`,
  },
  split: {
    payout_heading: `報酬分配方式`,
    payout_subheading: `マイニングプールは、いくつかの異なる方式で報酬を分配します。それぞれに微妙ながらも重要な違いがあります：`,

    pps_heading: `Pay-Per-Share（PPS）`,
    pps_paragraph: `PPS方式では、プールがブロックを実際に発見できたかどうかに関係なく、有効なシェアを提出するたびにマイナーに一定額の報酬が支払われます。これにより収益が安定し、定期的な収入を求めるマイナーに好まれます。変動の激しい仮想通貨マイニングにおいて、PPSは安定した収入源を提供します。ただし、プールがブロックを見つけられない場合は、運営コストやリスク補填のために手数料が差し引かれることがあります。従来のPPSでは、プールが困難な状況にあるとき、マイナーの受け取る報酬が減ることもあります。`,

    pplns_heading: `Pay-Per-Last-N-Shares（PPLNS）`,
    pplns_paragraph: `PPLNS方式では、最後の「N個」のシェアの提出に基づいてマイナーの貢献度を評価し、報酬を分配します。この方式は、一貫して活動しているマイナーを優遇するため、プールを転々とする行動（プールホッピング）を抑制する効果があります。ブロックが見つかった時点で、直近に多くのシェアを提出したマイナーに比例して報酬が与えられるため、継続的な参加を促します。`,

    pps_plus_heading: `Pay-Per-Share Plus（PPS+）`,
    pps_plus_paragraph: `PPS+方式では、シェア1つごとに固定の報酬が支払われるPPSの仕組みに加えて、プールの安定性や信頼性に貢献するマイナーへ特別ボーナスが付与されることがあります。このボーナスによって、長期的にプールに参加し続けるインセンティブが生まれます。安定した報酬に加えて、追加報酬も期待できることから、信頼性と利益の両立を重視するマイナーにとって魅力的な方式です。`,

    fpps_heading: `Full Pay-Per-Share（FPPS）`,
    fpps_paragraph: `FPPS方式では、マイナーが提出したシェア1つごとに、プールがブロックを見つけたかどうかにかかわらず報酬が支払われます。従来のPPSよりも安定性が高く、報酬の減額もありません。プールの状況にかかわらず、マイナーは自分の働きに対してフルに報酬を受け取ることができます。これは、安定した収益を重視するマイナーにとって魅力的な、シンプルで分かりやすい報酬方式です。`,
     },
   },
 },

chapter_four: {
  title: `1.61BTCを受け取ろう`,
  paragraph_one: `ふぅ、危なかった！BitReyとの戦いでまだ手が震えているけれど、勝てたことにホッとしている。`,
  paragraph_two: `デスクに腰を下ろして深呼吸し、少しうとうとしながら今日の出来事を思い返す。`,
  
  intro_one: {
    title: `イントロ`,
    nav_title: `報酬を確保せよ`,
    paragraph_one: `ホロキャット：「どちらかは寝たほうがいいニャ。キミは他のマイナーたちに連絡し始めるべきニャ。世界中よりも、彼らがもっと知りたがるはずニャ。」`,
    paragraph_two: `バットリフト・ホバーデスクに腰を下ろしながら、あなたは今日の出来事を思い返す。ヴァンダープール。BitRey。抗議のためにみんなでマイニングを止めた――そんな話が出てたけど、実は誰もそんな合意なんてしていなかった、という驚きの事実。それは本当だったのか？すべて演出だったのか？それに、いつまでこの猫の世話をしなければならないのか？（遠くで、何かが「ニャー」と鳴いた。）`,
    paragraph_three: `この先どうなるにせよ、資金は必要だ。…待てよ！BitReyとの対決で獲得したマイニング報酬をまだ受け取っていなかった！今すぐ引き出すことにする。`,
  },

public_key_one: {
  title: `公開鍵`,
  nav_title: `鍵のペア`,
  heading: `鍵ペアについて`,
  paragraph_one: `マイニングプールによれば、あなたには以前の作業で得た1.61BTCの受け取り権があるようです。`,
  list_one: `秘密鍵`,
  list_two: `公開鍵`,
  paragraph_two: `でも待って、ウォレットをまだ持っていない！どこで買えばいいんだろう？と思うかもしれません。専用のハードウェアを購入してウォレットを作ることもできますが、実はパソコンやスマホでも簡単に作れます。やってみましょう！`,
  paragraph_three: `ウォレットを作ると、「個人コード」と呼ばれる情報が生成されます。これは暗号学では「秘密鍵」と呼ばれ、通常は以下のようなペアになっています：`,
  paragraph_four: `1組の鍵ペアがあれば、ウォレットを作って資金を管理できます。ビットコインを送るときは秘密鍵を使い、受け取るときは公開鍵を使います。`,
},

public_key_two: {
  title: `公開鍵`,
  nav_title: `楕円曲線暗号`,
  paragraph_one: `秘密鍵（ゲーム内であなたが手にした「個人コード」）が手に入りました。では、そこから公開鍵をどうやって作るのでしょうか？`,
  paragraph_two: `そのためには「楕円曲線暗号」という興味深い分野を少し覗いてみる必要があります。Elliptic Curve Cryptography、略してECCと呼ばれています。`,
  paragraph_three: `ECCでは、楕円曲線上の特定の点を使って加算や乗算のような演算を行います。`,
  paragraph_four: `ビットコインでは「secp256k1」という特定の曲線を使用しています。図には視覚的にわかりやすい簡略版が表示されていますが、同じ数学的ルールに従っています。`,
  paragraph_five: `まず、この曲線上の特定の点から始めます。これは`,
  tooltip_one: {
    highlighted: `生成点（Generator Point）`,
    question: `生成点って何？`,
    link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520the%2520Generator%2520point%253F`,
  },
},

public_key_three: {
  title: `公開鍵`,
  nav_title: `公開鍵の計算`,
  paragraph_one: `秘密鍵から公開鍵を導き出すには、生成点との楕円曲線演算を繰り返します。生成点はsecp256k1の標準で定められた、曲線上の特定の点で常に同じ値です。`,
  paragraph_two: `楕円曲線上での演算は加算と似ており、それを繰り返すことで乗算に相当する処理となります。アルゴリズムは次のように表されます。ここで「k」は秘密鍵、「P」は対応する公開鍵です：`,

  python: {
    paragraph_three: `関数 <span className="text-green">privatekey_to_publickey()</span> を完成させてください。この関数は、16進文字列で与えられた秘密鍵を受け取り、対応する公開鍵（GE＝グループ要素）オブジェクトを返します。`,
  },
  javascript: {
    paragraph_three: `関数 <span className="text-green">privateKeyToPublicKey()</span> を完成させてください。この関数は、16進文字列で与えられた秘密鍵を受け取り、対応する公開鍵（GE＝グループ要素）オブジェクトを返します。`,
  },

  paragraph_four: `以下に、型変換のヒントをいくつか示します：`,
  success: `よくできました！公開鍵はけっこう長いですね。次はそれを圧縮してみましょう！`,
},

public_key_four: {
  title: `公開鍵`,
  nav_title: `公開鍵の圧縮`,
  paragraph_one: `公開鍵は x 座標と y 座標から構成され、合計で64バイトになります。これを33バイトに圧縮するには、y 座標を省略して、代わりに「y が偶数か奇数か」を示す1バイトのメタデータを前に付けます。楕円曲線の方程式は変数が2つしかないため、検証者は後でこのx座標とメタデータから完全な公開鍵を復元できます：`,

  paragraph_two_javascript: `メタデータのバイトは、yが偶数なら「2」、奇数なら「3」とします。関数 <span className="text-green">compressPublicKey()</span> を完成させて、公開鍵を受け取り、33バイトの圧縮された公開鍵（16進文字列）を返してください。`,
  paragraph_two_python: `メタデータのバイトは、yが偶数なら「2」、奇数なら「3」とします。関数 <span className="text-green">compress_publickey()</span> を完成させて、公開鍵を受け取り、33バイトの圧縮された公開鍵（16進文字列）を返してください。`,

  success: `素晴らしい！これで圧縮された公開鍵ができました。次は、それをハッシュ化して、人間が読みやすい形式に変換していきましょう。`,
}

address_one: {
  title: `アドレス`,
  nav_title: `一方通行の道`,
  heading: `よくできました！`,
  paragraph_one: `これで圧縮された公開鍵が完成です！この鍵を使ってウォレット用のアドレスを生成するなど、さまざまなことができます。それについては次のチャレンジで学びましょう。`,
  paragraph_two: `ただし、公開鍵の生成は「一方通行」の操作であることを覚えておきましょう。つまり、公開鍵から秘密鍵を逆算することはできません。もしやるとすれば、悪名高い、難しい数学の問題――離散対数問題を解かない限り、公開鍵を生成するために使われた秘密鍵を特定することはできません。`,
  tooltip_one: {
    question: `離散対数問題はビットコインとどう関係しているの？`,
    link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520the%2520discrete%2520log%2520problem%2520relevant%2520to%2520bitcoin%253F`,
    highlighted: `離散対数問題`,
  },
},

address_two: {
  title: `アドレス`,
  nav_title: `圧縮公開鍵のハッシュ化`,
  paragraph_one: `ハッシュのチャレンジを覚えていますか？実は、圧縮された公開鍵にハッシュをかけるだけで、最も基本的なビットコインアドレスが生成できます。ビットコインは、このためにSHA-256とRIPEMD-160という、2つの異なるハッシュアルゴリズムを使用しています。`,
  paragraph_two: `手順：`,
  paragraph_three: `<span className="indent-48">1. 圧縮公開鍵に SHA-256 をかけます。</span>`,
  paragraph_four: `<span className="indent-48">2. その出力に RIPEMD-160 をかけます。最終的な出力は、16進数で表された20バイトの文字列になります。</span>`,
  paragraph_five: `この33バイトの圧縮公開鍵（16進文字列）を受け取り、20バイトの公開鍵ハッシュ（16進文字列）を返す関数を完成させましょう。`,
  paragraph_six:
    `以下は、すでにインポート済みのハッシュライブラリのドキュメントです：\n` +
    '<Link href="https://nodejs.org/api/crypto.html#class-hash" target="_blank" className="underline">JavaScript: crypto</Link>\n' +
    '<Link href="https://docs.python.org/3/library/hashlib.html#usage" target="_blank" className="underline">Python: hashlib</Link>',
  success: `素晴らしい！あと一歩でウォレットアドレスが完成します。`,
},

address_three: {
  title: `アドレス`,
  nav_title: `P2WPKHアドレスを作ろう`,
  paragraph_one: `ビットコインにはいくつかの種類のアドレスがあります。前のステップでは、20バイトの圧縮公開鍵ハッシュを作成しました。今度はそれを、テストネット用の「Pay-to-Witness-Public-Key-Hash（P2WPKH）」アドレスに変換してみましょう。`,
  paragraph_two: `まず、ハッシュに「witness version 0」を表すバイト（'0'）を先頭に追加します。この21バイトのデータは <span className="font-bold">ウィットネスプログラム</span> と呼ばれます。`,
  paragraph_three: `次に、このウィットネスプログラムを「bech32」と呼ばれる、人間に読みやすい形式にエンコードします。bech32では、読みやすいプレフィックスとチェックサムが付加されます。`,
  paragraph_four: `プレフィックスはネットワークによって決まります：`,
  table_heading: {
    item_one: `ネットワーク`,
    item_two: `プレフィックス`,
  },
  table_rows: {
    key_one: `メインネット`,
    value_one: `bc`,
    key_two: `テストネット`,
    value_two: `tb`,
    key_three: `レグテスト`,
    value_three: `bcrt`,
  },
  paragraph_five: `今回はテストネットのアドレスを作るので、'tb' プレフィックスを使います。`,
  paragraph_six: `データがbech32形式にエンコードされれば、ビットコインアドレスの完成です！`,
  paragraph_seven: `圧縮公開鍵ハッシュから bech32 アドレスを作成する関数を完成させましょう。まずウィットネスプログラムを作成し、それを bech32 ライブラリを使ってアドレスに変換してください。`,
  paragraph_eight: `必要であれば、bech32ライブラリのコードを見て、どの関数を使えばいいか調べてみましょう：`,
  paragraph_eight_javascript: `<Link href="https://github.com/saving-satoshi/bech32js/blob/main/bech32.js" target="_blank" className="underline">JavaScript: @savingsatoshi/bech32js</Link>\n`,
  paragraph_eight_python: `<Link href="https://github.com/saving-satoshi/bech32py/blob/main/bech32py/bech32.py" target="_blank" className="underline">Python: savingsatoshi_bech32py</Link>`,
  success: `これで、マイニングで得たビットコインを受け取れるアドレスができました！`,
},

outro_one: {
  title: `アウトロ`,
  nav_title: `チャプター完了`,
  heading: `成功！`,
  paragraph_one: `あなた自身のビットコインウォレットを作成しました！`,
  paragraph_two: `マイニングプールから、今作成したウォレットにビットコインを引き出しました。これで資金は万全。ヴァンダープールとBitReyが次に何を仕掛けてこようと、準備万端です。`,
},

resources: {
  public_key_three: {
    generator_point_heading: `生成点（Generator point）`,
    generator_point_paragraph: `secp256k1曲線上の特定の点。その値はsecp256k1の標準に含まれており、常に同じです。この点は他の点と特別に異なるわけではありませんが、計算の標準的な出発点として合意されています。なぜこの点が選ばれたのか、正確な理由は今も明らかではありません。`,

    elliptic_curve_operations_heading: `楕円曲線演算`,
    elliptic_curve_operations_paragraph: `楕円曲線には独自の数学的ルールがあるため、加算や乗算のような単純な演算も異なる仕組みになります。簡潔さと分かりやすさのために、通常の乗算に似た演算には “*” のような既存の記号が使われます。`,

    discrete_log_heading: `離散対数`,
    discrete_log_paragraph: `これは、掛け算はできるけれど割り算ができないという数学的な仕組みです。簡単な例えとしては、時計を使った説明があります。たとえば、11時から3時間後は2時になります。「11＋3＝2」と言えますね。しかし「2−x＝11」を解こうとすると、xには無限の解（3、15、27、39...）が存在してしまいます。詳しくは <Link href="https://ja.wikipedia.org/wiki/離散対数問題" className="underline">Wikipedia</Link> を参照してください。`,

    tip_one: `楕円曲線上の点との「掛け算」は、通常の数値の掛け算とは異なります。では、どのように掛け算をすれば良いのでしょう？生成点 <span className="p-1 font-mono bg-[#0000004D] m-1">G</span> は <span className="p-1 font-mono bg-[#0000004D] m-1">secp256k1.GE</span> 型のオブジェクトです。このクラスを調べて、どんなメソッドが使えるか確認してみましょう。`,

    tip_two: `秘密鍵は16進形式で渡されますが、生成点との掛け算を行う前に数値（JavaScriptなら BigInt）に変換する必要があります。`,
  },

  public_key_four: {
    y_coordinate_compression_heading: `公開鍵の圧縮`,
    y_coordinate_compression_paragraph: `楕円曲線上で点の加算を計算する際には、2つの点の座標を使って、曲線上の第3の点の座標を導き出します。しかし、あるx座標に対しては、通常2つの異なるy座標が存在します（いくつかの特例を除く）。公開鍵を圧縮する際には、どちらかのy座標を選び、x座標だけと、それが偶数か奇数かを示すメタデータだけを含めます。このメタデータによって、後で正しいy座標を判別できます。`,

    tip: `今回のチャレンジは実はとてもシンプルです。y座標が偶数か奇数かを判定し、その情報をメタデータとして公開鍵の先頭に付け加えるだけなのです。`,
  },  
      address_two: {
        hash_algo_heading: `SHA-256、RIPEMD-160`,
        hash_algo_paragraph: `ハッシュ関数は、あらゆる種類・量のデータを入力として受け取り、常に同じサイズの結果を返します。SHA-256 では 32 バイト、RIPEMD-160 では 20 バイトです。出力は決定論的（同じ入力には必ず同じ出力）ですが、それ以外はランダムと区別できません。ハッシュ関数はデータを小さく一貫したフィンガープリント（指紋）へ要約します。`,
        tip_one: `SHA-256 ハッシュを計算する際は、圧縮公開鍵を 16 進文字列ではなくバイト列としてハッシュしてください。JavaScript を使う場合は、16 進文字列をバッファに変換する必要があります。`,
        tip_two: `ハッシュアルゴリズムを正しい順序で実行しているか必ず確認しましょう！`,
      },
      address_three: {
        wpkh_heading: `Witness Public Key Hash（wpkh／ウィットネス公開鍵ハッシュ）アドレス`,
        wpkh_paragraph: `ビットコインアドレスは、ユーザーが扱いやすいように設計された文字列です。短く、コピー＆ペーストしやすく、正確にコピーされたことを確認するためのチェックサムも備えています。アドレスは、受取人が後で使用できるビットコイン出力スクリプトを安全にエンコードしたものです。出力スクリプトには複数の種類があり、エンコード方式もいくつか存在します。このチャレンジでは、圧縮公開鍵を bech32 でエンコードし、Witness Public Key Hashアドレスを作成します。`,
        network_heading: `メインネット、テストネット、サイネット、レグテスト`,
        network_paragraph: `ビットコインソフトウェアを開発する際は、実際のお金を扱う前にコードをテストすることが重要です。最も簡単な方法の一つは、新しいジェネシスブロックを持ち、コインに価値がなく、マイニングが無料で簡単、しかもいつでもリセットできる別ブロックチェーンを使うことです。これらのチェーンは、メインネットの実際のコインやノードに干渉しない独立したノードネットワークによって支えられています。Testnet と Signet は、世界規模でメインネットと並行して維持されている代表的な代替ビットコインブロックチェーンです。Regtest は完全にローカルで動作し、ネットワーク接続を必要としない開発者向けモードです。`,
        tip: `bech32 ライブラリをよく確認し、利用できる正確なメソッドを探してください。`,
      },
    },
  },

  chapter_five: {
    title: `本物のサトシ、立ち上がってください`,
    paragraph_one: `夜も更け、あなたは疲れている…。しかし目を閉じたその瞬間、二重の悪いニュースが飛び込んでくる。`,
    paragraph_two: `1）ヴァンダープールがテレビに戻ってきた。`,
    paragraph_three: `2）彼は自分がサトシ・ナカモトのひ孫だと主張している。`,
    paragraph_four: `彼は寝不足のように見える。`,
    intro_one: {
      title: `イントロ`,
      nav_title: `信じるな、検証せよ`,
      paragraph_one: `—デボラ・チャンク：「ヴァンダープールさん。あなたは“反ソーシャルメディア”とでも呼ぶべきSNS上で、自分がサトシ・ナカモトのひ孫であると衝撃的な主張をしましたが、それは本当ですか？」`,
      paragraph_two: `—ヴァンダープール：「その通りです、デボラ。この秘密はずっと長い間、私の胸に秘めていました。というのも、我が家では、一見なんの変哲もないCD-ROMが代々受け継がれてきたんです。秘密を守るために、ラベルには<span className="italic">Creed – My Own Prison</span>と書いておきました。その中には、私の曽祖父サトシ・ナカモトの莫大なビットコインの秘密鍵が入っています。ですから、私がマイナーを代表して発言する時は、サトシ・ナカモトの代理としても発言しているのです。」`,
      paragraph_three: `—デボラ・チャンク：「あなたが実際にその秘密鍵を持っていると検証する方法はありますか？」`,
      paragraph_four: `—ヴァンダープール：「もちろんありますよ。公開鍵暗号のシンプルな仕組みを使えばいいだけです。」`,
      paragraph_five: `—デボラ・チャンク：「でも、なぜ今までこの衝撃的な事実を公表しなかったのですか？」`,
    },
    intro_two: {
      nav_title: `ヴァンダープールの大胆な主張`,
      paragraph_one: `—ヴァンダープール：「勇気がなかったんです。私の家系についての噂はずっとありましたし、それを簡単に裏付けることもできました。でも注目される覚悟がなかったんです。何しろ私は、私有の島の中でも一番お気に入りの島にある14世紀の城で隠遁生活をしていましてね。毎週このようなインタビューを5〜6件、庭のジャグジーからこなす程度の暮らしをしています。」`,
      paragraph_two: `—ヴァンダープール：「でも今、ビットコインの未来がかかっているからこそ、現実と向き合う時だと悟ったんです。特に、Creedのデビューアルバム『My Own Prison』の音楽とともに。」＊ヴァンダープールは20世紀のアルバムタイトル曲のメロディを口ずさむ＊`,
      paragraph_three: `—ヴァンダープール：「もっと早く名乗り出なかったことを申し訳なく思っています。なぜなら、そのCD-ROMにはサトシ・ナカモトによるビットコインの改訂プランも入っていたんです。曽祖父はビットコインの供給量を2,100万枚に制限したことをずっと後悔していたんですよ。だから私は、曽祖父の夢を叶えて、ビットコインをハードフォークして永続的に発行可能な形にしようと思っています。」`,
    },
    intro_three: {
      nav_title: `サトシからのメッセージ`,
      paragraph_one: `あなたの TXM4H-A ホバースクリーンがピコンと鳴る。新しいメッセージが届いている。`,
      paragraph_two: `—ホロキャット：私の鼻、忘れずにポチッとしてね。`,
      paragraph_three: `あなたは彼女の鼻をポチッと押す`,
      paragraph_four: `—サトシ・ナカモト：「ヴァンダープールは、彼が主張するような人物ではない。キミなら彼の嘘を暴くことができる。彼に、ウォレットの秘密鍵を使ってメッセージに署名することで、サトシのビットコインの所有を証明するよう要求するんだ。」`,
    },
    derive_message_one: {
      title: `メッセージを導き出す`,
      nav_title: `問題のメッセージ`,
      heading: `ヴァンダープールはこう主張しています：「サトシの鍵でメッセージに署名した」`,
      code_one: `-----BEGIN BITCOIN SIGNED MESSAGE----- \n \n 私はヴァンダープールであり、サトシがブロック #170 で初めて確認されたビットコイン取引に署名するために使用した秘密鍵を保持しています。このメッセージはその秘密鍵で署名されています。 \n \n -----BEGIN BITCOIN SIGNATURE----- \n \n`,
      code_two: `<span className="break-all"> H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k= </span>`,
      code_three: `\n \n-----END BITCOIN SIGNATURE-----`,
      paragraph_two: `これって一体どういう意味？`,
    },
    derive_message_two: {
      nav_title: `公開鍵を探す`,
      paragraph_one: `第4章で学んだ通り、秘密鍵とは非常に大きなランダムな数字で、それを生成した本人だけが秘密に保持しています。楕円曲線暗号の計算を使えば、その秘密鍵から対応する公開鍵を導き出すことができます。`,
      paragraph_two: `公開鍵は識別子として共有でき、秘密鍵はその識別子を自分が制御していることを証明するために使われます。その証明が「署名（SIGNATURE）」です。署名を作成するには、メッセージと秘密鍵が必要です。そしてその署名は、メッセージと対応する公開鍵があれば誰でも検証できます。`,
      paragraph_three: `ヴァンダープールは署名とメッセージを提示しました。では公開鍵はどこ？`,
    },
    derive_message_three: {
      nav_title: `サトシの署名を探す`,
      heading: `まずはサトシの署名を見つけよう`,
      paragraph_one: `ブロック #170 には、サトシからハル・フィニーへの<link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">最初のビットコイン取引</link>が含まれています。この取引には<Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">1つのインプット</Link>しかありません。そのインプットにある scriptSig を取得しましょう。そこにサトシの署名が含まれています！`,
      placeholder: `ここにデータを貼り付けてください`,
      success: `よくできました！これは実際にサトシの署名であり、彼のビットコインをハル・フィニーに送金することを承認したものです。`,
    },
    derive_message_four: {
      nav_title: `サトシの公開鍵を探す`,
      heading: `では公開鍵はどこに？`,
      paragraph_one: `実はそれは、サトシがブロック #9 をマイニングした際に生成したビットコインと一緒に記録されています。`,
      paragraph_two: `<Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">こちらのリンク</Link>をたどって、インプット #0 の上部にあるソーストランザクションを確認してください。これはサトシがブロック #9 をマイニングして作成したトランザクションです。この取引では50 BTCが生成され、それが…公開鍵を使ったスクリプトによってロックされています！scriptPubKey 内で「0411...」から始まるデータを見つけましょう。`,
      paragraph_three: `その公開鍵は、スクリプト命令 OP_PUSHBYTES と OP_CHECKSIG の間にあります。以下に貼り付けてください：`,
      placeholder: `ここにデータを貼り付けてください`,
      success: `それです！`,
    },
    derive_message_five: {
      nav_title: `次は署名の検証`,
      paragraph_one: `前の演習では、サトシがブロック #9 をマイニングして 50 BTC を得たことを確認しました。そのコインは、ハル・フィニーへの取引（ブロック #170 内）でインプットとして使用されました。彼は10 BTCをハル・フィニーの公開鍵に送り、おつりとして 40 BTC を自分に戻しています。サトシの秘密鍵は、その送金を承認するための署名を作るのに使われました。`,
      paragraph_two: `次はその署名をどう検証するかを学びましょう。でも、まだ何かが足りません…ハルへの送金を承認するためにサトシが署名した「メッセージ」とは一体何でしょう？`,
    },
    derive_message_six: {
      nav_title: `メッセージを導き出す`,
      heading: `トランザクションからメッセージを導く`,
      paragraph_one: `ブロックエクスプローラーのページを見るだけでも、ビットコインのトランザクションが複数の部分から成り立っていることが分かります。小さな数値だけの部分もあれば、大きなデータのかたまりもあります。ビットコインのプロトコルには、トランザクションから署名用メッセージを生成するための非常に厳密なアルゴリズムが定められています。`,
      paragraph_two: `その手順は<Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG" target="_blank" className="underline">こちら</Link>にまとめられています。便利なことに、<Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">ブロック #170 に含まれるこの正確なトランザクション</Link>を例として使用しています。`,
      paragraph_three: `まずは、トランザクション全体を構成する、未加工のトランザクションデータが必要です。<Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">このブロックエクスプローラー</Link>の "hex" API エンドポイントを使えば取得できます。データ全体（blob）をコピーして貼り付けてください。`,
      input_challenge_label: `トランザクションのデータを貼り付けてください`,
      success_message_line_one: `これは未加工のトランザクションで、各構成要素がラベル付けされています：`,
      success_message_line_two: `バージョン：`,
      success_message_line_three: `インプット数：`,
      success_message_line_four: `インプット #0 の元となったトランザクションのハッシュ：`,
      success_message_line_five: `資金提供元トランザクションにおけるインプット #0 のインデックス：`,
      success_message_line_six: `インプット #0 を使うための scriptSig：`,
      success_message_line_seven: `インプット #0 のシーケンス：`,
      success_message_line_eight: `アウトプット数：`,
      success_message_line_nine: `アウトプット #0 の金額（10 BTC または 1,000,000,000 satoshi）：`,
      success_message_line_ten: `アウトプット #0 の scriptPubKey（ハル・フィニーの公開鍵＋OP_CHECKSIG）：`,
      success_message_line_eleven: `アウトプット #1 の金額（40 BTC または 4,000,000,000 satoshi）：`,
      success_message_line_twelve: `アウトプット #1 の scriptPubKey（おつりとしてのサトシの公開鍵）：`,
      success_message_line_thirteen: `ロックタイム：`,
    },
    derive_message_seven: {
      nav_title: `署名用メッセージの構築`,
      paragraph_one: `署名の中に自分自身の署名を含めることはできないため、scriptSig は除去する必要があります。ビットコインのプロトコルでは、実際には scriptSig を、使用するアウトプットの scriptPubKey に置き換えます。`,
      paragraph_two: `前のステップで scriptPubKey はすでに見つけたので、それを最初の空欄に貼り付けてください。`,
      paragraph_three: {
        a: `トランザクションメッセージを完成させるために最後に必要なのは`,
        b: `です。これは次の章で詳しく説明しますが、今回はとりあえずメッセージの末尾に <span className="font-bold">01000000</span> を追加しましょう。`,
      },
  tooltip_one: {
    question: `sighash フラグとは？`,
    link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520sighash%2520flags%253F`,
    highlighted: `sighash タイプフラグ`,
  },
  success: `いいですね！署名用のメッセージを構築できました。`,
 },
  verify_signature_one: {
    title: `署名を検証する`,
    nav_title: `署名の検証`,
    heading: `ついにメッセージが揃った！`,
    paragraph_one: `私たちは今、サトシが自分の秘密鍵で作成した署名を持っています。そして彼の公開鍵もあります。では、署名をどう検証するかを学びましょう。その後、ヴァンダープールの署名も検証してみましょう。`,
  },
  verify_signature_two: {
    title: `署名を検証する`,
    nav_title: `メッセージをハッシュする`,
    heading: `トランザクションダイジェストをハッシュ化`,
    paragraph_one: `前のステップで作成したシリアライズされたトランザクションデータは、実は長すぎて ECDSA ではそのまま署名や検証ができません。`,
    paragraph_two: `大きなデータをもっと扱いやすい形に圧縮する方法を、私たちはすでに知っていますよね？そう、「ハッシュ」です。`,
    paragraph_three: {
      a: `ビットコインのプロトコルでは、署名可能なメッセージに圧縮するために`,
      b: `を使用します。`,
    },
    paragraph_four: `32バイトのハッシュを得たら、そのデータは整数として再解釈されます。そう、32バイトの整数です（とてつもなく大きな数ですね！）`,
    tooltip_one: {
      question: `なぜビットコインではすべてでダブルハッシュ（HASH256）が使われているの？`,
      link: `https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520does%2520everything%2520in%2520bitcoin%2520use%2520double%2520hash%2520%28HASH256%29%253F`,
      highlighted: `ダブルSHA256ダイジェスト`,
    },
    success: `よくできました！`,
  },
  verify_signature_three: {
    nav_title: `署名をデコードする`,
    heading: `署名をデコードしよう`,
    label_one: `R値を貼り付けてください`,
    label_two: `S値を貼り付けてください`,
    paragraph_one: `サトシの署名は、ASN.1のサブセットであるDERという形式でエンコードされています。`,
    paragraph_two: `ここから取り出すべき32バイトの数値が2つあります。それぞれR値とS値と呼ばれ、DERシーケンス内ではそれぞれバイト列「0220」で始まります。DERの全体を完全にデコードする代わりに、このプレフィックスを目印にR値とS値を探し、貼り付けてください。`,
    paragraph_three: `# サトシの署名（ハル・フィニーへの取引のscriptSigに含まれるもの、ブロック170）`,
  },
    verify_signature_four: {
      nav_title: `公開鍵をデコードする`,
      heading: `公開鍵をデコードしよう`,
      label_one: `x 座標を貼り付けてください`,
      label_two: `y 座標を貼り付けてください`,
      paragraph_one: `第4章で学んだように、公開鍵とは実は ECDSA 曲線上の点であり、x と y の値を持っています。先頭のバイト「04」は「非圧縮形式」を意味します（第4章で学んだ 02 や 03 は圧縮形式）。この最初の1バイトを取り除くと、残りのデータが 32バイトずつの x 座標と y 座標になります。コピーして貼り付けてください。`,
      paragraph_two: `# サトシの公開鍵（ブロック9のコインベーストランザクションの scriptPubKey より）`,
    },
    verify_signature_five: {
      title: `署名を検証する`,
      nav_title: `署名をテストする`,
      heading: `署名を検証しよう！`,
      success: `やりました！サトシの署名を検証できました！`,
      paragraph_one: `ここまでで、ECDSA の計算に必要なものはすべて揃いました。`,
      paragraph_two: `ECDSA署名の検証アルゴリズムの説明は、<Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">こちら</Link>や、<Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">こちら</Link>にあります。`,
      paragraph_three: `私たちは公開鍵の X 座標と Y 座標から、Group Element オブジェクトを作成しておきました。あとはあなたが ECDSA の署名検証関数 <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> を完成させましょう。有効な場合のみ True を返すようにしてください！`,
      paragraph_four: `サトシの署名が有効であることは確かです。2010年以来、すべてのビットコイン・フルノードが検証してきたからです。もしプログラムが True を返さない場合は、何かがおかしいということです。`,
      python: {
        paragraph_five_part_one: `ヒント：<span className="text-green">pow()</span>`,
        paragraph_five_part_two: `関数は、負の指数や法（modulus）を引数に取ることができます。詳しくは<Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">こちらのドキュメント</Link>をご覧ください。`,
      },
      javascript: {
        paragraph_five_part_one: `補助関数 <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">invert()</span> を用意しています。`,
        paragraph_five_part_two: `JavaScriptには標準で法付きの指数関数がないため、この関数を使ってください。`,
      },
    },
    validate_signature_one: {
      title: `署名を検証する`,
      nav_title: `メッセージを準備する`,
      heading: `ヴァンダープールのメッセージを検証用に整える`,
      paragraph_one: `ヴァンダープールは、<Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">ビットコインのメッセージ署名プロトコル</Link>を使ってこのパフォーマンスを行いました。計算にはこれまでと同じアルゴリズムを使いますが、データの準備方法が少し異なります。`,
      paragraph_two: `まず、彼のメッセージを以下のテンプレートに従って、バイト列の配列にエンコードする必要があります。`,
      paragraph_three: {
        pre_link: `その後、このデータを`,
        highlighted: `ダブルSHA-256ハッシュ`,
        question: `なぜビットコインではダブルハッシュを使うの？`,
        post_link: `して、そのハッシュを整数に変換します。<span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">encode_message()</span> 関数を完成させてください。返すべき値は32バイトの16進数（hex）です。`,
      },
      success: `よくできました！`,
    },
    validate_signature_two: {
      nav_title: `署名を準備する`,
      heading: `ヴァンダープールの署名を検証用に整える`,
      paragraph_one: `ヴァンダープールが使ったビットコインメッセージ署名プロトコルでは、署名は base64 で表されます。この base64 文字列を 65 バイトのシーケンスにデコードする必要があります。今のところ、先頭のメタデータ1バイトは無視してかまいません。残りのデータが、ステップ6で学んだ32バイトの r 値と s 値です。`,
      javascript: {
        paragraph_two: {
          post_link: `<span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">decode_sig()</span> 関数を完成させてください。`,
          return: `この関数は、[r, s] の値を BigInt 型の配列として返すべきです。`,
        },
      },
      python: {
        paragraph_two: {
          post_link: `<span className=" text-green">decode_sig()</span> 関数を完成させてください。`,
          return: `この関数は (r, s) の値をタプルとして返す必要があります。`,
        },
      },
      success: `よくできました！`,
    },
    validate_signature_three: {
      title: `署名を検証する`,
      nav_title: `ヴァンダープールは嘘をついたのか？`,
      heading: `で、ヴァンダープールは嘘つきなのか？！`,
      paragraph_one: `プログラムに必要なすべての要素を揃えて、ヴァンダープールの署名が本当にサトシの公開鍵に対応する秘密鍵から作られたものかを検証してみましょう。用意されたコードを使って、<span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> 関数を実行するために必要な引数をすべて入力してください。`,
      paragraph_two: `その後、プログラムを実行してヴァンダープールが嘘をついていたのか確認しましょう。ドラムロールをお願いします…`,
      success: `このメッセージは、検証に失敗したため、署名がサトシの公開鍵から作られたものではないことを示しています。`,
    },
    validate_signature_four: {
      title: `署名を検証する`,
      nav_title: `正しい鍵を探す`,
      heading: `ヴァンダープールはどうやって署名を作ったのか？`,
      paragraph_one: `ホロキャットが口をはさみ、BitReyの内通者からヴァンダープールがよく使っている公開鍵のリストを受け取ったと言います。彼はそのうちのどれかの鍵でメッセージに署名したのかもしれません。`,
      paragraph_two: `署名の検証に成功し、このメッセージに署名したヴァンダープールの公開鍵を特定できる鍵を入力してください。`,
      paragraph_three: `この中のどれかの鍵で、ヴァンダープールのメッセージと署名を検証できるでしょうか？`,
      success: `この公開鍵では署名の検証に成功しました。つまりこれはサトシではなく、ヴァンダープールの鍵によるものでした！`,
    },
  outro_one: {
    title: `アウトロ`,
    nav_title: `チャプター完了`,
    heading: `ヴァンダープールは嘘をついていた！`,
    paragraph_one: `あなたはビットコインで最も重要な教訓のひとつを学びました。「信じるな、検証せよ」。<br><br>そうすることで、ヴァンダープールがサトシの鍵を使ってメッセージに署名していなかったことを発見し、彼の家系の物語、信用、そして BitRey の信頼性にも大きな疑いの目が向けられることになりました。<br><br>あとはあの曲さえ頭から離れてくれれば完璧なんですがね。`,
  },
  resources: {
    derive_message_three: {
      op_pushdata_heading: `OP_PUSHDATA`,
      op_pushdata_paragraph_one: `ビットコインスクリプトにおける OP_PUSHDATA は、任意のデータをブロックチェーンに挿入するための重要な役割を担っています。実際には、さまざまなサイズのデータ要素をスタックにプッシュできる一連のオペコードのカテゴリであり、ビットコインのスクリプト言語をより柔軟にしています。このオペコードは、スマートコントラクト機能やカスタムトランザクションタイプの実装を可能にするうえで特に重要です。<br><br>今回の例では、71バイトのデータをスタックにプッシュすることになっていると分かっているので、このオペコードが hex（16進数）でどのように表現されるか考えてみてください。いくつかの OP_CODE についての詳細は <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">こちら</Link> にあります。`,
    },
derive_message_four: {
  op_checksig_heading: `OP_CHECKSIG`,
  op_checksig_paragraph_one: `ビットコインスクリプトにおける OP_CHECKSIG は、正しい秘密鍵だけが特定のトランザクションを使用できるようにするための、極めて重要な命令です。ほぼすべてのビットコインスクリプトには OP_CHECKSIG が含まれており、それによってビットコインを使おうとする人が、指定された鍵で正しく署名できることを検証します。こうした OP_CODE の詳細については、<Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">こちら</Link>をご覧ください。`,
},
derive_message_six: {
  transaction_parts_heading: `トランザクションの構成要素`,
  transaction_parts_one: `バージョン：この値はトランザクションの構造を定義するバージョン番号です。`,
  transaction_parts_two: `インプット数：このトランザクションに含まれるインプットの数です。`,
  transaction_parts_three: `インプット #0 の TXID：インプット #0 が使用する元のトランザクションのハッシュ値です。`,
  transaction_parts_four: `インプット #0 のインデックス：上記の TXID に対応するトランザクション内で、使用されるアウトプットのインデックス番号です。`,
  transaction_parts_five: `scriptSig：指定されたアウトプットを使うことを承認するためのデータです。通常は署名で構成されます。`,
  transaction_parts_six: `インプット #0 のシーケンス：このインプットのシーケンス番号です。`,
  transaction_parts_seven: `アウトプット数：このトランザクションが持つアウトプットの数です。`,
  transaction_parts_eight: `アウトプット #0 の金額：最初のアウトプットで送金される金額です。リトルエンディアン整数で表されます。`,
  transaction_parts_nine: `アウトプット #0 の scriptPubKey：このスクリプトは資金を使うために何が必要かを定義します。通常は公開鍵やチャレンジ形式のオペコードを含みます。`,
  transaction_parts_ten: `アウトプット #1 の金額：2つ目のアウトプットで送金される金額です。リトルエンディアン整数で表されます。`,
  transaction_parts_eleven: `アウトプット #1 の scriptPubKey：このスクリプトは資金を使うために何が必要かを定義します。通常は公開鍵やチャレンジ形式のオペコードを含みます。`,
  transaction_parts_twelve: `ロックタイム：このトランザクションが有効になるまでのブロック高（または時間）を指定します。`,
},
derive_message_seven: {
  sighash_type_flag_heading: `SigHash タイプフラグ`,
  sighash_type_flag_paragraph_one: `SigHash フラグは、どの部分のトランザクションデータが秘密鍵によって署名されるかを定義するビットコインの仕組みです。簡単に言えば、署名者がどのデータに対してコミットするのか、その範囲を決めるものです。SigHash フラグは各署名に1バイト付加され、同じトランザクション内のインプットごとに異なる場合もあります。いくつかの種類の SigHash フラグについては <Link href="https://river.com/learn/terms/s/sighash-flag" target="_blank" className="underline">こちら</Link>をご覧ください。`,
},
verify_signature_two: {
  tip_one: `JavaScript のヒント：16進文字列をバイト配列に変換するには <span className="p-1 font-mono bg-[#0000004D] m-1">Buffer.from(someString, 'hex');</span> を使います。`,
  signature_verification_heading: `署名検証`,
  signature_verification_paragraph_one: `署名検証とは、ある当事者が秘密の数値（秘密鍵）を知っている場合にのみ生成できるデータ（署名）を提供する、数学的アルゴリズムです。検証では、署名・公開鍵・メッセージを照合し、アルゴリズムの結果が TRUE になれば署名は本物と判断されます。`,
},

verify_signature_three: {
  signature_encoding_heading: `署名のエンコーディング`,
  signature_encoding_paragraph_one: `DER（Distinguished Encoding Rules）署名は、ビットコインで ECDSA 署名をエンコードするためのフォーマットです。ECDSA 署名は秘密鍵と署名対象メッセージのハッシュから生成され、32 バイトずつの 2 つの数値（r, s）で構成されます。詳細は <Link href="https://technicaldifficulties.io/2020/07/22/bip-66-unpacking-der-signatures/" target="_blank" className="underline">こちら</Link> を参照してください。`,
},

verify_signature_four: {
  eliptic_curve_heading: `楕円曲線電子署名アルゴリズム（ECDSA）`,
  eliptic_curve_paragraph_one: `ECDSA は、資金が正当な所有者によってのみ使用されることを保証するためにビットコインで採用されている暗号アルゴリズムです。公開鍵は秘密鍵に楕円曲線乗算を施して導出できますが、逆に公開鍵から秘密鍵を導くのは計算的に不可能です。この一方向性がビットコインのセキュリティの要となっています。`,
  public_private_key_heading: `公開鍵と秘密鍵`,
  public_private_key_paragraph_one: `ビットコインでは鍵ペアを用いて取引の安全性を確保します。秘密鍵は秘匿され、トランザクションの署名やアドレスの所有証明に使われます。秘密鍵から派生する公開鍵は共有可能で、秘密鍵を明かすことなく、署名が秘密鍵の所有者によって行われたことを検証するために使用されます。`,
},

verify_signature_five: {
  finite_field_arithmetic_heading: `有限体演算`,
  finite_field_arithmetic_paragraph_one: `ECDSA で用いられる演算は、一定範囲内（有限体）の数を対象に行います。加算・減算・乗算・モジュラ逆数の計算などを、体のサイズを法として実行することが、ビットコインの楕円曲線計算に不可欠です。`,
  ge_and_fe_heading: `群要素（GE）と体要素（FE）`,
  ge_and_fe_paragraph_one: `楕円曲線暗号では、群要素（GE）は通常曲線上の点を指します。このチャレンジでは GE は特定の x, y 座標を持つ点を意味します。体要素（FE）は有限体の中で使用される数で、体の制約下での演算に用いられます。`,
  modular_inverse_heading: `モジュラ逆数`,
  modular_inverse_paragraph_one: `数 a の法 m におけるモジュラ逆数 b とは、(a * b) % m = 1 を満たす数です。モジュラ逆数の計算は ECDSA 署名検証の重要ステップであり、検証過程における u1 と u2 の計算に使われます。`,
},
validate_signature_one: {
  message_verification_heading: `メッセージ検証の重要性`,
  message_verification_paragraph_one: `メッセージ検証は、ビットコインエコシステム内の通信のセキュリティを高めます。これにより、メッセージの真正性と完全性を検証できるため、ピアツーピア取引やスマートコントラクトにおける当事者間の通信など、信頼と検証が不可欠な場面で役立ちます。さらに、メッセージ検証は、身元確認や特定のビットコインアドレスの所有証明といった様々な応用の基礎となります。暗号学的な保証を追加することで、ビットコインネットワークのトラストレスかつ分散型の性質を強化します。`,
},

validate_signature_two: {
  base64_encoding_heading: `Base64 エンコーディング`,
  base64_encoding_paragraph_one: `Base64 は基本的なバイト → テキストのエンコーディング方式で、バイト列への変換やバイト列からテキストへの変換を行う際に、URL パスやクエリパラメータとの衝突を避けることができます。Base58 と異なり、Base64 ではユーザーがコピーしたり読み上げたりする際に混同しやすい文字（ゼロ、大文字の O、大文字の I、小文字の l）が含まれているため注意が必要です。`,
},

validate_signature_three: {
  signing_and_ownership_heading: `メッセージ署名と所有権`,
  signing_and_ownership_paragraph_one: `ビットコインの擬似的な匿名性により、私たちが証明できる範囲には限りがあります。なぜなら鍵の所有者が署名を拒否したり、意図的に誤った鍵で署名したりすることが可能だからです。したがって、私たちが唯一証明できるのは、無効な署名を生成した鍵は、そのメッセージに正しく署名できる鍵とは一致しないということだけです。`,
},

validate_signature_four: {
  one_for_one_heading: `一対一の関係`,
  one_for_one_paragraph_one: `ECDSA の信頼性とセキュリティを確保するためには、秘密鍵で作成された署名は、対応する公開鍵でのみ検証可能である必要があります。異なる秘密鍵が同じ公開鍵や署名を生成できるようであれば、ECDSA のセキュリティと信頼性は損なわれてしまいます。したがって、メッセージに署名できた公開鍵こそが、そのビットコインを所有していると判断できます。`,
      },
    },
  },

chapter_six: {
  title: `鍵の保有者`,
  paragraph_one: `ああっ！ヴァンダープールは、自分の詐欺的な主張を暴露したあなたを捕らえようとしています。ホロキャットが袋から飛び出したにもかかわらず、多くの怯えた人々は、ヴァンダープールが自分自身や家族、その先祖にまつわって作り上げた神話にすがり続けています。時代は不安定で、人々はヒーローを必要としているのです。残念ながら、多くの人にとって彼が唯一の希望なのです。`,

  intro_one: {
    title: `イントロ`,
    nav_title: `それって本当にサトシ？`,
    paragraph_one: `—サトシ・ナカモト：「よくやった。これで世界は、ヴァンダープールが詐欺師だと自分の目で確かめられる。まだ信じていない人も、我々の任務が終わる頃には信じるだろう。」`,
    paragraph_two: `あなたはふと立ち止まり、これまでのすべてのメッセージが「サトシ・ナカモト」の署名で送られていたことに気づきます。ビットコインの理念に共感する誰かが使っている偽名だろうと、あなたは当然のように思っていました。本物のサトシ・ナカモトなわけがない。でも……ついに、あなたは聞いてみる決心をします。`,
    paragraph_three: `—「こんなこと聞いたらバカにされるかもしれないけど……あなたって、本物のサトシなの？」`,
  },

  intro_two: {
    title: `イントロ`,
    nav_title: `ミカ3000への支払い`,
    paragraph_one: `—ホロキャット：「それが唯一のおバカ発言だと思ってるなら、まだまだ見込みがあるニャン♪」`,
    paragraph_two: `—サトシ・ナカモト：「ビットコインは何年も前に、その創造者の手を離れている。たとえヴァンダープールでも私でも、あるいはその子孫だったとしても、それは重要ではない。ビットコインはコミュニティによって定義され、サトシを含む個人や組織に乗っ取られることはできない。これを証明することこそが、本当の戦いなんだ。勝手に頼んでしまったけど、君の友達、変わり者のフリーライターに連絡しておいたよ。」`,
    paragraph_three: `—えっ、何をしたって？`,
    paragraph_four: `—ピコッ。`,
    paragraph_five: `—ホロキャット：「私の鼻をポチッとするの、忘れニャいでね〜」`,
    paragraph_six: `—ミカ3000：「度胸はあるみたいだけど、それだけじゃ足りない。キミが見つけたことは、物語の序章にすぎない。この先を知るには、ヴァンダープールの私有島に行く必要がある。資金もそれなりに必要になる。以前、一緒にセットアップしたマルチシグウォレット、覚えてる？キミ、まだ私の鍵の1つを持ってるよね。──資金を引き出すのを手伝ってほしい、協力してくれる？」`,
  },
in_out_one: {
  title: `入出力の基本`,
  nav_title: `未使用のUTXO`,
  paragraph_one: `ミカ3000はヴァンダープールの私有島に行くための機材を買うのに、1 BTC を必要としています。あなたはチャプター3で得たマイニング報酬から1 BTCを送ることに決めました。その報酬は、チャプター4で作成したアドレスにマイニングプールから送られています。`,
  paragraph_two: `あなたはビットコインのフルノードを開き、ブロックチェーン上の自分の資金の所在を確認するためにコマンドを実行します。`,
  paragraph_three: `これが「未使用トランザクション出力（UTXO）」です。チャプター4で見覚えのある圧縮公開鍵ハッシュやアドレスが確認できるかもしれません。金額も正しそうです：1.61 BTC。`,
},

in_out_two: {
  title: `入出力の基本`,
  nav_title: `送金先アドレス`,
  paragraph_one: `ミカ3000は、あなたの1 BTCの協力金を受け取るためのアドレスを教えてくれます：`,
  paragraph_two: `あれ？このアドレスは自分のものよりずいぶん長いぞ。なぜだろう…`,
  paragraph_three: `あなたの1.61 BTCのうち1 BTCをこのアドレスに送るトランザクションを作成・署名する必要があります。チャプター5ではサトシのトランザクション構造を見ましたが、今回は少し違います。現在ではより新しいトランザクション形式が存在し、Segregated Witness（SegWit／セグウィット）というプロトコルを使ってトランザクションバージョンを2に設定します。`,
},

in_out_three: {
  title: `入出力の基本`,
  nav_title: `トランザクションのステップ`,
  paragraph_one: `SegWit トランザクションは、従来のトランザクションとほぼ同じしくみで動作します。バージョンやロックタイムといったグローバルな値があり、使用したいUTXO（入力）の配列と、新しく作成するUTXO（出力）の配列があります。そして入力ごとに1つずつ、署名やスクリプトを含む「witness（証拠情報）」の配列もあります。これは scriptSig の代わりに使われます。`,
  paragraph_two: `これらのすべての要素におけるメッセージシリアライズの仕様は、<Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">こちら</Link> および <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline">こちら</Link> に記載されています。`,
},
in_out_four: {
  normal: {
    title: `入出力の基本`,
    nav_title: `Input クラス`,
    heading: `Input クラスの実装を見てみよう`,
    paragraph_one: `ここでは、<span className="font-bold">Input</span> クラスと <span className="font-bold">Outpoint</span>（"output" ではありません）クラスのコードを扱います。`,
    paragraph_two: `入力（Input）は、未使用トランザクション出力（UTXO）から取得されます。<span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span> メソッドに出力の情報を渡すと、Input クラスのインスタンスが生成されます：`,
    paragraph_three: `最初の2つの引数は以下のとおりです：`,
    paragraph_four: `1. <span className="font-bold">txid：</span>その出力を作成したトランザクションのID`,
    paragraph_five: `2. <span className="font-bold">vout：</span>その出力がトランザクション内で何番目かを示すインデックス`,
    paragraph_six: `この2つの情報を組み合わせたものが <span className="font-bold">Outpoint</span> です。前の演習で <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">listunspent</span> コマンドを実行した際に得られた txid と vout の値を最終的にここに使うことになります。`,
    paragraph_seven: `次の2つの引数は、使用したい出力の金額（サトシ単位）と、scriptcode と呼ばれるものです。これらのデータは後で必要になるため、今は空のバイト配列を仮で使っておきます。`,
    paragraph_eight: {
      a: `ビットコインではハッシュ値は`,
      b: {
        text: `逆順に扱われます`,
        question: `なぜビットコインではハッシュを逆順にするの？`,
        href: `https://chat.bitcoinsearch.xyz/?author=holocat&question=why%2520are%2520hashes%2520reversed%2520in%2520bitcoin`,
      },
      c: `が、それはユーザーに提示するときや入力させるときに限られます。16進数で表されたハッシュをバイト列として保存・送信する際には、バイト順を反転させる必要があります。`,
    },
    paragraph_nine: `この処理は、<span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span> メソッド内で txid を扱う部分に見られます。`,
    paragraph_ten: `また、トランザクションをネットワークでやり取りしたりブロックに記録したりするには、仕様に従ってバイト配列を返す <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">serialize()</span> メソッドが必要です。`,
    heading_three: `Outpoint`,
    table_one: {
      heading: {
        one: `説明`,
        two: `名前`,
        three: `タイプ`,
        four: `サイズ`,
      },
      row_one: {
        column: {
          one: `使用する元のトランザクションのハッシュ`,
          two: `txid`,
          three: `bytes`,
          four: `32`,
        },
      },
      row_two: {
        column: {
          one: `出力配列内で使用する出力の位置`,
          two: `index`,
          three: `int`,
          four: `4`,
        },
      },
    },
    heading_four: `Input`,
    table_two: {
      row_one: {
        column: {
          one: `使用する txid と出力インデックス`,
          two: `outpoint`,
          three: `bytes`,
          four: `36`,
        },
      },
      row_two: {
        column: {
          one: `ScriptSig の長さ（SegWitでは常に0）`,
          two: `length`,
          three: `int`,
          four: `1`,
        },
      },
      row_three: {
        column: {
          one: `SegWit では常に空`,
          two: `script`,
          three: `bytes`,
          four: `0`,
        },
      },
      row_four: {
        column: {
          one: `デフォルト値は 0xffffffff（相対タイムロックにも使用可能）`,
          two: `sequence`,
          three: `int`,
          four: `4`,
        },
      },
    },
    paragraph_eleven: {
      a: `注意：ビットコインでは整数は `,
      b: {
        text: `リトルエンディアン`,
        question: `エンディアンって何？`,
        href: `https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520endianness%253F`,
      },
    },
    success: `Input クラスはうまく実装できました。お見事！`,
  },
hard: {
  title: `入出力の基本`,
  nav_title: `Input クラスを構築する`,
  heading: `Input クラスの実装を完成させよう`,
  paragraph_one: `このクラスには、以下のメソッドを実装する必要があります：`,
  paragraph_two: `最初の2つの引数は、使用したい出力を含むトランザクションのID（txid）と、その出力のインデックス（vout）です。`,
  paragraph_three: `最終的には、上で listunspent コマンドから取得した txid と vout をこのメソッドに渡すことになります。なお、ビットコインにおけるハッシュはリトルエンディアン（little-endian）で表現されるため、txid の文字列のバイト順は反転させる必要があります！`,
  paragraph_four: `次の2つの引数は、使用したい出力の金額（サトシ単位）と scriptcode と呼ばれるものです。これらはステップ6までは使わないので、今は Input クラスのプロパティとして保持しておくだけでかまいません。`,
  paragraph_five: `さらに、仕様に従ってバイト配列を返す <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドも必要です：`,
  heading_two: `Outpoint`,
  table_one: {
    heading: {
      one: `説明`,
      two: `名前`,
      three: `タイプ`,
      four: `サイズ`,
    },
    row_one: {
      column: {
        one: `使用元のトランザクションのハッシュ`,
        two: `txid`,
        three: `bytes`,
        four: `32`,
      },
    },
    row_two: {
      column: {
        one: `そのトランザクションの出力配列内における位置`,
        two: `index`,
        three: `int`,
        four: `4`,
      },
    },
  },
  heading_three: `Input`,
  table_two: {
    row_one: {
      column: {
        one: `使用する txid と出力インデックス`,
        two: `outpoint`,
        three: `bytes`,
        four: `36`,
      },
    },
    row_two: {
      column: {
        one: `ScriptSig の長さ（SegWitでは常に0）`,
        two: `length`,
        three: `int`,
        four: `1`,
      },
    },
    row_three: {
      column: {
        one: `SegWit では常に空`,
        two: `script`,
        three: `bytes`,
        four: `0`,
      },
    },
    row_four: {
      column: {
        one: `デフォルト値は 0xffffffff（相対タイムロックにも使用可能）`,
        two: `sequence`,
        three: `int`,
        four: `4`,
      },
    },
  },
  success: `Input クラスはうまく実装できました。素晴らしい！`,
    },
  },
in_out_five: {
  title: `入出力の基本`,
  nav_title: `Output クラスを構築する`,
  heading: `Output クラスの実装を完成させよう`,
  paragraph_one: `Input クラスと同様に、ユーザーが入力したデータから Output オブジェクトを作成する <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">from_options()</span> メソッドが必要です：`,
  paragraph_two: `このメソッドは、ビットコインアドレス（たとえばミカ3000のアドレス）を表す文字列と、サトシ単位の金額（整数）を受け取ります。1 BTC = 100000000 サトシ であることを忘れずに！アドレスは bech32 ライブラリを使ってデコードし、バージョンとデータ成分を取得する必要があります。
    また、このクラスには、仕様に従ってバイト配列を返す <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドも必要です：`,
  heading_two: `Output`,
  table: {
    heading: {
      one: `説明`,
      two: `名前`,
      three: `タイプ`,
      four: `サイズ`,
    },
    row_one: {
      column: {
        one: `送信するサトシの数量`,
        two: `value`,
        three: `bytes`,
        four: `8`,
      },
    },
    row_two: {
      column: {
        one: `この後に続くスクリプト（witness program）の全体の長さ`,
        two: `length`,
        three: `int`,
        four: `1`,
      },
    },
    row_three: {
      column: {
        one: `Segregated Witness のバージョン。bech32アドレスから取得`,
        two: `version`,
        three: `int`,
        four: `1`,
      },
    },
    row_four: {
      column: {
        one: `この後に続く witness program データの長さ`,
        two: `length`,
        three: `int`,
        four: `1`,
      },
    },
    row_five: {
      column: {
        one: `bech32アドレスから派生したデータコンポーネント`,
        two: `index`,
        three: `bytes`,
        four: `(可変)`,
      },
    },
  },
  paragraph_three: `お忘れなく：ビットコインにおける整数はリトルエンディアン形式でシリアライズされます！`,
  success: `Output クラスはうまく実装できました。素晴らしい！`,
}
put_it_together_one: {
  title: `すべてを組み合わせる`,
  normal: {
    title: `すべてを組み合わせる`,
    nav_title: `トランザクションダイジェストを構築`,
    heading: `トランザクションダイジェスト`,
    paragraph_one: `第5章で学んだとおり、トランザクションに署名するには、まずトランザクションデータを並べ替えてハッシュ化し、署名アルゴリズムに渡すメッセージを作成する必要があります。今回は Segregated Witness を採用しているため、<Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link> で定義されている改良版のトランザクションダイジェスト・アルゴリズムを実装しなければなりません。`,
    paragraph_two: `各インプットにはそれぞれ専用の署名が必要です。そのため、ダイジェスト計算の一部はキャッシュして再利用できますが、どのインプットに署名するかによって変わる部分もあります。32 バイトの署名メッセージを生成する <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> メソッドを完成させましょう。`,
    list_heading: `注意事項：`,
    list_one: `「ダブル SHA-256」(dSHA256) ＝ sha256(sha256(data))`,
    list_two: `value は、署名対象インプットが消費する出力のサトシ額です。ステップ2で Input クラスに保存しておきましたね。`,
    list_three: `scriptcode は評価対象となるビットコインスクリプトそのものです。これもステップ2で Input クラスに追加しました。`,
    list_four: `整数はすべてリトルエンディアンでエンコード！`,
    paragraph_three: `詳細は次のセクションで掘り下げますが、あなたの P2WPKH アドレスを使って送金する場合、scriptcode は次のようになります：`,
    paragraph_four: `…これをデコードすると、以下のビットコインスクリプトになります。`,
    paragraph_five: `scriptcode について詳しくは <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link> を参照してください。`,
    paragraph_six: `署名前のトランザクションの「プレイメージ（preimage）」は、次の項目をシリアライズしたものです：`,
    headings: {
      item_one: `説明`,
      item_two: `名前`,
      item_three: `タイプ`,
      item_four: `サイズ`,
    },
    table: {
      row_one: {
        item_one: `トランザクションバージョン（デフォルト 2）`,
        item_two: `version`,
        item_three: `int`,
        item_four: `4`,
      },
      row_two: {
        item_one: `すべてのインプットの outpoint をシリアライズし dSHA256`,
        item_two: `outpoints`,
        item_three: `bytes`,
        item_four: `32`,
      },
      row_three: {
        item_one: `すべてのインプットの sequence 値をシリアライズし dSHA256`,
        item_two: `sequences`,
        item_three: `bytes`,
        item_four: `32`,
      },
      row_four: {
        item_one: `署名対象インプットの outpoint（シリアライズ済み）`,
        item_two: `outpoint`,
        item_three: `bytes`,
        item_four: `36`,
      },
      row_five: {
        item_one: `消費される出力スクリプト（scriptcode）`,
        item_two: `scriptcode`,
        item_three: `bytes`,
        item_four: `(可変)`,
      },
      row_six: {
        item_one: `署名対象インプットが消費する出力のサトシ額`,
        item_two: `value`,
        item_three: `int`,
        item_four: `8`,
      },
      row_seven: {
        item_one: `署名対象インプットの sequence 値`,
        item_two: `sequence`,
        item_three: `int`,
        item_four: `4`,
      },
      row_eight: {
        item_one: `すべてのアウトプットをシリアライズし dSHA256`,
        item_two: `outputs`,
        item_three: `bytes`,
        item_four: `32`,
      },
      row_nine: {
        item_one: `トランザクションの locktime（デフォルト 0）`,
        item_two: `locktime`,
        item_three: `int`,
        item_four: `4`,
      },
      row_ten: {
        item_one: `署名ハッシュタイプ（1 = ALL）`,
        item_two: `sighash`,
        item_three: `int`,
        item_four: `4`,
      },
    },
    paragraph_seven: `最後に、署名に用いるメッセージは、このシリアライズ済みデータ全体のダブル SHA-256 ハッシュです。`,
    success: `digest() メソッドは正しく実装されています。お見事！`,
  },
hard: {
  title: `すべてを組み合わせる`,
  nav_title: `Witnessクラスを構築`,
  heading: `Witnessクラスの実装を完成させよう`,
  paragraph_one: `このクラスには、バイト配列を受け取り、それをwitness stackに追加するメソッドを実装する必要があります。`,
  paragraph_two: `また、witness stackをシリアライズして返す <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドも必要です。`,
  subheading_one: `witness stack`,
  headings: {
    item_one: `説明`,
    item_two: `名前`,
    item_three: `タイプ`,
    item_four: `サイズ`,
  },
  table_one: {
    row_one: {
      item_one: `witness stack内のアイテム数`,
      item_two: `count`,
      item_three: `int`,
      item_four: `1`,
    },
    row_two: {
      item_one: `シリアライズされたstackアイテム`,
      item_two: `items`,
      item_three: `(items)`,
      item_four: `(可変)`,
    },
  },
  subheading_two: `witness stackのアイテム`,
  table_two: {
    row_one: {
      item_one: `この後に続くstackアイテムの全体の長さ`,
      item_two: `length`,
      item_three: `int`,
      item_four: `1`,
    },
    row_two: {
      item_one: `stackアイテムの未加工のバイト列`,
      item_two: `data`,
      item_three: `bytes`,
      item_four: `(可変)`,
    },
  },
  success: `Witnessクラスは正しく実装されています。お見事！`,
    },
  },
put_it_together_two: {
  normal: {
    title: `すべてを組み合わせる`,
    nav_title: `Witnessクラスを構築`,
    heading: `署名してWitnessを埋めよう！`,
    paragraph_one: `前章では、ECDSA署名の検証に必要なコードをいくつか書きました。今回は、有効な署名を生成するために、それらのコードを少し書き換えて使用します。`,
    paragraph_two: `この演習では、ECDSA署名アルゴリズムの基礎となる数学の一部を実装します。アルゴリズムの詳細については、以下の資料を参照してください：`,
    paragraph_three: `・<Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">Elliptic Curve Digital Signature Algorithm</Link> のWikipediaページ`,
    paragraph_four: `・<Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">Standards for Efficient Cryptography 1（SEC 1）</Link>：44ページ、セクション4.1.3`,
    heading_one: `ステップ 1`,
    paragraph_five: `Transactionクラスには <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> というメソッドがあります。このメソッドは、インプットのインデックス番号と秘密鍵（32バイトの整数。JavaScriptではBigInt）を受け取ります。これを完成させて、対象インプットのメッセージダイジェストを生成しましょう。前のステップで作成した <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">digest()</span> メソッドを使ってから、ECDSA署名（32バイトの整数である <span className="italic">r</span> と <span className="italic">s</span>）を返してください。`,
    heading_two: `ステップ 2`,
    paragraph_six: `Bitcoinプロトコルでは、署名アルゴリズムにおいてもう1つ条件があります。<span className="italic">s</span> 値は「低い（low）」必要があり、これは楕円曲線のオーダーの半分未満であることを意味します。<span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature()</span> にこのチェックを追加してください。`,
    paragraph_seven: `詳しくは <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link> を参照。`,
    heading_three: `ステップ 3`,
    paragraph_eight: `<span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">sign_input(index, key)</span> メソッドを完成させ、<span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> を呼び出すようにしてください。戻り値である <span className="italic">r</span> と <span className="italic">s</span> は、あらかじめ用意されたDERエンコーディングアルゴリズムで符号化する必要があります。`,
    heading_four: `ステップ 4`,
    paragraph_nine: `Bitcoinでは、DER署名の末尾に1バイトを追加する必要があります。このバイトは「sighash type」を示すもので、今回は常に <span className="p-1 text-base font-mono bg-[#0000004D] m-1">0x01</span>（SIGHASH ALLを意味）を使用します。`,
    heading_five: `ステップ 5`,
    paragraph_ten: `最後のステップでは、2つのスタックアイテム（先ほど作成したDER署名データと、圧縮された公開鍵）を含むWitnessオブジェクトを作成します。署名を先に、公開鍵を後にプッシュしてください。`,
    paragraph_eleven: `このwitness stackオブジェクトを、Transactionオブジェクトのwitnesses配列に追加しましょう。`,
    success: `compute_input_signature() および sign_input() メソッドは正しく実装されています。素晴らしい！`,
  },
hard: {
  title: `すべてを組み合わせる`,
  nav_title: `トランザクションをシリアライズ`,
  heading: `Transactionクラスの実装を完成させよう`,
  paragraph_one: `このクラスには、locktime と version のグローバルプロパティに加えて、inputs、outputs、witnessスタックの配列が必要です。`,
  paragraph_two: `また、ビットコインのP2Pネットワーク上でブロードキャストできる形式で、トランザクション全体をバイト列として出力する <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドも実装する必要があります。`,
  headings: {
    item_one: `説明`,
    item_two: `名前`,
    item_three: `タイプ`,
    item_four: `サイズ`,
  },
  table: {
    row_one: {
      item_one: `現在の標準では 2 が使われる`,
      item_two: `version`,
      item_three: `int`,
      item_four: `4`,
    },
    row_two: {
      item_one: `SegWit対応の場合は必ず0x0001`,
      item_two: `flags`,
      item_three: `bytes`,
      item_four: `2`,
    },
    row_three: {
      item_one: `インプットの数`,
      item_two: `in count`,
      item_three: `int`,
      item_four: `1`,
    },
    row_four: {
      item_one: `すべてのトランザクションインプット（シリアライズ済み）`,
      item_two: `inputs`,
      item_three: `Inputs[]`,
      item_four: `(可変)`,
    },
    row_five: {
      item_one: `アウトプットの数`,
      item_two: `out count`,
      item_three: `int`,
      item_four: `1`,
    },
    row_six: {
      item_one: `すべてのトランザクションアウトプット（シリアライズ済み）`,
      item_two: `outputs`,
      item_three: `Outputs[]`,
      item_four: `(可変)`,
    },
    row_seven: {
      item_one: `すべてのwitnessスタック（シリアライズ済み）`,
      item_two: `witness`,
      item_three: `Witnesses[]`,
      item_four: `(可変)`,
    },
    row_eight: {
      item_one: `0に設定するとfinal（確定）を示す`,
      item_two: `locktime`,
      item_three: `int`,
      item_four: `4`,
    },
  },
  paragraph_three: `witnessesには「count」値が存在しない点に注意してください。これは、witnessスタックの数がインプットの数と常に完全に一致していなければならないためです。`,
  success: `serialize() メソッドは正しく実装されています。お見事！`,
   },
  },
put_it_together_three: {
  normal: {
    title: `すべてを組み合わせよう`,
    nav_title: `トランザクションに署名`,
    heading: `Transactionクラスの実装を完成させよう`,
    paragraph_one: `トランザクションを完成させるには、ビットコインのP2Pネットワーク上でブロードキャストできる形式でトランザクション全体をバイト列として出力する <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドが必要です。`,
    paragraph_two: `スクリプトでは、Transactionオブジェクトを作成し、署名を行います。このトランザクションには1つのインプット（<span className="underline">Inputクラス</span>で指定したUTXO）と、2つのアウトプットが含まれます：`,
    bullet_one: `ミカ3000 に 100,000,000 satoshi（1 BTC）を送る → アドレス: bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj`,
    bullet_two: `あなた自身に 61,000,000 satoshi（おつり）を戻す → アドレス: bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs`,
    paragraph_three: `インプットとアウトプットは分かっています。では、もうトランザクションを作って署名していいのでしょうか？まだです。1.61 BTC のインプットがあり、1 BTC のアウトプットがあります... 残りの 0.61 BTC はどこへ？これは「おつり」として自分のアドレスに返す必要があります。`,
    paragraph_four: `witnesses には「count」フィールドが存在しないことに注意してください。これは、witnessスタックの数がインプットの数と常に一致していなければならないためです。`,
    paragraph_five: `でも、ちょっと待ってください！「手数料」も必要です。おつりから少しだけ差し引いて、マイニングプールにインセンティブを与え、ブロックに含めてもらいましょう。今回はおつりを 61,000,000 satoshi に設定します。`,
    paragraph_six: `ついにすべて完了です。スクリプトの最後では、<span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> メソッドの戻り値を返しましょう。これは署名済みの有効なビットコイントランザクションであり、ミカ3000 に送金するためにネットワークにブロードキャストできます！`,
    headings: {
      item_one: `説明`,
      item_two: `名前`,
      item_three: `タイプ`,
      item_four: `サイズ`,
    },
    table: {
      row_one: {
        item_one: `現在の標準では 2 が使われる`,
        item_two: `version`,
        item_three: `int`,
        item_four: `4`,
      },
      row_two: {
        item_one: `SegWit対応の場合は必ず0x0001`,
        item_two: `flags`,
        item_three: `bytes`,
        item_four: `2`,
      },
      row_three: {
        item_one: `インプットの数`,
        item_two: `in count`,
        item_three: `int`,
        item_four: `1`,
      },
      row_four: {
        item_one: `すべてのトランザクションインプット（シリアライズ済み）`,
        item_two: `inputs`,
        item_three: `Inputs[]`,
        item_four: `(可変)`,
      },
      row_five: {
        item_one: `アウトプットの数`,
        item_two: `out count`,
        item_three: `int`,
        item_four: `1`,
      },
      row_six: {
        item_one: `すべてのトランザクションアウトプット（シリアライズ済み）`,
        item_two: `outputs`,
        item_three: `Outputs[]`,
        item_four: `(可変)`,
      },
      row_seven: {
        item_one: `すべてのwitnessスタック（シリアライズ済み）`,
        item_two: `witness`,
        item_three: `Witnesses[]`,
        item_four: `(可変)`,
      },
      row_eight: {
        item_one: `0に設定するとfinal（確定）を示す`,
        item_two: `locktime`,
        item_three: `int`,
        item_four: `4`,
      },
    },
  bullet_one: `ミカ3000に 100,000,000 satoshi（1 BTC）を送る → アドレス: bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj`,
  bullet_two: `あなたに 61,000,000 satoshi（おつり）を返す → アドレス: bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs`, 
    success: `やりましたね！トランザクションが完成しました！`,
  },
hard: {
  title: `すべてを組み合わせる`,
  nav_title: `トランザクションダイジェストの構築`,
  heading: `トランザクションダイジェスト`,
  paragraph_one: `第5章では、トランザクションに署名するには、まずそのデータを並べ替えてハッシュ化し、署名アルゴリズムへの入力となるメッセージを作成する必要があると学びました。現在は Segregated Witness（SegWit）を使っているため、<Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link> で定義された、新しいトランザクションダイジェストアルゴリズムを実装する必要があります。`,
  paragraph_two: `すべてのトランザクション入力には、それぞれ固有の署名が必要であることを思い出してください。そのため、ダイジェストアルゴリズムの一部の要素はキャッシュして再利用できますが、署名対象のインプットによって変わる部分もあります。入力に署名するための32バイトのメッセージを計算する <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> メソッドを完成させましょう。`,
  list_heading: `補足：`,
  list_one: `"Double SHA-256"（または dSHA256）= sha256(sha256(data))`,
  list_two: `value は、使用しているUTXOの出力に含まれるsatoshiの量を表します。これはステップ2で Input クラスに追加し、今までそのまま保存してきました。`,
  list_three: `scriptcode は評価対象となるビットコインスクリプトそのものです。これもステップ2で Input クラスに追加済みです。`,
  paragraph_three: `次のセクションで詳しく説明しますが、Pay-to-Witness-Public-Key-Hash アドレスから出金するための scriptcode は以下のようになります：`,
  paragraph_four: `…これをデコードすると、以下のビットコインスクリプトになります。`,
  paragraph_five: `scriptcode の詳細については、<Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link> を参照してください。`,
  paragraph_six: `このトランザクションのプレイメージ（preimage）は、以下の要素をシリアライズしたものになります：`,
  headings: {
    item_one: `説明`,
    item_two: `名前`,
    item_three: `タイプ`,
    item_four: `サイズ`,
  },
table: {
  row_one: {
    item_one: `トランザクションのバージョン。通常は2が使われる`,
    item_two: `version`,
    item_three: `int`,
    item_four: `4`,
  },
  row_two: {
    item_one: `すべてのインプットのoutpointをシリアライズし、dSHA256を適用した値`,
    item_two: `bytes`,
    item_three: `bytes`,
    item_four: `32`,
  },
  row_three: {
    item_one: `すべてのインプットのsequence値をシリアライズし、dSHA256を適用した値`,
    item_two: `sequences`,
    item_three: `bytes`,
    item_four: `32`,
  },
  row_four: {
    item_one: `署名対象となる単一のインプットのoutpoint（シリアライズ済み）`,
    item_two: `outpoint`,
    item_three: `bytes`,
    item_four: `36`,
  },
  row_five: {
    item_one: `使用している出力のスクリプト（scriptcode）`,
    item_two: `scriptcode`,
    item_three: `bytes`,
    item_four: `(可変)`,
  },
  row_six: {
    item_one: `署名対象の単一のインプットが使用しているsatoshiの量`,
    item_two: `value`,
    item_three: `int`,
    item_four: `8`,
  },
  row_seven: {
    item_one: `署名対象の単一のインプットのsequence値`,
    item_two: `sequence`,
    item_three: `int`,
    item_four: `8`,
  },
  row_eight: {
    item_one: `すべてのアウトプットをシリアライズし、dSHA256を適用した値`,
    item_two: `outputs`,
    item_three: `bytes`,
    item_four: `32`,
  },
  row_nine: {
    item_one: `トランザクションのlocktime。通常は0`,
    item_two: `locktime`,
    item_three: `int`,
    item_four: `4`,
  },
  row_ten: {
    item_one: `Signature Hash Type（署名ハッシュの種類）。ここでは "ALL" を示す 1 を使用`,
    item_two: `sighash`,
    item_three: `int`,
    item_four: `4`,
  },
},
paragraph_seven: `最後に、これらすべてのシリアライズ済みデータに対して Double SHA-256 を適用したものが、署名対象のメッセージになります。`,
success: `digest() メソッドは問題ありません。素晴らしい出来です！`,
  },
},
  
export default translations
