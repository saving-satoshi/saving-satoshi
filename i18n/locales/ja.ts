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
  nav_title: `コンピュータが唸りを上げて起動する`,
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
export default translations
