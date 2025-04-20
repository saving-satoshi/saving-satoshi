const translations = {
  shared: {
    next: 'Tiếp tục', //Continue
    start: 'Bắt đầu', //Start
    copy: 'Sao chép', //Copy
    info: 'Thông tin', //Info
    copy_acknowledged: 'Đã sao chép!', //Copied!
    about: 'Phần mở đầu', //About
    chapter: 'Chương', //Chapter
    chapters: 'Các chương', //Chapters
    challenge: 'Thử thách', //Challenge
    challenges: 'Các thử thách', //Challenges
    coming_soon: 'Sắp ra mắt', //Coming soon
    start_chapter: 'Bắt đầu chương', //Start chapter
    back: 'Trở lại', //Back
    end: 'Kết thúc', //End
    close: 'Đóng', //Close
    poweroff: 'Quay lại chọn chương', //Back to chapter selection
    loading: 'Đang tải', //Loading
    bitcoin_dev_project: 'Dự án Phát triển Bitcoin', //Bitcoin Dev Project
  },
  ///ABOUT PAGE
  about: {
    title: 'Giới thiệu',
    mobile_title: 'Tất cả về Saving Satoshi',
    subtitle:
      'Vào năm 2139. Đồng Bitcoin cuối cùng sẽ được khai thác(đào) khối trong hai tuần nữa. Nhiều tháng qua tại Quảng trường Satoshi, một chiếc đồng hồ đếm ngược thời gian đã xuất hiện cho sự kiện này.',
    intro:
      'Cả thế giới đang chờ đợi phần thưởng cuối cùng này trong chuỗi khối dữ liệu (Blockchain) Bitcoin. Bỗng nhiên, mạng lưới Bitcoin ngừng hoạt động.<br><br>Bạn nhận được một thư tín điện tử từ một người tự xưng là Satoshi Nakamoto. (Giống như bất kỳ hình ảnh ba chiều khác, nhưng hình ảnh này có hình dạng như một con mèo (holocat)). Bạn mở holocat bằng cách chạm nhẹ vào mũi của nó, tò mò muốn nghe nó nói gì.',

    project: {
      title: 'Bitcoin là nghiêm túc, nhưng học về nó không cần phải như vậy',
      paragraph_one:
        'Saving Satoshi là một trò chơi nhập vai nhẹ nhàng về công nghệ bitcoin. Nó kết hợp các thử thách sáng tạo, thú vị với cốt truyện và cơ chế trò chơi để tạo ra một điểm khởi đầu phù hợp cho các bạn tò mò về lập trình cho phát triển bitcoin.',
      paragraph_two:
        'Nó được xây dựng với niềm vui cho các lập trình viên tò mò và bất kỳ ai muốn tìm hiểu cách bitcoin <span className="italic">thực sự</span> hoạt động. Nó dành cho những người đã thấy được sự kỳ diệu của phần mềm với mã nguồn mở bitcoin (₿OSS) và đang tìm cách bắt đầu đóng góp.',
      paragraph_three:
        'Mỗi chương đều chứa đầy nội dung bài học dựa trên mã, mô phỏng và bài tập lập trình để làm cho việc học các chi tiết bí ẩn của công nghệ bitcoin trở nên thú vị hơn.',
      paragraph_four:
        'Với các ví dụ đơn giản, trực tiếp, người chơi xây dựng nền tảng vững chắc trước khi thêm vào sự phức tạp. Thông qua trải nghiệm người dùng nhập vai, hình ảnh phong phú và tương tác liền mạch, người học được đưa vào một hành trình qua nhiều chủ đề khác nhau bao gồm:',
      chapter_topics: {
        list_one: 'Tìm và giải mã thông điệp bí mật trong khối genesis',
        list_two: 'Hàm băm và bằng chứng công việc',
        list_three: 'Động lực của đào theo nhóm',
        list_four:
          'Cơ bản về mật mã đường cong elliptic và cách tạo địa chỉ từ cặp khóa công khai-riêng tư',
        list_five: 'Ký và xác minh thông điệp ECDSA',
        list_six: 'Xây dựng giao dịch từ đầu',
        list_seven: 'Lắp ráp các giao dịch để tạo mẫu khối',
        list_eight: 'Sử dụng Bitcoin Core RPC API và tính toán trợ cấp khối',
        list_nine: 'Bitcoin Script',
        list_ten: 'Cách mạng Lightning hoạt động',
      },
      paragraph_five:
        'Nhưng không chỉ là về chương trình giảng dạy. Chúng tôi tin rằng giáo dục về bitcoin có thể sáng tạo và độc đáo như chính công nghệ. Đó là lý do tại sao trò chơi đề cập đến nhiều yếu tố hấp dẫn khác của bitcoin như văn hóa, lịch sử và thiết kế.',
      paragraph_six:
        'Đối với chúng tôi, bitcoin là một lực lượng tích cực trên thế giới. Dự án này được xây dựng bởi một nhóm đóng góp đam mê theo các tiêu chuẩn cao nhất, và nó hoàn toàn miễn phí và mã nguồn mở (FOSS). Để tìm hiểu thêm về cách Saving Satoshi được tạo ra, hãy xem <Link href="https://bitcoin.design/guide/case-studies/saving-satoshi" className="underline" target="_blank">nghiên cứu điển hình</Link> của chúng tôi trong Bitcoin Design Guide.',
      paragraph_seven:
        'Từ chơi trò chơi, đến tổ chức hội thảo, đến đóng góp mã, có nhiều cách để tham gia cộng đồng Saving Satoshi. Chúng tôi rất vui mừng được có bạn. Để liên hệ, hãy theo dõi <Link href="https://github.com/saving-satoshi/saving-satoshi" className="underline" target="_blank">Saving Satoshi trên GitHub</Link> và tham gia <Link href="https://discord.gg/eBGRaCSjg5" className="underline" target="_blank">kênh #saving-satoshi</Link> trên Bitcoin Design Community Discord.',
      paragraph_eight:
        'Bạn cũng có thể kết nối với chúng tôi trên <Link href="https://x.com/savingsatoshi" className="underline" target="_blank">X</Link>, <Link href="https://njump.me/npub1vy6wcgw6jhhtcmpawvlnsfx7g8qt8r40z7qlks9zwa4ed57vm5eqx527hr" className="underline" target="_blank">nostr</Link>, và <Link href="https://bsky.app/profile/bitcoindevs.bsky.social" className="underline" target="_blank">Bluesky</Link>. Chúng tôi rất thích nghe từ người dùng của mình!',
    },

    contributing: {
      title: 'Cách đóng góp',
      paragraph_one:
        'Chương trình này là một dự án mã nguồn mở, vì vậy chúng tôi rộng mở tất cả các cánh cửa để bạn có thể giúp định hình và phát triển dự án.',

      feedback: {
        title: 'Phản hồi',
        paragraph_one:
          'Cách tuyệt vời nhất để đóng góp là trải nghiệm Chương 1 và cho chúng tôi ý kiến tổng thể về trải nghiệm của bạn <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer"> qua mẫu đơn này </a>.',
      },

      contribute: {
        title: 'Đóng góp',
        paragraph_one:
          'Mọi đề xuất về bất cứ điều gì đều được hoan nghênh ví dụ như thay đổi nội dung hoặc cơ chế hoạt động. Chúng tôi luôn hoan nghênh những hỗ trợ đánh giá và <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">kiểm tra chất lượng (QA) các thay đổi trong mã lập trình</a>. Đối với các cải tiến về mã lập trình, bạn có thể trực tiếp gửi vấn đề hoặc yêu cầu lấy mã mới trên GitHub.',
        paragraph_two:
          'Nếu bạn muốn tham gia vào thiết kế, cốt truyện hoặc bất kỳ điều gì khác, hãy tham gia cùng chúng tôi trong kênh #saving-satoshi trên <a href="https://discord.gg/DC8Dys4G3h" target="_blank" rel="noreferrer">Bitcoin Design Discord</a>. Cho biết bạn muốn đóng góp như thế nào và chúng tôi sẽ giúp bạn đi đúng hướng.',
      },
    },

    privacy: {
      title: 'Cam kết bảo mật',
      paragraph_one:
        'Trong dự án Saving Satoshi, chúng tôi cam kết nghiêm ngặt quyền riêng tư và bảo mật của người tham gia. Chúng tôi tin vào sự minh bạch và mong muốn bạn hiểu cách thức và lý do tại sao các thông tin hoạt động khi sử dụng ứng dụng này được kiểm soát. Để đạt được điều này, chúng tôi sử dụng một công cụ có tên là<Link href="https://umami.is/" className="underline" target="_blank">Umami</Link>.',
      sub_heading_one: 'Umami là gì?',
      paragraph_two:
        'Umami là một nền tảng phân tích mã nguồn mở giúp thu thập những thông tin cần thiết về cách bạn sử dụng ứng dụng của chúng tôi. Cho phép chúng tôi đưa ra các quyết định dựa trên dữ liệu và liên tục cải thiện ứng dụng để đáp ứng tốt hơn nhu cầu của bạn. Bạn có thể xem bảng điều khiển Umami <Link className="underline" href="https://visits.bitcoindevs.xyz/share/zFmD5WIus09mDxEf/Saving%20Satoshi" target="_blank">ở đây</Link>.',
      sub_heading_two: 'Chúng tôi thu thập dữ liệu gì?',
      paragraph_three:
        'Hãy yên tâm, chúng tôi chỉ thu thập dữ liệu phi cá nhân và ẩn danh, chẳng hạn như:',
      list_item_one_title: 'Cải thiện sản phẩm:',
      list_item_one_text:
        'Chúng tôi sử dụng dữ liệu để xác định các phần trong ứng dụng có thể được cải thiện hay không. Bằng cách hiểu người dùng sử dụng ứng dụng như thế nào, chúng tôi có thể làm cho nó hiệu quả, thân thiện với người dùng và an toàn hơn.',
      list_item_two_title: 'Khả năng tương thích:',
      list_item_two_text:
        'Hiểu các thiết bị và nền tảng người dùng sử dụng cho phép chúng tôi tối ưu hóa ứng dụng với các cấu hình khác nhau, đảm bảo hoạt động liền mạch cho người dùng.',
      sub_heading_three: 'Bảo mật quyền riêng tư của bạn rất quan trọng',
      paragraph_four:
        'Chúng tôi muốn nhấn mạnh rằng quyền riêng tư của bạn là vô cùng quan trọng đối với chúng tôi. Chúng tôi không thu thập bất kỳ thông tin nhận dạng cá nhân nào và dữ liệu chúng tôi thu thập chỉ được sử dụng cho mục đích cải thiện ứng dụng. Dữ liệu của bạn không bao giờ được chia sẻ hoặc bán cho bên thứ ba.',
      paragraph_five:
        'Nếu bạn có bất kỳ lo ngại hoặc câu hỏi nào về các hoạt động thu thập dữ liệu hoặc chính sách bảo mật của chúng tôi, xin đừng ngần ngại liên hệ với chúng tôi. Chúng tôi cam kết cung cấp cho bạn trải nghiệm an toàn và minh bạch khi sử dụng ứng dụng của chúng tôi.',
    },

    contributors: {
      title: 'Chúc bạn trải nghiệm vui vẻ!',
      paragraph_one:
        'Saving Satoshi sẽ không thể thực hiện được nếu không có nhiều người đã cùng nhau xây dựng nó trong những năm qua. Cần cả một ngôi làng!',
      paragraph_two:
        'Nhóm cốt lõi bao gồm <Link href="https://adamjonas.com/" className="underline" target="_blank">Adam Jonas</Link>, <Link href="https://www.germanysbestkeptsecret.com/" className="underline" target="_blank">Christoph Ono</Link> (trưởng nhóm thiết kế), <Link href="https://satsie.dev/" className="underline" target="_blank">Satsie</Link>, <Link href="https://github.com/benalleng" className="underline" target="_blank">BenAllenG</Link> (trưởng nhóm kỹ thuật), <Link href="https://github.com/pinheadmz" className="underline" target="_blank">Matthew Zipkin</Link> (trưởng nhóm nội dung bài học), <Link href="https://x.com/TuedonTuoyo" className="underline" target="_blank">Tuedon Tuoyo</Link>, <Link href="https://www.artassoiants.com/" className="underline" target="_blank">Art Assoiants</Link> (quản lý sản phẩm), và 4 con mèo bí ẩn mà <Link href="https://spiral.xyz/" className="underline" target="_blank">Spiral</Link> cho chúng tôi mượn để viết câu chuyện.',
      paragraph_three:
        'Chúng tôi cũng đã có một số người đóng góp đóng vai trò quan trọng tại các thời điểm khác nhau. Điều này bao gồm, nhưng không giới hạn, <Link href="https://x.com/ecurrencyhodler" className="underline" target="_blank">ecurrencyhodler</Link>, <Link href="https://www.jtwoodhouse.com/" className="underline" target="_blank">JT Woodhouse</Link>, <Link href="https://x.com/_Jsms_" className="underline" target="_blank">JSMS</Link>, <Link href="https://github.com/afterburn" className="underline" target="_blank">Kevin Karsopawiro</Link>, <Link href="https://github.com/daviroo" className="underline" target="_blank">daviroo</Link>, <Link href="https://github.com/nully0x" className="underline" target="_blank">nully0x</Link>, <Link href="https://github.com/vinayaksh42" className="underline" target="_blank">Vinayak Sharma</Link>, <Link href="https://github.com/shaavan" className="underline" target="_blank">Shashwat Vangani</Link>, <Link href="https://github.com/aureleoules" className="underline" target="_blank">Aurèle Oulès</Link>, và <Link href="https://github.com/sabakhilji" className="underline" target="_blank">sabakhilji</Link>.',
      paragraph_four:
        'Danh sách đầy đủ các người đóng góp mã có thể được tìm thấy trên <Link href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" className="underline" target="_blank">GitHub</Link>.',
    },

    satoshi_needs_you: 'Nhanh lên, Satoshi cần bạn.',
      },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: 'Những Bí Mật Ngầm', // Secrets in Plain Sight
    paragraph_one:
 'Đây là năm 2139. Đồng Bitcoin cuối cùng sẽ được khai thác(đào) khối trong hai tuần nữa. Nhiều tháng qua tại Quảng trường Satoshi, có một chiếc đồng hồ đếm ngược thời gian cho sự kiện này đã xuất hiện. Cho đến thời điểm này, mỗi khối đều có một phần thưởng bitcoin nào đó, một khoản trợ cấp. Đây là cách duy nhất để có bitcoin mới xuất hiện nhưng sớm thôi, mọi thứ sắp thay đổi. Sau hơn một trăm năm, lịch trình phát hành bitcoin sắp kết thúc. Thế giới đang chờ đợi khối dữ liệu cuối cùng có trợ cấp Bitcoin được khai thác(đào) khối. Đó là một sự kiện lịch sử. Kết thúc của một kỷ nguyên.',     // The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square. Up until this point, every block has had some kind of bitcoin reward, a subsidy. This is the only way new bitcoins come into existence but soon, it’s about to change. After over one hundred years, the issuance schedule for bitcoin is coming to an end. The world awaits for the last block with a subsidy to be mined. It’s a historical event. The end of an era.
    paragraph_two: 'Bỗng nhiên, mạng lưới Bitcoin ngừng hoạt động.', // Suddenly, the network grinds to a halt.
    
    ///CHAPTER 1
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Cuộc biểu tình của máy(thợ) đào Bitcoin', // Miner protest
      paragraph_one: `Một lát sau, Màn hình 3D của bạn được kích hoạt.`, // Moments later, your Hover Screen activates.
      paragraph_two: `—Deborah Chunk: “Thomas Vanderpoole. Là Giám đốc điều hành của BitRey, ăn mặc lịch lãm, cho đến nay, ông đã và đang điều hành mỏ khai thác(đào) khối bitcoin lớn nhất thế giới. Ông cũng sản xuất máy khai thác(đào) khối bitcoin. Điều gì đang xảy ra? Bitcoin đang chết?”`,// —Deborah Chunk: “Thomas Vanderpoole. As the well-dressed CEO of BitRey, you run, by far, the largest bitcoin mining mỏ in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”
      paragraph_three: `—Vanderpoole: “Hãy bắt đầu lại cuộc trò chuyện từ đầu nhé. Vâng, tôi là Deborah, và vâng, tôi mặc đẹp. Cả gia đình Vanderpoole đều ăn mặc lịch lãm - cha tôi và ông nội tôi trước đó - đã khai thác(đào) khối bắt đầu từ khối (dữ liệu) thứ 21.000. Đó là lý do tại sao tôi có thể tự tin nói rằng những người máy(thợ) đào trên toàn thế giới đang gây ra những sự cố trì trệ này bằng cách tắt máy của họ. Đây là một cuộc biểu tình. Không ai muốn ngừng được phát hành bitcoin ở số lượng tối đa là 21 triệu. máy(thợ) đào không thể sống chỉ với phí giao dịch.”`,// —Vanderpoole: “Let’s start from the top. Yes, I am, Deborah, and yes, I do. The Vanderpooles—my well-dressed daddy and his well-dressed daddy before him—have been mining since block 21,000. That is why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. Miners cannot survive on fees alone.”
      start: 'Tiếp tục', // Continue
    },

    intro_two: {
      title: 'Khối dữ liệu khởi tạo', // Genesis
      nav_title: "Con mèo điện tín 3D của Satoshi", // Satoshi's holocat
      paragraph_one:
   'Trên chiếc đồng hồ đa năng, bạn nhận được một Con mèo điện 3D nhãn hiệu WhiskerWare từ một người tự xưng là Satoshi Nakamoto. (Giống như bất kỳ một điện tín 3D khác, nhưng lần này có hình dạng như một con mèo.) Bạn mở con mèo điện tín 3D bằng cách chạm nhẹ vào mũi của nó.',// On your Everything Watch, you receive a WhiskerWare brand holocat from someone using the name Satoshi Nakamoto. (It’s like any other e-hologram, but this one is shaped like a cat.) You open the holocat by booping its nose.
      paragraph_two:
   '—“Bitcoin không phải đang chết, nhưng Bitcoin cần sự giúp đỡ của bạn. Đừng quên con mèo.” – Satoshi Nakamoto',  // —“Bitcoin is not dying, but it needs your help. Don’t forget the cat.” – Satoshi Nakamoto
      paragraph_three:
   '—Satoshi? Satoshi đó? Từ bài cáo bạch? Không, không thể nào. Mấy người đó đã được coi là đã mất tích (hay chết) hơn một thế kỷ trước.', // —Satoshi? The Satoshi? From the white paper? No, it couldn’t be. They’ve been presumed dead for over a century.
      paragraph_four: 'Phải không?', // Haven’t they?
      paragraph_five:
   'Holocat: “Tốt hơn hết là nên bắt tay vào làm việc. Tôi có thể giúp, nhưng bạn phải nói meo.”', // Holocat: “You better get to work. I can help, but you have to start meow.”
    },

    genesis_one: {
      title: 'Khối dữ liệu khởi tạo', // Genesis
      nav_title: 'Bí mật trong khối đầu tiên', // Genesis Secret
      heading: 'Thử thách đầu tiên của bạn', // Your first challenge
      paragraph_one:
   'Bitcoin là tiền mã hóa tự do. Bất kỳ người nào cũng có thể gửi tiền bằng cách liên kết giao dịch với mạng lưới. Sau khi gửi giao dịch, các giao dịch được đóng gói thành các khối dữ liệu bởi máy(thợ) đào. Những máy(thợ) đào trong mạng lưới cạnh tranh với nhau để giành quyền tạo khối dữ liệu trên chuỗi. Đây là cơ chế phi tập trung (không qua trung gian) giữ cho mạng bitcoin hoạt động tự do.', // Bitcoin is censorship-resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain. This is what keeps bitcoin decentralized.
      paragraph_two:
   'Satoshi Nakamoto, nhà kiến tạo ẩn danh của bitcoin, đã khai thác(đào) khối bitcoin đầu tiên. Ông đã để lại cho thế giới một thông điệp bí mật ngay trong chính giao dịch bitcoin đầu tiên khi thực hiện giao dịch này. Thử thách đầu tiên của bạn là tìm và giải mã bí mật này.',// Satoshi Nakamoto, the pseudonymous inventor of bitcoin, also mined the first bitcoin block. He left the world a secret message in the very first bitcoin transaction that was ever made. Your first challenge is to find and decode it.
    },

    genesis_two: {
      title: 'Khối dữ liệu khởi tạo', // Genesis
      nav_title: 'Tìm thông điệp', // Find the message
      heading: 'Tìm thông điệp bí mật', // Find the hidden message
      paragraph_one:
   'Hãy tìm khối đầu tiên trong chuỗi khối bitcoin. Nhấp vào nút bên dưới để mở một <Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">trình duyệt chuỗi khối</Tooltip> chính xác ở khối 0, được gọi là khối đầu tiên.',// Let’s find the very first block in the bitcoin blockchain. Click the button below to open a <Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">block explorer</Tooltip>  exactly at block 0, which is called the genesis block.
      paragraph_two:
   'Kéo xuống và mở rộng chi tiết về một giao dịch được lưu trữ trong khối này. Tìm đầu vào có tên “Coinbase”. Bây giờ hãy tìm tiêu đề “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)”. Giá trị bên cạnh tiêu đề này là thông điệp mã hóa.',// Scroll down and expand the details on the one transaction that is stored in this block. Find the input called “Coinbase”. Now look for the label “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)”. The value next to it is an encoded message.
      paragraph_three:
   'Sao chép giá trị mã hóa đó và dán vào khối mã hóa.', // Copy that value and paste it in the code block.
      tooltip_block_explorer:
   'Một <a  href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">trình duyệt chuỗi khối</a> là một công cụ hữu ích để tra cứu nhanh thông tin về các giao dịch bitcoin.',// A <a  href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is a useful tool to quickly look up information about bitcoin transactions.
      tooltip_hex:
   'Hexadecimal là hệ thập lục phân, một hệ thống số đại diện cho các số sử dụng cơ số 16.',  // Short for hexadecimal, a numeral system that represents numbers using a base of 16.
      view_block_0: 'Xem Khối 0', // View Block 0
      placeholder: 'Dán giá trị bạn tìm thấy ở đây', // Paste the value you found here
    },

    genesis_three: {
      title: 'Khối dữ liệu khởi tạo', // Genesis
      nav_title: 'Giải mã thông điệp', // Decode the message
      heading: "Hãy giải mã thông điệp", // Let's decode the message
      paragraph_one:
   'Thông điệp bạn tìm thấy được mã hóa theo định dạng HEX. Bây giờ chúng ta sẽ chạy một lệnh để chuyển đổi nó thành ASCII, thứ mà chúng ta có thể đọc được.', // The message you found was encoded in a format called HEX. Now we will run a command to turn it into ASCII, which we will be able to read.
      paragraph_two:
   'Sao chép và dán lệnh bên dưới vào Terminal trong khối mã hóa và nhấn “Enter”.',  // Copy and paste the command below into the Terminal in the code block and press “Enter”.
      terminal_challenge_lines: `Nhập lệnh của bạn ở đây và nhấn Enter...\n Biến $scriptSigHex đã được định nghĩa sẵn cho bạn.\n\n var $scriptSigHex = '04fff...e6b73'` ,  // Enter your commands here and press Enter...\n The variable $scriptSigHex is already defined for you.\n\n var $scriptSigHex = '04fff...e6b73'
      waiting_for_input: 'Đang chờ bạn viết và chạy script...', // Waiting for you to write and run the script...
      success: `Làm tốt lắm! Thông điệp được giải mã tham chiếu trong trang nhất của <Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link> từ ngày 3 tháng 1 năm 2009, cùng ngày Satoshi khai thác(đào) khối genesis. Thật tuyệt vời phải không ?! Thông điệp này cũng cung cấp cho chúng tôi một số hiểu biết sâu sắc về động lực tạo ra bitcoin của ông ấy.\n\n Hãy tiếp tục nào!`, // Great work! The decoded message references the front page of <Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link> from January 3,2009, the same day Satoshi mined the genesis block. How cool is that?! This message also gives us some insight into his motivation for creating bitcoin.\n\n Let's keep going.
    },

    genesis_four: {
      title: 'Khối dữ liệu khởi tạo', // Genesis
      nav_title: 'Thành công đầu tiên của bạn', // Your first success
      subtitle: 'Chúc mừng! Bạn đã hoàn thành thử thách đầu tiên!', // Congrats! You completed the first challenge!
      paragraph_one:
   'Bạn đã tìm thấy thông điệp bí mật mà Satoshi Nakamoto đã mã hóa trong khối đầu tiên. Đã đến lúc phát huy những gì bạn vừa học được. Giải mã một manh mối quan trọng của câu chuyện trong thử thách tiếp theo.',// You found the secret message Satoshi Nakamoto embedded in the genesis block. It’s time to expand on what you just learned. Decode a vital clue about the story in the next challenge.
    },

    transacting_one: {
      title: 'Giao dịch', // Transacting
      nav_title: "Các cấu thành của một giao dịch", // What's in a transaction
      heading: 'Các thành phần của một giao dịch là gì?', // What’s in a transaction?
      paragraph_one:
   'Hai thành phần chính của một giao dịch là đầu vào và đầu ra. Trong bài thực hành trước, chúng ta đã giải mã một thông điệp bí mật tìm thấy bên trong đầu vào của giao dịch. Lần này, chúng ta sẽ giải mã một thông điệp thuộc phần đầu ra.',// Two main components of a transaction are inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.
      paragraph_two:
   'Đối với giao dịch sau đây, chúng ta sẽ xác định đầu ra loại OP_RETURN.', // For the following transaction, we’re going to identify the output of type OP_RETURN.
    },

    transacting_two: {
      title: 'Giao dịch', // Transacting
      nav_title: 'Tìm OP_RETURN', // Find the OP_RETURN
      heading: 'OP_RETURN',
      paragraph_one:
   'Có một cách khác để ẩn các thông điệp bí mật trong các giao dịch. Bitcoin có một loại lệnh mã hóa đặc biệt gọi là OP_RETURN cho phép người dùng đính kèm thông điệp vào đầu ra của giao dịch. Hãy xem chúng ta có thể tìm thấy cái lệnh mã hóa nào không.', // There’s another way to hide secret messages in transactions. Bitcoin has a special type of code called OP_RETURN that allows users to attach messages to transaction outputs. Let’s see if we can find one.
      paragraph_two:
   '1. Nhấn vào <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">đây</Link> để xem chi tiết một giao dịch cụ thể.', // 1. Click <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">here</Link> to look at a specific transaction.
      paragraph_three:
   '2. Mở thông tin chi tiết và tìm phần thông tin thuộc loại “OP_RETURN”.', // 2. Open up the details and find the part that is of type “OP_RETURN”.
      paragraph_four:
   '3. Tiếp đến, bạn xác định vị trí trường “SCRIPTPUBKEY (ASM)”. Bạn thấy phần thông tin “OP_RETURN OP_PUSHBYTES_33” không? Đây được gọi là opcode. Chúng ta quan tâm đến phần thông tin phía sau các lệnh mã hóa này.', // 3. Now locate the “SCRIPTPUBKEY (ASM)” field. See the “OP_RETURN OP_PUSHBYTES_33" part? These are called opcodes. We’re actually interested in what comes after them.
      paragraph_five:
   '4. Sao chép chuỗi số dài phía sau “OP_RETURN OP_PUSHBYTES_33” và dán nó vào khối mã hóa.', // 4. Copy the long string of numbers after “OP_RETURN OP_PUSHBYTES_33” and paste it in the code block. 
      input_challenge_label: 'Nhập loại OP_RETURN', // Enter the OP_RETURN type
    },

    transacting_three: {
      title: 'Giao dịch', // Transacting
      nav_title: 'Giải mã OP_RETURN', // Decode the OP_RETURN
      heading: 'Một thông điệp bí mật khác', // Another secret message
      paragraph_one:
   'Chúng ta đã xác định được phần đầu ra của giao dịch chứa thông điệp.', // We’ve identified the part of the transaction output that holds the message.
      paragraph_two:
   'Bây giờ chỉ còn việc giải mã nó, giống như đã làm trong bài thực hành trước. Bạn có thể xem lại thông tin của giao dịch <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">ở đây</Link>.',// All that’s left now is to decode it, just like we did in the previous exercise. You can look up the transaction again <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">here</Link>.
      terminal_challenge_success:
   'Đúng rồi! Làm được lắm!\n\n Như bạn thấy, manh mối là một địa chỉ. Hãy đi đến đó.\n\n Thử thách tiếp theo đang chờ bạn.', // That’s correct! Nice work.\n\n As you can see, the clue is an address. Go to it.\n\n Your next challenge awaits you.
      terminal_challenge_lines:
   'Viết câu lệnh mã hóa của bạn ở đây và nhấn Enter...\n\n Lệnh: \n echo $scriptPubKeyBytes | xxd -r -p \n\n Lưu ý rằng $scriptPubKeyBytes sẽ không được định nghĩa sẵn cho bạn lần này. Bạn cần thay thế biến số này trong câu lệnh mã hóa với giá trị đã tìm thấy ở phần thực hành trước',// Enter your commands here and press Enter...\n\n Command: \n echo $scriptPubKeyBytes | xxd -r -p \n\n Note that $scriptPubKeyBytes is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous page
      terminal_challenge_error:
   'Sắp được rồi! Nhớ rằng biến $scriptPubKeyBytes không được đặt cho bạn lần này.', // Almost! Remember that the variable $scriptPubKeyBytes is not set for you this time.
    },

    outro_one: {
      title: 'Phần ra', // Outro
      nav_title: 'Cuộc phiêu lưu đang vẫy gọi', // Adventure calls
      paragraph_one:
   'Bạn chạy xuống tầng hầm, bước vào chiếc xe cà tàng cũ của cha mình, nhập tọa độ và tiến đến Quận 21.',  // You run down to your garage, step into your dad’s old Budgetcopter, punch in the coordinates, and make your way to District 21.
      paragraph_two:
   'Mặc dù bị dị ứng với mèo, nghiêm trọng đến mức thậm chí xảy ra đối với con mèo điện tín 3D, nhưng con mèo vẫn đi theo cùng. Bạn kịch liệt phản đối, nhưng mèo vẫn là mèo.', // Despite cat allergies so intense that they apply even to holograms, the holocat comes along. You object, but cats will be cats.
      button_text: 'Hoàn tất chương 1', // Complete chapter 1
    },

    outro_two: {
      title: 'Bạn đã thành công!', // You did it!
      nav_title: 'Chương đã hoàn tất', // Chapter complete
      description:
   'Tuyệt vời. Bạn đã hoàn thành chương đầu tiên với nhiều kiến thức về mã hóa và giao dịch. Bạn cảm thấy như thế nào?', // Amazing. You completed the first chapter and learned a lot about hashes and transactions. How did it go?
    },

    end: {
      save: 'Lưu tiến độ', // Save my progress
      next: 'Tiếp tục và không lưu lại', // Continue without saving
      feedback: 'Phản hồi của bạn', // Share your feedback
    },
    resources: {
      genesis_two: {
 scriptsig_heading: 'ScriptSig',
 scriptsig_paragraph:
     "‘scriptSig’ là một lệnh mã hóa được sử dụng để trong việc cấu thành phần đầu vào của một giao dịch mới. Thực chất, đó là lệnh mở khóa của bạn, chứng minh rằng bạn có quyền chi tiêu bitcoin từ tham chiếu UTXO. ‘scriptSig’ là phần dữ liệu được nhập trong trường scriptSig của phần đầu vào.", // The 'scriptSig' is a script that you provide as part of the input in your new transaction. It is essentially your unlocking script, which proves that you have the authority to spend the bitcoin from the referenced UTXO. The 'scriptSig' is the data that goes into the input's scriptSig field.
 block_explorer_heading: 'Trình duyệt chuỗi khối dữ liệu', // Block Explorer
 block_explorer_paragraph:
     'Trình duyệt chuỗi khối dữ liệu là một công cụ quan trọng để tìm kiếm và hiểu các thông tin động trên mạng lưới Bitcoin blockchain. Với giao diện thân thiện, người dùng sử dụng để kiểm tra và phân tích dữ liệu được lưu trữ trên bitcoin blockchain. Trình duyệt giúp người dùng tìm hiểu lịch sử giao dịch, xem số dư tài khoản và theo dõi tiến trình hình thành của từng khối dữ liệu và giao dịch.', // A block explorer is a crucial tool for navigating and understanding blockchain networks. It acts as a user-friendly interface to inspect and analyze the data stored on a blockchain. With a block explorer, users can explore transaction histories, view account balances, and track the progress of individual blocks and transactions.
 tip: 'Tìm danh mục câu lệnh scriptSig(Hex) được lồng trong phần đầu vào coinbase sau khi tra cứu thông tin giao dịch bên trong khối dữ liệu.', // Look for the scriptSig(Hex) category nested in coinbase input after expanding the transaction within the block.
      },
      genesis_three: {
 bash_heading: 'Các câu lệnh Bash', // Bash Commands
 bash_paragraph:
     'Chúng ta đang sử dụng một số câu lệnh và tùy chọn bash cơ bản để đảo ngược quá trình mã hóa mà Satoshi đã thực hiện trên văn bản được đưa vào khối dữ liệu đầu tiên.',  // We are using some basic bash command and options to reverse the compression Satoshi did on the text put into the genesis block.
 tip: "Cáu lệnh 'xxd' dùng để chuyển đổi một tập tin thành hex sau đó thêm thẻ '-r' để đảo ngược nó và cho phép dịch hex thành văn bản. Tiếp đó, thẻ '-p' in văn bản ra bảng điều khiển cho phép bạn đọc đầu ra.",  // The 'xxd' command turns a file into hex and adding the '-r' tag reverses it allowing hex to be translated into text. The '-p' tag then prints it to the console allowing you to read the output.
      },
      transacting_two: {
 transactions_heading: 'Các giao dịch', // Transactions
 transactions_paragraph:
     "Mỗi giao dịch trong thế giới tiền mã hóa giống như một giao dịch thanh toán đơn lẻ, trong quá trình đó, các đồng tiền liên quan hiện có sẽ bị tiêu hủy và các đồng tiền mới sẽ được tạo ra. Khi ai đó khởi tạo một giao dịch tiền mã hóa, về cơ bản họ đang sử dụng dữ liệu chuỗi khối để chuyển một số lượng tiền cụ thể từ ví điện tử này sang ví điện tử khác. Để thực hiện điều này, giao dịch sẽ tiêu thụ các đồng tiền hiện có của người gửi và đồng thời tạo ra các đồng tiền mới cho người nhận, sau đó cập nhật sổ cái quyền sở hữu.", // A transaction in the world of cryptocurrencies is akin to a single atomic payment, where it involves the process of destroying existing coins and creating new ones. When someone initiates a cryptocurrency transaction, they're essentially instructing the blockchain to transfer a specific amount of coins from one digital wallet to another. To achieve this, the transaction consumes the sender's existing coins and generates new ones for the recipient, effectively updating the ownership ledger.
 bitcoin_script_heading: 'Các lệnh lập trình Bitcoin Script', // Bitcoin Script
 bitcoin_script_paragraph:
     'Bitcoin Script là một ngôn ngữ lập trình đơn giản dựa trên nguyên tắc sắp xếp chồng lặp, được sử dụng trong các giao dịch để xác định các điều kiện mà bitcoin có thể được chi tiêu. Bao gồm các opcode (viết tắt của mã hoạt động) khác nhau chỉ định các hoạt động nào nên được thực hiện trên dữ liệu trong câu lệnh.',  // Bitcoin Script is a simple, stack-based programming language used in bitcoin transactions to define the conditions under which bitcoins can be spent. It consists of various opcodes (short for operation codes) that specify what operations should be performed on the data within the script.
 tip: 'Với Op_Code: OP_Pushbytes_33 có nghĩa là chúng ta đang tìm một chuỗi dài 33 byte (tổng cộng 66 ký tự) trong OP_Return của giao dịch',// Given the Op_Code: OP_Pushbytes_33 we are looking for a string 33 bytes long (66 characters total) in the OP_Return of the transaction
      },
      transacting_three: {
 secrets_heading: 'Những Bí Mật Trong Bitcoin', // Secrets In Bitcoin
 secrets_paragraph:
     'Như đã thấy từ thử thách trước, các bí mật được lồng vào các lệnh mã hóa bitcoin đã trở thành một phần của lịch sử bitcoin kể từ khối đầu tiên. Có thể mục đích chỉ để lưu trữ một số thông tin trong dữ liệu chuỗi khối, hay để chuyển thông tin thông qua bitcoin script nhằm tạo một số giá trị khác ngoài bitcoin, hay để gửi thông điệp cho người khác, mọi người đã lưu trữ đủ loại dữ liệu trong chuỗi khối dữ liệu trong đầu vào và đầu ra ngay từ thuở sơ khai.',   // As we saw from the previous challenge, secrets embedded into bitcoin scripts has been a part of its history since the genesis block. Whether used to simply store some information in the blockchain, to pass information through bitcoin script to give some value external to bitcoin, or to pass messages to others, people have been storing things in the blockchain other than inputs and outputs since the beginning.
 tip: "Khi giải mã chuỗi thông tin bằng lệnh 'xxd', nhớ rằng lần này chúng ta không sử dụng một biến số, mà chúng ta phải nhập toàn bộ chuỗi thông tin", // When decoding the string with the 'xxd' command, remember that we are not using a variable this time, we need to input the entire string.
      },
    },
  },

  chapter_two: {
    title: 'Lập Kế Hoạch', // Hashing Out a Plan
    paragraph_one:
 'Tọa độ mà Satoshi cung cấp cho bạn không gây thất vọng, thật không may: đó là một nhà kho, và là một nhà kho đáng sợ, hoang vắng.', // The coordinates Satoshi gave you don’t disappoint, unfortunately: it’s a warehouse, and a scary, deserted one to boot.
    paragraph_two:
 'Bạn bay vòng quanh nhà kho bằng Budgetcopter của mình không dưới ba lần. Vâng, thở dài, có lẽ bạn sẽ phải vào đó. Máy dò nhiệt Budget Heat Detector của Budgetcopter không phát hiện gì ngoài bóng tối. Nếu ai đó biết nơi này tồn tại, thì đã rất lâu kể từ lần cuối họ đến thăm nó bằng bất cứ ký tự gì khác ngoài ký ức của họ.',  // You circle the warehouse in your Budgetcopter no less than three times. Yeah, sigh, you’re probably gonna have to go in there. Your Budgetcopter’s Budget Heat Detector detects nothing but darkness. If someone knows that this place exists, it’s been a long time since they visited it in anything but their memory.

    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Nhà kho', // The warehouse
      paragraph_one:
   '—HOLOCAT: “Trời ơi, thật là một bãi rác. Tốt hơn hết là nơi này nên có một số e-anchovies được lưu trữ ở đâu đó. Tôi thậm chí còn chấp nhận một số CyberKibble.."',// —HOLOCAT: “Boy, what a dump. This place had better have some e-anchovies stored somewhere. I’d even settle for some CyberKibble.."
      paragraph_two:
   'Bạn hạ cánh, ổn định bản thân và tìm kiếm một điểm vào. Chà, cái cửa sổ vỡ đó sẽ hữu ích. Bạn lấy một viên gạch đập vỡ phần còn lại của cửa sổ và nhảy vào trong. Tòa nhà chứa đầy hàng nghìn máy đào bitcoin cũ kỹ, được bảo quản tốt.',      // You land, steady yourself, and search for a point of ingress. There, that broken window should do the trick. You take out what’s left of the window with a brick, and hop inside. The building is filled with thousands of dusty, well-preserved bitcoin miners.
      paragraph_three: {
 a: '—HOLOCAT: “Đây không phải là nhà kho; đây là một bảo tàng. Tôi nghĩ đây là những thiết bị đào cũ của gia đình Vanderpoole. Vào thời kỳ đầu của bitcoin, máy(thợ) đào sẽ sử dụng máy tính thông dụng để đào bitcoin. Nhưng sau vài năm, máy(thợ) đào nhận ra rằng họ có thể sử dụng máy đào với một loại chip đặc biệt gọi là Mạch tích hợp dành cho ứng dụng cụ thể, hoặc ',  // —HOLOCAT: “This isn’t a warehouse; this is a museum. I think these are old Vanderpoole family mining devices. In bitcoin’s early days, miners would use general purpose computers to mine bitcoin. But after a few years, miners realized they could use machines with a special chip called an Application-Specific Integrated Circuit, or 
 b: 'ASIC, cho ngắn gọn. Các chip này chỉ thực hiện một việc: đào bitcoin. Tính năng tập trung hạn hẹp của chúng làm tăng hiệu quả và cho phép máy(thợ) đào sử dụng ít năng lượng hơn vào việc đào, mang lại cho họ lợi thế. Bạn có tin rằng mọi người đã từng đào bằng máy tính xách tay của họ không?"',  //  for short. These chips do only one thing: mine bitcoin. Their narrow focus increases their efficiency and allows miners to spend less energy on mining, giving them an edge. Can you believe that people mined with their laptops at one point?"
      },
      paragraph_four:
 'Điều này giải thích tất cả các máy đào trong bộ sưu tập của gia đình Vanderpoole.',// This explains all the machines in the Vanderpoole family collection.
      tooltip_one: {
 question: 'Máy đào ASIC là gì?',//'What is an ASIC miner?'
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520an%2520ASIC%2520miner%253F',
 highlighted: 'ASIC',
      },
    },

    intro_two: {
      title: 'Lập Kế Hoạch', // Hashing Out a Plan
      nav_title: 'Bật máy tính', // Turning on the computer
      paragraph_one:
   'Ở góc phòng, một máy tính hầu như không hoạt động, màn hình nhấp nháy mờ nhạt với một mẩu giấy dán. Tờ giấy ghi rằng “Bật lên đi, đồ đần.”', // In the corner, a dim, barely working computer monitor with a note stuck to it sits blinking. The note says “Turn them on, stupid."
      paragraph_two: '—HOLOCAT: “Thô lỗ thật. Ồ, một bàn phím cơ. Tôi đã nghe nói về thứ này rồi. Hình như chúng ồn đến mức khiến người dùng bị điếc cho nên bị cấm.”', // —HOLOCAT: “How rude. Wow; a mechanical keyboard. I’ve heard about these things. Supposedly, they were so loud that they cost users their hearing, and were banned.”
      paragraph_three:
   'Con mèo nhảy lên bàn phím và đi qua đi lại, chỉ cho bạn những phím cần nhấn.', //con mèo jumps onto the keyboard and walks across it, showing you what keys to hit.
    },

    hashing_one: {
      title: 'Các số không', // Zeroes
      nav_title: 'Máy tính sống lại', // The computer hums to life
      paragraph_one:
   'Do may mắn, hoặc vì con mèo biết nó đang làm gì, những chữ cái và số ngẫu nhiên mà nó bước lên biến thành ... nhiều chữ cái và số ngẫu nhiên hơn?',// Either by chance, or becausecon mèo actually knew what she was doing, the random letters and numbers she stepped on turn into... more random letters and numbers?
      list_one: '> QX23Y6VGECTUKSNIEUTUB[P[pihof', 
      list_two:
   '> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf', 
      paragraph_two: 'Màn hình hiển thị "CHUỖI MÃ HÓA KHÔNG ĐÚNG. HÃY THỬ LẠI."',  // The monitor displays "INCORRECT HASH. TRY AGAIN."
      paragraph_three:
   'Thì ra bất cứ ký tự gì mà con mèo nhập vào đều sai. Cuối cùng nó chỉ là một con mèo điện tín kiêu ngạo!',  // Of course whatever gibberishcon mèo typed was wrong. She’s just a sassy holographic cat!
      paragraph_four: 'Điều gì sẽ xảy ra nếu bạn nhập những ký tự khác?', // What happens if you type something different?
    },

    hashing_two: {
      title: 'Các số không', // Zeroes
      nav_title: 'Thử mã hóa một cái gì đó', // Try to hash something
      heading: 'Nhập bất kỳ ký tự nào', // Enter Anything
      return_hash: 'Dưới đây bạn sẽ thấy đầu vào của bạn được chuyển đổi thành một chuỗi mã hóa', // Below you will see your input converted to a hash
      progress_message: 'Tiếp tục...', // Keep going...
      success_message: 'Tốt rồi, làm tốt lắm. Hãy tiếp tục.', // Alright, nice work playing around. Let’s move on.
    },

    hashing_three: {
      title: 'Các số không', // Zeroes
      nav_title: 'Sức mạnh của hàm mã hóa SHA256', // The power of SHA256
      heading: 'Bạn có thấy điều gì đặc biệt về các só mã hóa không?', // Did you notice anything special about the hashes?
      list_one:
   'Giống như dấu vân tay, các số mã hóa điều khác biệt và độc nhất. Trừ một số trường hợp rắt đặc biệt, thường các số mã hóa của hai chuỗi ký tự khác nhau không bao giờ giống nhau.',  // Just like fingerprints, hashes are unique. Barring some exceptional circumstances, the hashes for two different things should never be the same.
      list_two:
   'Các hàm mã hóa là hàm một chiều. Bạn không thể đảo ngược kỹ thuật một hàm mã hóa để tìm ra dữ liệu đầu vào được sử dụng để tạo ra số mã hóa đó.', // Hash functions are one way streets. You can’t reverse engineer a hash to figure out the data used to make it.
      list_three:
   'các số mã hóa cực kỳ đáng tin cậy mang định tính xác định. Có nghĩa là bạn sẽ luôn nhận được một kết quả giống nhau khi mã hóa cùng một dữ liệu nhiều lần.',   // Hashes are extremely reliable in the sense that they are deterministic. This means you can hash the same piece of data over and over again and you’ll always get the same result.
      paragraph_one: {
   a: 'Hàm được sử dụng được gọi là ', // The function used here is called 
   b: 'một lựa chọn phổ thông.', // a very popular choice.
      },
      paragraph_two: 'Bây giờ, hãy xem bạn có thể tìm thấy một số mã hóa cụ thể không nhé.', // Now, let’s see if you can find a specific hash.
      paragraph_three:
   'Tìm một số mã hóa bắt đầu bằng số không (“0”). Tiếp tục nhập các ký tự khác nhau bên dưới cho đến khi bạn tìm thấy một số mã hóa mà chúng ta muốn.',      // Find a hash that starts with a zero (“0”). Keep typing different things below until you find a hash that we want.
      tooltip_one: {
 question: 'Hàm SHA-256 được sử dụng như thế nào trong bitcoin?', // How is SHA-256 used in bitcoin?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520SHA-256%2520used%2520in%2520bitcoin%253F',
 highlighted: 'SHA-256',
      },
    },

    hashing_four: {
      title: 'Các số không', // Zeroes
      nav_title: 'Tìm một chuỗi số mã hóa bắt đầu bàng số không', // Find a hash with a zero
      heading:
   'Nhập bất cứ ký tự gì cho đến khi bạn tìm thấy một chuỗi số mã hóa bắt đầu bằng số không (“0”)', // Enter anything until you find a hash that starts with a zero (“0”)
      hint_prompt:
   'Cần <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">gợi ý</Tooltip>?',      // Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">hint</Tooltip>?
      hint_tooltip:
   '<span className="text-m whitespace-nowrap leading-none text-white/50">Thử nhập:</span> <span className="whitespace-nowrap text-white">popcorn</span>',     // <span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">popcorn</span>
    },

    hashing_five: {
      title: 'Các số không', // Zeroes
      nav_title: 'Tăng tốc nào', // Turning up the heat
      heading: 'Không khó nhỉ!', // That wasn’t too hard!
      paragraph_one:
   'Hãy làm cho nó khó hơn một chút. Hãy thử tìm một chuỗi số mã hóa bắt đầu bằng hai số không ("00").',  // Let’s make it a bit more tricky. Try to find a hash that starts with two zeroes ("00").
    },

    hashing_six: {
      title: 'Các số không', // Zeroes
      nav_title: 'Tìm một số mã hóa có hai số không', // Find a hash with two zeroes
      heading:
   'Nhập bất cứ ký tự gì cho đến khi bạn tìm thấy một số mã hóa bắt đầu bằng hai số không (“00”)', // Enter anything until you find a hash that starts with two zeroes (“00”)
      hint_prompt:
   'Cần <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">gợi ý</Tooltip>?', // Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">hint</Tooltip>?
      hint_tooltip:
   '<span className="text-m whitespace-nowrap leading-none text-white/50">Thử nhập:</span> <span className="whitespace-nowrap text-white">trigonometry</span>',  // <span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">trigonometry</span>
    },

    scripting_one: {
      title: 'Tự động hóa', // Automation
      nav_title: 'Mã hóa con số chỉ sử dụng 1 lần (nonce)', // Hashing the nonce
      heading: 'Hãy để máy tính làm điều này cho chúng ta.', // Let’s make the computer do this for us.
      paragraph_one:
   'OK, có lẽ mất nhiều thời gian hơn bạn nghĩ. Bây giờ hãy tưởng tượng tìm một chuỗi số mã hóa bắt đầu bằng năm hoặc mười số không. Đây là thử thách mà mạng lưới bitcoin đặt ra cho máy(thợ) đào khi họ muốn gửi các khối dữ liệu lưu trữ các giao dịch mới.',// OK, that probably took you a lot longer. Now imagine finding a hash that starts with five or ten zeroes. This is the challenge that the bitcoin network poses to miners when they want to submit new blocks with transactions.
      paragraph_two:
   'Máy (thợ) đào thu thập tất cả thông tin mà họ muốn đưa vào một khối dữ liệu ví dụ như tiêu đề được mã hóa của khối dữ liệu đứng trước, số mã hóa của các giao dịch được chứa trong khối (bao gồm cả giao dịch trên sàn coinbase), và kết hợp của mốc thời gian với một số ngẫu nhiên được gọi là nonce (số chỉ được sử dụng một lần). Sau đó gửi tất cả những dữ liệu này vào hàm mã hóa để tạo ra mã hóa khối.',  // Miners gather all the information they want to put in a block such as the previous block header hash, a hash of transactions to be included in block (including the coinbase transaction), time, and combine it with a random number called a nonce (number only used once). They send all of this into the hash function to create something called the block hash.
      paragraph_three:
   'Khi bitcoin mới ra đời, máy(thợ) đào sẽ sử dụng xoay vòng số nonce trong tiêu đề khối bằng cách tăng dữ liệu trong trường 32 bit lên 1. Nhưng khi các máy đào trở nên hiện đại và hiệu quả hơn, độ khó sẽ tăng lên. Độ khó chẳng mấy chốc sẽ trở nên quá cao, đến mức thông thường nó sẽ vắt kiệt tất cả các khả năng tìm thấy một số nonce độc nhất trong trường 32 bit bên dưới',  // When bitcoin first launched, miners would cycle through the nonce in the block header by incrementing the data in the 32-bit field by 1. However, as miners become more powerful and efficient, the difficulty rises. Soon, it became so high that it was common to exhaust all possibilities for the 32-bit field without finding a single solution below the
      paragraph_four:
   'Để giải quyết vấn đề này, máy(thợ) đào bắt đầu thay đổi các phần khác của tiêu đề khối, chẳng hạn như mốc thời gian hoặc các giao dịch được chứa trong khối.',  // To address this, miners started to change other parts of the block header, such as the time or transactions included in the block.
      paragraph_five:
   'Mạng lưới bitcoin đã được cài đặt độ khó bên trong và chỉ chấp nhận các chuỗi số mã hóa khối bắt đầu bằng một lượng số không nhất định. Chúng ta gọi đây là “độ khó” và độ khó sẽ được điều chỉnh sau mỗi 2016 khối.', // The bitcoin network has a difficulty setting and only accepts block hashes that start with a certain number of zeroes. We call this the “difficulty” and it is adjusted every 2016 blocks.
      paragraph_six:
   'Trong thử thách tiếp theo, hãy viết một lệnh (script) để tìm một số mã hóa bắt đầu bằng năm số không (00000).', // For the next challenge, write a script that finds a hash that starts with five zeroes (00000).
      tooltip_one: {
 question: 'Độ khó mục tiêu là gì?', // What is target difficulty?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520is%2520target%2520difficulty%253F',
 highlighted: 'độ khó mục tiêu', // target difficulty
      },
    },

    scripting_two: {
      title: 'Tự động hóa', // Automation
      nav_title: 'Tạo lệnh mã hóa', // Build a hash function
      paragraph_one:
   'Bây giờ, đã đến lúc viết và chạy các lệnh mã của bạn. Viết một lệnh (script) tạo ra một chuỗi số mã hóa sha256 bắt đầu bằng năm số không ("00000..."). Lệnh của bạn nên có vòng lặp trong việc gọi hàm mã hóa sha256 cho các đầu vào khác nhau cho đến khi đầu ra đáp ứng yêu cầu. Bạn nên thử tăng một số nguyên trong một vòng lặp để có được các đầu vào khác nhau. Trong mật mã học, số này có thể được gọi là "nonce" hoặc "số chỉ được sử dụng một lần".',      // Alright, time to write and run your own code. Write a script that generates a sha256 hash that begins with five zeroes ("00000..."). Your code should repeatedly call the sha256 function with different inputs until the output satisfies this requirement. You should try incrementing an integer inside a loop to get different inputs. In cryptography this number may referred to as a "nonce" or "number used once".
      python: {
 paragraph_two:
   'Khi bạn tìm thấy một nonce với chuỗi mã hóa bắt đầu bằng năm số không, sau đó dùng lệnh để trả về nonce. Chúng ta sử dụng thư viện hashlib trong python để giúp tạo hàm này, bạn có thể sử dụng các tài nguyên khác bên ngoài sau để giúp viết lệnh này nếu cần:', // When you find a nonce with a hash that begins with five zeroes, return the nonce from the function. We are using the hashlib library in python to help you along in creating this function, you can use the following external resources to help you write this function if needed:
 list_one:
   '<Link href="https://docs.python.org/3/library/hashlib.html" target="_blank" className="underline">hashlib documentation</Link>',
 list_two:
   '<Link href="https://datagy.io/python-sha256/" target="_blank" className="underline">Tutorial python function</Link>',
      },
      javascript: {
 paragraph_two:
   'Khi bạn tìm thấy một nonce với chuỗi mã hóa bắt đầu bằng năm số không, dùng lệnh để trả về nonce đó. Chúng ta sử dụng thư viện crypto trong JavaScript để giúp bạn tạo hàm này, bạn có thể sử dụng các tài nguyên khác bên ngoài sau để giúp viết lệnh này nếu cần:',  // When you find a nonce with a hash that begins with five zeroes, return the nonce from the function. We are using the crypto library in JavaScript to help you along in creating this function, you can use the following external resources to help you write this function if needed:
 list_one:
   '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">crypto documentation</Link>',
 list_two:
   '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">Tutorial JavaScript function</Link>',
      },
    },

    mining_one: {
      title: 'Vào mỏ', // Into the mine
      nav_title: 'Khai thác(đào) các khối dữ liệu', // Mining blocks
      heading_one: 'Chúng ta đã biết cách khai thác(đào) khối, bây giờ hãy xem nó hoạt động như thế nào', // Now that we know how mining works, let’s see it in action
      heading_two: 'Bạn đang khai thác(đào) khối (đào)', // You’re mining now
      heading_three: 'Làm tốt lắm!', // Nice work!
      heading_four: 'Hãy đào 100 khối', // Let’s get to 100 blocks
      heading_five: 'Bạn đã làm được rồi đó!', // You did it!
      paragraph_one:
   'Hiện tại, mạng lưới bitcoin yêu cầu các khối phải có mã hóa với mười số không hàng đầu. Hãy bắt đầu thôi!', // Right now, the bitcoin network requires blocks to have a hash with ten leading zeroes. Let’s get to it!
      paragraph_two:
   'Đối với mô phỏng đơn giản này, chúng ta sẽ giả sử rằng mỗi khối chứa 3.500 giao dịch, có tiền thưởng (0,061 BTC) và phí giao dịch.', // For this simple simulation, we’ll just assume that every block contains 3,500 transactions and 0.061 BTC in rewards and fees.
      paragraph_two_one: 'Xem bạn có thể khởi động được các máy đào không.', // See if you can turn on the miners.
      paragraph_three:
   'Vòng lặp tính toán các chuỗi số mã hóa mà bạn đã viết lệnh mã hóa ở bài học trước đang thực thi.', // The code you wrote in the previous lesson to compute hashes over and over again is running.
      paragraph_four:
   'Nó sẽ dừng lại khi tìm thấy một số mã hóa có mười số không hàng đầu.', // It will stop once it’s found a hash with ten leading zeroes.
      paragraph_five:
   'Thấy trường nonce tăng dần không? Đó là số lượng chuỗi số mã hóa mà bạn đã thử cho đến giờ!', // See the nonce field incrementing? That’s how many hashes you have tried so far!
      paragraph_six: 'Với nonce sau:', // With the following nonce:
      paragraph_seven: 'Kết quả chuỗi mã hóa là:', // The resulting hash is:
      paragraph_eight:
   'Nó có mười số không hàng đầu thỏa yêu cầu để tạo các khối mới. Hãy khai thác(đào) khối thêm vài khối nữa.',  // It has the ten leading zeros that all new blocks require. Let’s mine a few more blocks.
      paragraph_eight_one: 'Khởi động lại các máy đào.', // Turn the miners back on.
      paragraph_nine:
   'Có thể mất thêm chút thời gian. Nhưng việc này cho bạn thấy việc khai thác(đào) khối dữ liệu và xác nhận giao dịch khó như thế nào.', // This might take some time. But this shows you how hard it is to mine blocks and confirm transactions.
      paragraph_ten:
   'Wow! Điều đó đã tiêu tốn khá nhiều sức mạnh tính toán để thực hiện tất cả các phép mã hóa đó. Chỉ cần nhìn vào số lượng nonce đã thử! Nó thực sự hữu ích khi có sự gia tăng sức mạnh mã hóa tức là số lượng mã hóa mà máy tính của bạn có thể thử trong một giây.', // Wow! That took quite a bit of computing power to do all that hashing. Just look how many nonces were tried! It really helped to have that boost in hash power i.e. the number of hashes your computer can try in a second.
      paragraph_eleven:
   'Theo dự đoán, vì mỗi khối chứa 3.500 giao dịch nên tổng cộng 350.000 giao dịch đã được xác nhận bởi 100 khối đã khai thác(đào) khối.', // As expected, since each block contains 3,500 transactions, a total of 350,000 transactions have been confirmed by the 100 blocks that were mined.
      paragraph_twelve:
   'Và bạn đã thu được một phần thưởng đáng kể cho việc khai thác(đào) khối các khối này! Ngoài phần thưởng, số lượng bitcoin mà mạng lưới thưởng cho mỗi khối, bạn cũng đã có thêm thu nhập dưới dạng phí giao dịch.', // And it looks like you’ve collected a nice reward for all this mining! In addition to the block subsidy, the amount of bitcoin the network rewards for each block, you’ve also been able to collect additional income in the form of transaction fees. 
      paragraph_thirteen:
   'Nhưng nhớ rằng, đây chỉ là một mô phỏng, nên trung bình mỗi khối được tạo và được xác nhận cho là mất 10 phút.', // Remember, this was just a simulation, each block is supposed to take 10 minutes on average.
      paragraph_fourteen:
   'Bên cạnh đó, nếu thực sự khai thác(đào) khối trên mạng lưới chính (mainnet) hiện tại, sẽ cần sức mạnh tính toán lớn hơn với cấp số nhân để khai thác(đào) khối các khối này.', // Also, if we were really mining on the current mainnet it would take many orders of magnitude more computing power to mine these blocks.
      progress_bar_title: 'Các khối đã tìm được', // Blocks found
      progress_bar_one: 'Nonce', // Nonce
      progress_bar_two: 'Các số mã hóa mỗi giây', // Hashes per second
      progress_bar_three: 'Các giao dịch đã xác nhận', // Transactions confirmed
      progress_bar_four: 'Bitcoin kiếm được', // Bitcoin earned
      button_hash: 'Tăng sức mạnh mã hóa lên gấp 10 (x10)', // 10x hash power, please
      ten_x_hint: 'Nhấn nút x100 để tăng tốc độ mã hóa!', // Tap the 100x button to speed up the hashing!
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Chương hoàn thành', // Chapter complete
      heading: 'Tuyệt vời!', // Great Job!
      paragraph_one:
   'Những chiếc máy hoạt động ầm ĩ. Mọi thứ dường như đang hoạt động lại. Một bản đồ xuất hiện trên màn hình cũ kỹ cho thấy vị trí của các nhà kho khác chứa đầy các thiết bị khai thác(đào) khối của gia đình Vanderpoole cũ đã được đưa trực tuyến trên toàn thế giới. Có vẻ như chúng đã được kích hoạt khi bạn hoàn thành thử thách khai thác(đào) khối!',  // The machines roar to life. Everything seems to be working. A map appears on the old monitor that shows the locations of other warehouses filled with old Vanderpoole family mining devices that have come online across the world. Looks like they were activated when you completed the mining challenge!
      paragraph_two:
   '—HOLOCAT: “Nhìn kìa, có tin nhắn.”', // —HOLOCAT: “Look, there’s a message.”
      paragraph_three:
   '“Làm tốt lắm. Việc này sẽ giúp bitcoin trở lại quy trình một khối mỗi mười phút.” – Satoshi Nakamoto', // “Good work. This will help bitcoin get back to one block every ten minutes.” – Satoshi Nakamoto
      paragraph_four: 'Lại là ông ta?', // Him again?
    },
    resources: {
      hashing_two: {
 hash_functions_heading: 'Hàm mã hóa', // Hash Functions
 hash_functions_paragraph:
     'Hàm mã hóa là một lệnh mã hóa bất kỳ được sử dụng để chuyển đổi chuỗi dữ liệu có kích thước tùy ý thành chuỗi giá trị có kích thước cố định. Các kết quả được trả về bởi hàm mã hóa được gọi là giá trị mã hóa, (chuỗi) số mã hóa, hay đơn giản là mã hóa. Các số mã hóa thường được sử dụng để lập chỉ mục cho một bảng có kích thước cố định được gọi là bảng mã hóa. Việc sử dụng hàm mã hóa để lập chỉ mục cho bảng mã hóa được gọi là quy trình mã hóa hoặc quy định địa chỉ lưu trữ phân tán.',  // A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are usually used to index a fixed-size table called a hash table. Use of a hash function to index a hash table is called hashing or scatter storage addressing.
 tip: 'Cứ tiếp tục nhập! Vì thuật toán SHA-256 sẽ chuyển đổi bất kỳ dữ liệu đầu vào mới để tạo ra một số mã hóa hoàn toàn ngẫu nhiên ngay cả khi các dữ liệu đầu vào rất giống nhau',  // Just keep typing! Because of the SHA-256 algorithm any new input will result in a completely random hash even if the inputs are very similar
 spoiler: 'Thử nhập chuỗi có 8 ký tự.', // Try something with 8 characters.
      },
      hashing_four: {
 power_of_random_heading: 'Sức mạnh ngẫu nhiên', // The Power of Random
 power_of_random_paragraph:
     "Giống như một sự kiện ngẫu nhiên hoàn toàn, về mặt xác suất, hàm mã hóa SHA-256 sẽ cho ra một giá trị hoàn toàn ngẫu nhiên đối với mỗi lần cung cấp dữ liệu đầu vào mới. Nếu bạn mã hóa cuốn tiểu thuyết 'Chiến tranh và Hòa bình', sau đó chỉ cần thêm một chữ cái nữa vào văn bản gốc, nó sẽ tạo ra một số mã hóa hoàn toàn khác. Mỗi ký tự mới thay đổi mã hóa theo một cách hoàn toàn ngẫu nhiên. Vậy với 16 ký tự có thể có trong hệ thập lục phân (0-9 và a-f), khả năng tìm thấy một số mã hóa bắt đầu bằng '0' là bao nhiêu?", // Like a perfectly random scenario, probability-wise the SHA-256 hash function is completely random for each addition of new data. If you hashed the novel 'War and Peace', then added just one extra letter to the original text, it would result in a completely different hash. Each new character changes the hash in a completely random manner. Considering that there are 16 possible characters in a hexadecimal system (0-9 and a-f), how likely is it to find a hash starting with '0'?
 tip: "Bạn tính ra không? Dựa trên 16 ký tự có thể có cho mỗi chữ số, bạn nghĩ khả năng tìm thấy một số mã hóa bắt đầu bằng '00' là bao nhiêu? Còn '000' thì sao?",  // Can you do the math? Based on 16 possible characters per digit, what do you think the likelihood of finding a hash starting with '00' is? How about '000'?
 spoiler: "Thử nhập thứ gì đó bắt đầu bằng chữ cái 's'.", // Try something starting with the letter 's'.
      },
      hashing_six: {
 collision_resistance_heading: 'SHA256 và khả năng chống lặp dữ liệu', // SHA256 and collision resistance
 collision_resistance_paragraph:
     "SHA-256 trả về một giá trị mã hóa 256 bit (64 ký tự), là một biểu diễn duy nhất của dữ liệu đầu vào. Nó thuộc họ các hàm mã hóa dựa trên cấu trúc Merkle–Damgård, một phương pháp để xây dựng các hàm mã hóa từ các hàm nén đơn giản hơn. Trong cấu trúc này, thông điệp đầu vào được chia thành các khối có kích thước cố định và một cơ chế liên kết tuần hoàn xử lý các khối này, kết hợp đầu ra của mỗi khối với kết quả của khối trước đó. Quá trình này tiếp tục cho đến khi toàn bộ thông điệp được xử lý, tạo ra giá trị mã hóa cuối cùng. Các thuộc tính bảo mật cao và khả năng kháng cự của SHA-256 trở thành nền móng của tính toàn vẹn dữ liệu và tính xác thực trong mật mã học hiện đại.",  // SHA-256 returns a 256-bit (64-characters) hash value, which is a unique representation of the input data. It belongs to the family of hash functions based on the Merkle–Damgård construction, a method for building hash functions from simpler compression functions. In this construction, the input message is divided into fixed-size blocks, and a chaining mechanism iteratively processes these blocks, combining each block's output with the result of the previous block. This process continues until the entire message is processed, producing the final hash value. SHA-256's robust security properties and collision resistance make it a cornerstone of data integrity and authentication in modern cryptography.
 tip: 'Không có gợi ý trong bài học này, từ nay khi bạn tiếp tục chương trình Saving Satoshi, chúng tôi sẽ ít hỗ trợ hơn để bạn tự tìm ra giải pháp cho vấn đề trong bài học.', // No real tips in this lesson, as you continue in Saving Satoshi we will hold your hand less and less and let you find the solution on your own.
 spoiler:
     "Biết là mỗi ký tự mới sẽ tính toán lại và cho một số mã hóa hoàn toàn ngẫu nhiên, bạn có thể tiếp tục thêm các ký tự mới cho đến khi bạn bắt đầu bằng '00' hoặc nhiều hơn ... hoặc thử từ 'trigonometry'.", // Knowing that each new character recalculates a completely random hash you could keep adding new characters until you start with '00' or more... or try the word trigonometry.
      },
      scripting_one: {
 hash_libraries_heading: 'Thư viện mã hóa', // Hash Libraries
 hash_libraries_paragraph:
     'Thư viện crypto trong Node.js và thư viện hashlib trong python là các thư viện mã hóa thực hiện các thuật toán mà chúng ta sẽ sử dụng để tạo thành các công cụ hữu ích cho lập trình viên. Các thư viện này đã được kiểm tra kỹ lưỡng để đảm bảo độ chính xác và bảo mật vì nhiều người dựa vào chúng để bảo mật các hệ thống có giá trị và quan trọng.',  // The crypto library in Node.js and the hashlib library in python are the code libraries that implement the algorithms we will use into useful tools for developers. These libraries are thoroughly vetted to ensure their accuracy and security as many people rely on them to secure valuable and important systems.
 nonce_heading: 'Nonce', // Nonce
 nonce_paragraph:
     "Nonce, viết tắt của (số chỉ được sử dụng một lần) là một số ngẫu nhiên hoặc bán ngẫu nhiên được sử dụng trong các quy trình mã hóa và tính toán khác nhau. Mục đích chính của nó là giới thiệu thuộc tính không thể đoán trước và đảm bảo rằng một hoạt động hay tính toán cụ thể không thể dễ dàng lặp lại hoặc dễ dàng dự đoán. Nonce rất quan trọng đối với việc bảo mật trong quy trình khai thác(đào) khối bitcoin nhưng chúng ta sẽ tìm hiểu thêm về điều đó sau...", // "Nonce, short for (number used once) is a random or semi-random number that is employed in various cryptographic and computational processes. Its primary purpose is to introduce unpredictability and ensure that a particular operation or calculation can't be easily repeated or predicted. The nonce is critical to the security of bitcoin mining but we will learn more about that later..."
 tip_one:
     'Để đảm bảo giải mã chính xác các đầu vào. Các thuật toán mã hóa thường trả về các đối tượng giải mã dưới định dạng byte, nhưng chúng ta muốn có thể đọc nó ở định dạng hex (hệ thập lục phân)!', // Ensure you are properly decoding the inputs. The hashing algorithms often return objects decoded in bytes, but we want to be able to read it in hex format!
 tip_two:
     'Hãy suy nghĩ về cách tạo một lệnh để tiếp tục chạy cho đến khi tìm được câu trả lời bằng với một giá trị cụ thể', // Think about how you would create a function to keep running until that answer is equal to a specific value
 tip_three:
     'Nhớ ghi lại câu trả lời của bạn bằng <span className="p-1 font-mono bg-[#0000004D] m-1">console.log()</span> hoặc <span className="p-1 font-mono bg-[#0000004D] m-1">print()</span>. Đây là cách duy nhất chương trình (IDE) của chúng tôi xác thực câu trả lời của bạn.', //Remember to log your answer with <span className="p-1 font-mono bg-[#0000004D] m-1">console.log()</span> or <span className="p-1 font-mono bg-[#0000004D] m-1">print()</span>. It is the only way our IDE will try to validate your answer.
      },
      mining_one: {
 mining_heading: 'Khai thác(đào)', // Mining
 mining_paragraph:
     "Khai thác(đào) là nơi tất cả các khái niệm này kết hợp lại. Khai thác(đào) Bitcoin là quá trình tạo ra bitcoin mới và thêm các giao dịch vào chuỗi khối dữ liệu Bitcoin (Bitcoin blockchain). máy(thợ) đào cạnh tranh với nhau để giải các câu đố toán học phức tạp bằng cách tìm ra một 'nonce' duy nhất, và hợp lệ trong mỗi khối giao dịch. Quá trình kiểm chứng bằng công việc  (proof-of-work) này đòi hỏi sức mạnh tính toán và năng lượng đáng kể, sử dụng năng lượng này để xác thực các giao dịch một cách bảo mật an toàn và phi tập trung (không qua trung gian). máy(thợ) đào thành công trong quy trình được thưởng bằng chính bitcoin mới được khai thác(đào) khối cộng thêm phí trả từ người tham gia giao dịch, đồng thời máy(thợ) đào đóng một vai trò quan trọng trong việc duy trì tính toàn vẹn của mạng lưới bitcoin.", // Mining is where these concepts all come together. Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain. Miners compete to solve complex mathematical puzzles by finding a unique, valid 'nonce' in each block of transactions. This proof-of-work process demands significant computational power and energy, making it a secure and decentralized way to validate transactions. Successful miners are rewarded with newly minted bitcoins and transaction fees, and they play a critical role in maintaining the integrity of the bitcoin network.
 difficulty_heading: 'Độ khó', // Difficulty
 difficulty_paragraph:
     'Độ khó trong khai thác(đào) khối là yếu tố duy trì công suất trung bình khai thác(đào) khối (dữ liệu) ở mức 10 phút một khối mới.', // The mining difficulty is what allows the block to remain at an average of 10 minutes between each new block.
 spoiler:
     'Không có bí mật gì! Chỉ cần tiếp tục đọc bài học này. Sẽ có nhiều cơ hội để sử dụng kiến ​​thức của bạn về khai thác(đào) khối trong các bài học mới!', // Nothing to spoil! Just go ahead and read through this lesson. There will be more opportunities to show off your  mining knowledge in future lessons!
      },
    },
  },
  chapter_three: {
    title: 'Khả năng 51% tấn công mạng lưới', // The 51% Attack
    paragraph_one:
 'Bạn nhập địa chỉ vào trình duyệt chuỗi khối và thấy rằng các khối đã xuất hiện trở lại khoảng thời gian 10 phút. Bằng cách nào đó, con mèo ngủ say sưa bên cạnh mặc cho tiếng ồn từ tất cả các máy đào ASIC.', // You enter the address of a block explorer and see that blocks are back to ten minute intervals. Somehow,con mèo sleeps through the noise from all the ASICs.
    paragraph_two:
 'Đúng là mèo. Đâu có thể làm gì khác?', // Cats. What can you do?
    paragraph_three:
 'Tuy nhiên, có điều gì đó không ổn. Các khối trống rỗng và các giao dịch không được xử lý. Bạn đã mắc lỗi? Có thể đây là một sự trùng hợp? Một thông báo khác xuất hiện trên màn hình máy tính, đánh thức con mèo.',     // However, something is off. The blocks are empty, and transactions aren’t processing. Did you make a mistake? Could this be a coincidence? Another message pops up on the computer screen, waking con mèo.
    paragraph_four:
 'Không phải trùng hợp đâu.', // It’s not a coincidence.

    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Xử lý mã hóa', // Hashing it out
      paragraph_one:
   '—SATOSHI NAKAMOTO: “Này, bạn ơi! Đúng rồi, bạn đó! Nhớ tôi chứ? Bitcoin hiện đang bị 51% tấn công! Sau khi bạn đưa các thiết bị khai thác(đào) khối trực tuyến, Vanderpoole đã bật lại các ASIC của BitRey và đang khai thác(đào) khối các khối trống. Vấn đề là không chỉ có máy của ông ta. Ông ta đã sử dụng cửa sau trên phần mềm nhúng tiêu chuẩn của các thiết bị ASIC để truyền nhiễm virus cho các máy đào hiện có, chặn việc khai thác(đào) khối dữ liệu với bất cứ ký tự gì ngoại trừ các khối trống. Ông ta đang cố gắng bắt cóc tống tiền hệ sinh thái bitcoin để buộc mọi người ủng hộ ý tưởng tăng nguồn cung bitcoin. Hãy làm gì đó đi chứ, chàng khờ!”', // —SATOSHI NAKAMOTO: “Hey, you! Yeah, you! Remember me? Bitcoin is being hit with a 51% attack right now! After you brought those mining devices online, Vanderpoole turned BitRey’s ASICs back on and is mining empty blocks. The problem is it’s not just his machines. He used a backdoor on the standard ASIC firmware to infect existing miners with a virus that prevents them from mining anything but empty blocks. He’s trying to hold the bitcoin ecosystem hostage and force people to support the idea of increasing bitcoin’s supply. Do something, dingdong!”
      paragraph_two:
   'Máy tính cũ khạc ra một đám bụi, sau đó tạo ra một tập dữ liệu được gọi là "bảng tính" chứa thông tin liên hệ của một số máy(thợ) đào bitcoin lớn nhất, cũng như bản vá cho virus. Bạn có thể gửi bản vá cho các máy(thợ) đào khác càng sớm, họ càng nhanh chóng có thể giành lại quyền kiểm soát máy đào của mình và tham gia cuộc chiến chống lại BitRey.',// The old computer coughs up a cloud of dust, then produces a wad of data called a “spreadsheet” that contains contact info for some of the largest bitcoin miners, as well as a patch for the virus. The sooner you can get the patch to other miners, the sooner they can regain control of their machines and join your fight against BitRey.
      paragraph_three:
   '—HOLOCAT: “Chúng ta có nhiều việc phải làm hơn rồi. Ồ, bạn làm đi. Tôi sẽ đi bắt vài con chuột đây.”',  // —HOLOCAT: “We’ve got more work to do. Well, you do. I’m gonna run through walls and scare mice.”
    },

    solo_one: {
      title: 'Bạn chống lại BitRey', // You vs. BitRey
      nav_title: 'Khai thác(đào) một mình', // Mining alone
      step_zero_heading: 'Hãy thử xem', // Let’s give it a try
      step_zero_paragraph_one:
   'Trong khi chờ đợi các máy(thợ) đào mà bạn đã tiếp cận, bạn quyết định xem liệu BitRey có thể bị đánh bại một mình hay không. Có lẽ bạn có thể chấm dứt việc đào các khối trống mà không cần bất kỳ sự trợ giúp nào. Đây là cách xếp hạng mã hóa của bạn. Theo bạn nghĩ, điều này sẽ diễn ra như thế nào?',  // While you’re waiting for the miners you reached out to, you decide to see if BitRey can be fended off alone. Maybe you can put an end to the empty blocks without any help. Here’s how your hash rate stacks up. How do you think this will go?
      step_one_heading: 'Chúng ta đang trong cuộc đua rồi', // We’re off to the races
      step_one_paragraph_one:
   'Hãy khai thác(đào) 100 khối để xem bạn xếp hạng như thế nào so với BitRey.', // We’re now mining 100 blocks to see how many you stack up against BitRey.
      step_two_heading: 'Tình hình có vẻ không tốt rồi!', // That didn't go well!
      step_two_paragraph_one:
   'Ôi trời, chúng ta không có đủ sức mạnh mã hóa để cạnh tranh với BitRey và các máy(thợ) đào bị nhiễm virus. Hãy xem liệu chúng ta có thể đánh bại BitRey trong 100 khối tiếp theo kết hợp cùng với các máy(thợ) đào khác hay không. Mạng Bitcoin đã hoạt động được hơn một thế kỷ và sẽ không dễ bị ngừng lại khi bị tấn côngcông.', // Yikes, we just don’t have enough hashpower to compete with BitRey and the virus-controlled miners. Let’s see if we can defeat BitRey for the next 100 blocks with the other miners. Bitcoin has been running for over a century and it’s not going down without a fight.
    },

    mỏ_one: {
      title: 'Mỏ khai thác(pool) chống lại BitRey', // Pool vs. BitRey
      nav_title: 'Tìm kiếm đồng minh', // Finding friends
      waiting_screen_heading: 'Chúng ta cần sự hỗ trợ!', // We need support!
      waiting_screen_paragraph_one: `Các máy đào của bạn hiện tại trong nhà kho hoàn toàn không có cơ hội chống lại. Nhưng nếu kết hợp sức mạnh mã hóa của mình với các máy(thợ) đào khác, bạn có cơ may giữ vững kế hoạch chống lại cuộc tấn công của BitRey.`,// Your miners in the warehouse don’t stand a chance. If you combine your hash power with other miners, you might be able to hold the line against BitRey's assault.
      waiting_screen_paragraph_two:
   'Chờ những người khác cùng mục tiêu tham gia vào kế hoạch của bạn để chúng ta có thể kết hợp củng cố lực lượng.', // Let’s wait until the others join your cause so we can combine forces.
      waiting_button: 'Đang chờ...', // Waiting...
      continue_button: "Đi nào", // Let’s go
    },

    mỏ_two: {
      title: 'Mỏ khai thác(pool) chống lại BitRey', // Pool vs. BitRey
      nav_title: 'Khai thác(đào) cùng nhau', // Mining together
      step_zero_heading: 'Bắt đầu', // Here we go
      step_zero_paragraph_one:
   'Bằng việc kết hợp sức mạnh mã hóa của bạn với các máy(thợ) đào khác, bạn nghĩ có thể chống lại BitRey không?', // By mỏing your hashrate with other miners, can you stand up to BitRey?
      step_two_heading: 'Lại thất bại rồi!', // Another defeat!
      step_two_paragraph_one:
   'Có điều gì đó không đúng. Chỉ có Hashrate Hoppers tìm thấy khối. Tại sao điều đó có thể xảy ra vậy?', // Something is wrong. Only Hashrate Hoppers found blocks. Why do you think that might be?
    },

    coop_one: {
      title: 'Liên minh chống lại BitRey', // Coop vs. BitRey
      nav_title: 'Có điều gì đó không ổn', // Something went wrong
      heading: 'Có điều gì đó không đúng.', // Something is not quite right yet.
      paragraph_one:
   'Hashrate Hoppers, người có sức mạnh mã hóa lớn nhất, đang khai thác tất cả các khối nhưng những người khác thì không.',  // Hashrate Hoppers, the one with the most hash power, is finding all your blocks but others find nothing.
      paragraph_two:
   'Vấn đề là tất cả mọi người đều cùng kiểm tra xác thực một nonce khi họ đang khai thác(đào) khối. Vậy làm thế nào để các đồng minh phối hợp tốt hơn?',  // The problem is that everyone is checking the same nonces while they’re mining. How can you better coordinate?
      paragraph_three:
   'Bạn quyết định đặt một trình duyệt xác định “extraNonce” duy nhất trong khi chuẩn bị dữ liệu khối cho mỗi đồng minh để ngăn chặn các nỗ lực trùng lặp.', // You decide to place a unique identifier in the “extraNonce” when preparing the block data for each of you to prevent duplicate efforts.
    },

    coop_two: {
      title: 'Liên minh chống lại BitRey', // Coop vs. BitRey
      nav_title: 'ExtraNonce', // The extraNonce
      heading: 'ExtraNonce là gì?', // What is the extraNonce?
      paragraph_one:
   'Đối với giao thức khai thác(đào) khối Stratum (không phải giao thức bitcoin), giao dịch coinbase cũng có một thứ gọi là “extra nonce”. Khi cung cấp cho máy(thợ) đào dữ liệu khối, các mỏ khai thác(đào) khối chia extra nonce thành hai phần: “extranonce1” và “extranonce2”.',// For the Stratum mining mỏ protocol (not bitcoin protocol), the coinbase transaction also has something called the “extra nonce”. When providing miners with the block data, mining mỏs divide the extra nonce into two parts: “extranonce1” and “extranonce2”.
      paragraph_two:
   'Việc chia extra nonce thành hai phần có một số lợi thế:', // Splitting the extra nonce into two parts has several advantages:
      list_one: 'Nó chặn những người tham gia mỏ thực hiện cùng một công việc.', // It prevents mỏ participants from doing the same work.
      list_two:
   'Nó cho phép mỏ gửi cùng một danh sách giao dịch cho tất cả các máy(thợ) đào đang cùng khai thác(đào) khối. Điều đó có nghĩa là máy(thợ) đào chỉ cần cập nhật “extranonce2” và không thay đổi các giao dịch được bao gồm trong khối.', // It allows the mỏ to send the same transaction list to all miners that are mỏing together. That means miners simply have to update “extranonce2” and not change transactions included in the block.
      list_three:
   '“extranonce1” cho phép các mỏ xác minh và quyết định góp cổ phần vì mỗi máy(thợ) đào đều có “extranonce1” riêng của mình.', // The “extranonce1” allows mỏs to identify and determine share contribution because each miner gets their own “extranonce1”.
      paragraph_three:
   'Các máy(thợ) đào đóng góp vào một mỏ cập nhật “extranonce2” và lặp qua nonce trong tiêu đề khối. Nếu họ không tìm thấy giải pháp, họ sẽ lặp lại quy trình với “extranonce2” khác cho đến khi tìm thấy.', // Miners who contribute to a mỏ update the “extranonce2” and cycle through the nonce in the block header. If they don’t find a solution, they repeat the process with a different “extranonce2” until they do.
      paragraph_four: 'Chúng ta hãy thử lại với cách chia sẻ công việc bằng phương pháp này.', // Let’s try again splitting the work using this method.
    },

    coop_three: {
      title: 'Liên minh chống lại BitRey', // Coop vs. BitRey
      nav_title: 'Khai thác(đào) cùng nhau', // Mining together
      step_zero_heading: 'Thử lại lần nữa nào...', // One more time...
      step_zero_paragraph_one:
   'Xem liệu chúng ta có thể chống lại BitRey không với cải thiện mới trong chiến lược chia sẻ nonce của chúng ta.', // Let’s see if we stand a chance against BitRey now with our improved strategy of dividing the nonce space.
      step_two_heading: 'Bạn đã thành công rồi!', // You did it!
      step_two_paragraph_one:
   'Cùng nhau, bạn và các thợ đào khác đã ngăn chặn được nỗ lực chiếm lĩnh mạng lưới của BitRey.',// Together you and the other miners held back BitRey’s attempt to overtake the network.
    },

    split_one: {
      title: 'Chia phần thưởng', // Splitting Rewards
      nav_title: 'Phân chia công bằng', // Splitting the fair share
      heading: 'Làm tốt lắm!', // Nicely done.
      paragraph_one:
   'Bạn không chỉ bảo vệ mạng lưới Bitcoin khỏi BitRey mà còn được thưởng bitcoin!', // Not only did you defend the network against BitRey, you also earned bitcoin as a reward!
      paragraph_two:
   'Đối với mỗi khối được khai thác(đào), thợ đào sẽ nhận được phần thưởng bằng bitcoin. Nếu nhiều người cùng khai thác 1 khối, nhóm thợ đào(pool) sẽ chia sẻ phần thưởng đó.', // For every block that is mined, the miner gets a reward in bitcoin. If more than one person worked on the block, the group of miners (mining mỏ) gets a reward to share.
      paragraph_three: 'Phần thưởng này bao gồm hai thứ:', // This reward is made up of two things:
      list_one: 'phí cho tất cả các giao dịch trong khối', // fees for all the transactions in the block
      list_two: 'trợ cấp khối', // the block subsidy
      paragraph_four:
   'Bạn và những người bạn (thợ đào) của mình đã kiếm được tổng cộng 7,41 bitcoin và đang tìm kiếm cách tốt và hợp lý nhất để chia phần thưởng này. Nó nên được chia dựa trên lượng công việc mà mỗi người đã thực hiện.',// You and your miner friends have earned a total of 7.41 bitcoin and are looking for a good way to split it up. It should be divided based on how much work each of you put in.
      paragraph_five:
   'Các mỏ khai thác khối giải quyết vấn đề này bằng cách theo dõi số lượng phần trăm giải pháp cung cấp tạo ra trên mỗi thợ đào. Một mỏ gán cho mỗi thợ(máy) đào một độ khó tối thiểu (thấp hơn độ khó của khối) dựa trên sức mạnh mã hóa của họ. Cứ sau vài giây, một máy(thợ) đào sẽ dễ dàng tìm thấy một trong những giải pháp đó hơn và thông báo cho mỏ. Sau đó, mỏ theo dõi tất cả các phần của giải pháp đã gửi và chia phần thưởng tương ứng.', // Mining mỏs solve this problem by tracking how many partial solutions each miner has generated. A mỏ assigns each miner a minimum difficulty (lower than the block difficulty) based on their hash power. Every few seconds a miner finds one of those easier solutions and notifies the mỏ. The mỏ then tracks all the submitted shares and splits up the block rewards accordingly.
      paragraph_six: 'Hãy cùng xem điều này qua hành động nhé.', // Let’s take a look at this in action.
    },

    split_two: {
      title: 'Chia phần thưởng', // Splitting Rewards
      nav_title: 'Tính toán số phần thưởng', // Calculating rewards
      step_zero_heading: 'Hãy xem lại công sức nỗ lực của mọi người tham gia', // Let’s review everyone’s efforts
      step_zero_paragraph:
   'Chúng ta xem lại trận chiến này. Lần này chỉ tập trung vào mỏ của chúng ta, cụ thể là số phần trăm giải pháp mã hóa được tìm thấy tương ứng của mỗi máy(thợ) đào.', // We will re-run the battle. This time we will only focus on the number of partial solutions each miner found.
      step_two_heading: 'Hãy làm phép tính nào', // Let’s do the math
      step_two_paragraph:
   'Hãy đánh giá các số liệu ở trên và xem liệu bạn có thể tìm ra một cách công bằng để chia phần thưởng. Bạn đã tìm ra chưa? Cùng xem xét qua từng bước.',  // Take a look at the numbers above and see if you can find a fair way to split up the rewards. Figured it out? Let’s go over it step by step.
      step_three_heading: 'Tỷ lệ (phần trăm) sức mạnh mã hóa', // Hash rate percentage
      step_three_paragraph:
   'Như đã biết, đây đại diện cho lượng công việc mà mỗi máy(thợ) đào đã đóng góp để tìm ra các khối. Nhưng mỏ khai thác(pool) khối không có cách nào để biết hoặc đo lường số này, vì máy(thợ) đào chỉ chuyển tiếp các giải pháp thành công.',// As you know, this represents the amount of work every miner has chipped in to find blocks. But the mining mỏ has no way of knowing or measuring this number, since miners only forward successful solutions.
      step_four_heading: 'Tỷ lệ (phần trăm) khối được tìm thấy', // Block found percentage
      step_four_paragraph:
   'Khả năng tìm thấy một khối rất thấp vì có rất nhiều yếu tố liên quan đến may mắn. Đặc biệt trong các kịch bản với một số máy(thợ) đào cực kỳ mạnh, các máy(thợ) đào thực sự nhỏ có thể đóng góp công việc nhưng không bao giờ tìm thấy bất kỳ khối nào.',// The chance of finding a block is very low since it has a lot to do with luck. Especially in scenarios with some extremely powerful miners, the really small miners may contribute work but never find any blocks. 
      step_five_heading: 'Tỷ lệ (phần trăm) giải pháp mã hóa', // Partial solution percentage
      step_five_paragraph:
   'Bây giờ con số này sẽ hoạt động. Các máy(thợ) đào báo cáo các giải pháp mã hóa dễ dàng và thường xuyên hơn cho các mỏ(pool). Điều đó cho phép các mỏ(pool) đo lường khá chính xác lượng kết quả công việc của mỗi máy(thợ) đào đã cung cấp.', // Now this number will work. Miners report these solutions to easier problems regularly to mỏs. That allows mỏs to measure fairly accurately how much work each miner has provided.
      step_six_heading: 'Chia phần thưởng', // Splitting the rewards
      step_six_paragraph:
   'Bây giờ chúng ta có thể lấy phần thưởng 7,41 bitcoin và chia theo tỷ lệ (phần trăm) giải pháp mã hóa của mỗi mỏ(pool). Xin chúc mừng!',// Now we can take the rewards of 7.41 bitcoin and split them up according to the percentage of partial solutions of each mỏ. Congratulations!
    },

    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter complete
      heading: 'Hạ gục Vanderpoole!', // Take that, Vanderpoole! 
      paragraph_one:
   'Tuyệt vời! Bạn và các máy(thợ) đào khác đã có thể đẩy lùi cuộc tấn công 51% của Vanderpoole bằng cách hợp lực các tài nguyên của mình. Các khối trống đã không còn được gửi nữa và có vẻ như ông ta đã từ bỏ âm mưu.', // Great work! You and the other miners were able to fend off Vanderpoole’s 51% attack by mỏing your resources. Empty blocks are no longer being submitted and it looks like he’s given up.
      paragraph_two:
   'Đã đến lúc gặt hái phần thưởng! Chuyển sang chương tiếp theo để rút bitcoin của bạn.', // It’s time to reap your rewards! Go to the next chapter to withdraw your bitcoin.
    },
    resources: {
      solo: {
 hashrate_heading: 'Tốc độ mã hóa của việc khai thác(đào) khối', // Mining Hashrate
 hashrate_paragraph:
     "Tốc độ mã hóa của một máy(thợ) đào riêng lẻ đề cập đến sức mạnh tính toán mà họ đóng góp cho quá trình khai thác(đào) khối mạng lưới bitcoin. Đó là tốc độ mà phần cứng khai thác(đào) khối của họ có thể thực hiện các phép tính toán cần thiết để cố gắng khai thác(đào) các khối mới. Tốc độ mã hóa của một máy(thợ) đào riêng lẻ thường được đo bằng số mã hóa mỗi giây hoặc ở quy mô terahash, một nghìn tỷ mã hóa mỗi giây (TH/s), tùy thuộc vào quy mô hoạt động khai thác(đào) và khả năng của phần cứng dùng để khai thác(đào) của họ.", // An individual miner's hashrate refers to the computational power they contribute to the bitcoin network's mining process. It is the rate at which their mining hardware can perform the necessary mathematical calculations to attempt to mine new blocks. The hashrate of an individual miner is typically measured in hashes per second, or at scale in terahashes, one-trillion hashes per second (TH/s), depending on the scale of their mining operation and the capabilities of their mining hardware.
      },
      mỏ: {
 mỏ_heading: 'Mỏ khai thác khối(pool)', // Mining Pool
 mỏ_paragraph:
     'Mỏ khai thác(pool) đóng một vai trò quan trọng trong việc khai thác(đào) tiền mã hóa, mang lại một số lợi ích chính cho các máy(thợ) đào cá nhân. Bằng cách tập hợp sức mạnh tính toán và tài nguyên của nhiều người tham gia, các mỏ khai thác(pool) tăng cường cơ hội khai thác(đào) thành công các khối mới, dẫn đến thu nhập ổn định và nhất quán hơn. Các mỏ cũng cung cấp một nền tảng cho các máy(thợ) đào để truy cập vào thiết bị khai thác(đào) tiên tiến và hỗ trợ chuyên gia, giảm bớt rào cản gia nhập và san bằng sân chơi. Hơn nữa, các mỏ khai thác(pool) giúp phân phối phần thưởng hiệu quả, đảm bảo rằng các máy(thợ) đào nhận được phần thưởng công bằng cho những đóng góp của họ, làm cho việc khai thác(đào) tiền mã hóa trở nên dễ tiếp cận, ổn định và mang lại lợi nhuận tài chính cho một cộng đồng người tham gia rộng lớn hơn.',  // A mining mỏ plays a pivotal role in cryptocurrency mining, offering several key benefits to individual miners. By mỏing together the computational power and resources of many participants, mining mỏs enhance the chances of successfully mining new blocks, resulting in more predictable and consistent earnings. They also provide a platform for miners to access advanced mining equipment and expert support, reducing barriers to entry and leveling the playing field. Furthermore, mining mỏs help distribute rewards efficiently, ensuring that miners receive their fair share for their contributions, making cryptocurrency mining accessible, stable, and financially rewarding for a broader community of participants.
      },
      coop: {
 distribution_heading: 'Phân bổ công việc', // Job Distribution
 distribution_paragraph:
     "Các mỏ khai thác(pool) thực hiện các biện pháp phòng ngừa để đảm bảo rằng những người tham gia của họ không khai thác(đào) cùng một nonce cho cùng một khối. Điều này rất quan trọng bởi vì, trong quá trình khai thác(đào) bitcoin, các máy(thợ) đào cạnh tranh để tìm một nonce hợp lệ trong mỗi khối giao dịch. Nếu hai máy(thợ) đào trong cùng một mỏ làm việc trên cùng một nonce đồng thời, điều đó sẽ không hiệu quả và chỉ một người sẽ nhận được phần thưởng khối. Để ngăn chặn điều này, các mỏ khai thác(pool) sử dụng một quy trình gọi là 'giao việc' hoặc 'phân phối công việc' để phân bổ công việc hiệu quả. Các mỏ khai thác(pool) phân phối công việc cho từng máy(thợ) đào hoặc người tham gia. Khi cần khai thác(đào) một khối mới, máy chủ của mỏ (hoặc nhà điều hành mỏ khai thác) tạo ra một 'công việc' duy nhất cho các máy(thợ) đào. Công việc này bao gồm tất cả thông tin cần thiết để khai thác(đào) khối, chẳng hạn như danh sách giao dịch chưa xác nhận hiện tại, tiêu đề của khối trước đó và độ khó mục tiêu.",   // Mining mỏs take precautions to ensure that their participants do not mine the same nonce for the same block. This is important because, in the bitcoin mining process, miners compete to find a unique, valid 'nonce' in each block of transactions. If two miners in the same mỏ were to work on the same nonce simultaneously, it would be inefficient, and only one would receive the block reward. To prevent this, mining mỏs use a process called 'work assignment' or 'job distribution' to allocate work efficiently. Mining mỏs distribute work to individual miners or participants. When a new block needs to be mined, the mỏ's server (or mỏ operator) creates a unique 'job' for the miners. This job includes all the information needed to mine the block, such as the current list of unconfirmed transactions, the previous block's header, and the target difficulty.
 shares_heading: 'Gửi cổ phần', // Submitting Shares
 shares_paragraph:
     "Các máy(thợ) đào làm việc trên các công việc được giao và liên tục cố gắng tìm ra nonce chính xác. Khi một máy(thợ) đào tin rằng họ đã có một giải pháp mã hóa, họ gửi cái gọi là 'cổ phần' cho máy chủ mỏ. Cổ phần này chứng minh rằng máy(thợ) đào đang tích cực làm việc để giải quyết vấn đề mã hóa. Cổ phần dễ tìm thấy hơn nhiều so với giải pháp mã hóa trong thực tế, nhưng chúng đóng vai trò là bằng chứng về làm việc của máy(thợ) đào.", // Miners work on these assigned jobs and continuously attempt to find the correct nonce. When a miner believes they have a solution, they submit what's called a 'share' to the mỏ server. This share demonstrates that the miner is actively working on solving the problem. Shares are much easier to find than the actual solution, but they serve as proof of the miner's efforts.
      },
      split: {
 title: 'Phương thức thanh toán', // Payout Schemes
 nav_title: 'Chia sẻ công bằng', // Splitting the fair share
 payout_subheading:
     'Một mỏ khai thác(pool) có thể chọn phân phối phần thưởng khối theo một số cách khác nhau, tuy sự khác biệt không đáng kể nhưng những cách phân bổ quan trọng là:', // A mining mỏ can choose to distrubute the block rewards in several ways the differ in some subtle but key ways:
 pps_heading: 'Trả theo mỗi cổ phần/Pay-Per-Share (PPS)', // Pay-Per-Share (PPS)
 pps_paragraph:
     "Trong cách PPS này, máy(thợ) đào nhận được khoản thanh toán cố định cho mỗi cổ phần hợp lệ mà họ gửi, bất kể mỏ có khai thác(đào) thành công một khối hay không. Hệ thống này cung cấp cho máy(thợ) đào thu nhập ổn định và dự đoán được, làm cho nó trở thành lựa chọn ưa thích cho những người đánh giá cao tính nhất quán trong thu nhập của họ. PPS giảm thiểu sự biến động trong phần thưởng, vì máy(thợ) đào được đền bù cho công việc của họ trên cơ sở mỗi cổ phần, cung cấp một nguồn thu nhập đáng tin cậy trong thế giới khai thác(đào) tiền mã hóa đầy biến động. Tuy nhiên, PPS có thể khấu trừ một khoản phí từ thu nhập của máy(thợ) đào nếu mỏ không khai thác(đào) thành công một khối. Khoản phí này nhằm trang trải chi phí hoạt động và giảm thiểu rủi ro cho nhà điều hành mỏ trong trường hợp không khối nào được khai thác(đào) khối trong một khoảng thời gian nhất định. Trong cách PPS truyền thống, máy(thợ) đào nhận được khoản thanh toán ít hơn khi mỏ gặp khó khăn.", // In PPS, miners receive a fixed payout for each valid share they submit, regardless of whether the mỏ successfully mines a block or not. This system provides miners with a steady and predictable income, making it a preferred choice for those who value consistency in their earnings. PPS minimizes the variance in rewards, as miners are compensated for their work on a per-share basis, offering a reliable source of income in the world of volatile cryptocurrency mining. However, PPS may deduct a fee from the miner's earnings if the mỏ doesn't successfully mine a block. This fee is meant to cover operational costs and mitigate the risk for the mỏ operator in case no blocks are mined within a certain timeframe. In traditional PPS, miners receive a reduced payout when the mỏ faces difficulties.
 pplns_heading: 'Trả theo N cổ phần cuối cùng/Pay-Per-Last-N-Shares (PPLNS)', // Pay-Per-Last-N-Shares (PPLNS)
 pplns_paragraph:
     "PPLNS tính đến đóng góp của máy(thợ) đào trong một khoảng thời gian cụ thể của N cổ phần cuối cùng. máy(thợ) đào được trả tiền dựa trên số lượng và độ khó của các cổ phần mà họ đã gửi trong khoảng thời gian đó. PPLNS khuyến khích máy(thợ) hoạt động tích cực trong mỏ, vì nó thưởng cho sự tham gia nhất quán và giúp giảm thiểu rủi ro của các chiêu trò nhảy mỏ. Máy(thợ) nhận được khoản thanh toán khi mỏ khai thác(pool) thành công trong việc tìm ra một khối và phần thưởng được phân phối tỷ lệ thuận với những đóng góp gần nhất của họ, cung cấp một cách tiếp cận công bằng và hiệu quả dựa trên hiệu suất để kiếm tiền trong hệ sinh thái khai thác(đào).", // PPLNS takes into account a miner's contribution over a specific window of the last N shares. Miners are paid based on the number and difficulty of shares they've submitted within that window. PPLNS encourages miners to stay active in the mỏ, as it rewards consistent participation and helps to reduce the risk of mỏ-hopping strategies. Miners receive payouts when the mỏ successfully mines a block, and the rewards are distributed proportionally to their recent contributions, providing a fair and performance-driven approach to earning in the mining ecosystem.
 pps_plus_heading: 'Trả theo mỗi cổ phần + /Pay Per Share + (PPS+)', // Pay Per Share + (PPS+)
 pps_plus_paragraph:
     "PPS+ cung cấp cho máy(thợ) đào khoản thanh toán cố định cho mỗi cổ phần mà họ nỗ lực đóng góp cho việc khai thác(đào) của mỏ. Tuy nhiên, PPS+ thường bao gồm tiền thưởng hoặc phí bảo hiểm bổ sung như một sự khích lệ cho sự đóng góp của các máy(thợ) vào sự ổn định và độ tin cậy của mỏ. Cách thưởng này được thiết kế để khuyến khích máy(thợ) đào hoạt động tích cực trong mỏ và thúc đẩy sự tham gia lâu dài. PPS+ cung cấp cho máy(thợ) đào thu nhập ổn định và dự đoán được, trong khi phần thưởng bổ sung làm cho cách thức này trở thành một lựa chọn hấp dẫn cho những người tìm kiếm cả độ tin cậy và phần thưởng phụ trội trong thế giới khai thác(đào) tiền mã hóa.", // PPS+ offers miners a fixed payment for each share they contribute to the mỏ's mining efforts. However, PPS+ typically includes an additional bonus or premium as an incentive to miners who contribute to the mỏ's stability and reliability. This bonus is designed to encourage miners to stay active in the mỏ and foster long-term participation. PPS+ provides miners with a consistent and predictable income, while the added bonus makes it an attractive option for those seeking both reliability and extra rewards in the world of cryptocurrency mining.
 fpps_heading: 'Trả đủ theo mỗi cổ phần/Full Pay Per Share (FPPS)', // Full Pay Per Share (FPPS)
 fpps_paragraph:
     "Trong cách Full PPS, máy(thợ) đào nhận được khoản thanh toán cố định cho mỗi cổ phần mà họ gửi cho mỏ, bất kể mỏ có khai thác(đào) thành công một khối hay không. Phương pháp này cung cấp cho máy(thợ) đào thu nhập ổn định và dự đoán được, đồng thời là một lựa chọn hấp dẫn cho những người đánh giá cao độ tin cậy trong thu nhập của họ. Không giống như PPS truyền thống, Full PPS đảm bảo rằng máy(thợ) đào nhận được khoản thanh toán đầy đủ cho công việc đóng góp của họ, mà không có bất kỳ khoản khấu trừ nào, ngay cả khi mỏ gặp khó khăn. Đây là một phương pháp ổn định và đơn giản phù hợp với các máy(thợ) đào tìm kiếm thu nhập ổn định trong thế giới khai thác(đào) tiền mã hóa.",  // In Full PPS, miners receive a fixed payout for every share they submit to the mỏ, irrespective of whether the mỏ successfully mines a block or not. This approach provides miners with a steady and predictable income, making it an attractive choice for those who value reliability in their earnings. Unlike traditional PPS, Full PPS ensures that miners receive their full payout for their contributed work, without any potential deductions, even if the mỏ faces occasional difficulties. It's a stable and straightforward method that appeals to miners seeking consistent income in the world of cryptocurrency mining.
      },
    },
  },

  chapter_four: {
    title: 'Thu hồi 1.61 Bitcoin của bạn', // Claiming Your 1.61 Bitcoin
    paragraph_one:
 'Phù, mém chết! Bạn đang run rẩy sau cuộc chiến với BitRey, nhưng cảm thấy nhẹ nhõm vì đã chiến thắng.', // Phew, that was close! You are shaking from your battle with BitRey, but you are relieved that you won.
    paragraph_two:
 'Khi ngồi xuống bàn làm việc, bạn hít một hơi thật sâu, thả mình trôi dạt và tái hiện lại những sự kiện trong ngày trong đầu.',  // As you settle at your desk, you take a deep breath, drift off, and replay the day’s events in your head.

    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Bảo vệ thành quả', // Securing the bag
      paragraph_one:
   '—HOLOCAT: “Một trong hai chúng ta nên ngủ. Bạn nên bắt đầu liên lạc với các máy(thợ) đào còn lại. Họ chắc sẽ thèm muốn biết còn nhiều hơn cả thế giới.”', // —HOLOCAT: “One of us better sleep. You need to start contacting the rest of the miners. They’ll want to know even more than the world will.”
      paragraph_two:
   'Khi ngồi xuống bàn làm việc lơ lửng không chân, bạn tái hiện lại những sự kiện trong ngày. Vanderpoole. BitRey. Sự tiết lộ rằng các máy(thợ) đào không bao giờ đồng ý ngừng hoạt động để phản đối. Tất cả có thể đều đúng không? Tất cả những điều này có phải đều được dàn dựng không? Và bạn còn phải chăm sóc con mèo này trong bao lâu nữa? (Ở khoảng cách xa, một tiếng mèo kêu.)', // As you settle at your ButtLift Hover Desk, you replay the day’s events. Vanderpoole. BitRey. The revelation that miners never agreed to shut down in protest. Could it all be true? Was this all staged? And how much longer are you supposed to look after this cat? (In the distance, something meows.)
      paragraph_three:
   'Cho dù bất cứ điều gì xảy ra tiếp theo, bạn cũng sẽ cần tiền. Đợi đã! Bạn chưa bao giờ yêu cầu phần thưởng khai thác(đào) khối từ cuộc thi đấu với BitRey của mình! Bạn quyết định rút chúng.',  // Whatever happens next, you will need funds. Wait a second! You never claimed the mining rewards from your competition with BitRey! You decide to withdraw them.
    },

    public_key_one: {
      title: 'Khóa chung', // Public key
      nav_title: 'Các cặp khóa', // Key pairs
      heading: 'Về các cặp khóa', // About key pairs
      paragraph_one:
   'Theo mỏ khai thác(pool), có vẻ như bạn đã có 1.61 bitcoin từ tất cả công việc bạn đã làm trước đó.', // According to the mining mỏ, it looks like you have 1.61 bitcoin to claim from all the work you did earlier. 
      list_one: 'Khóa riêng', // Private key
      list_two: 'Khóa chung', // Public key
      paragraph_two:
   "Nhưng đợi đã, bạn thậm chí còn không có ví đựng tiền mã hóa! Bạn có thể tự hỏi mình có thể mua ví ở đâu. Mặc dù bạn có thể mua phần cứng để chế tạo một số loại ví, nhưng bạn thực sự có thể chỉ cần tạo một ví bằng máy tính hoặc thiết bị di động của mình. Hãy làm điều đó!",      // But wait, you don’t even have a wallet! You might be wondering where you can buy one. While you can purchase hardware to build certain kinds of wallets, you can actually just make one with your computer or mobile device. Let’s do it!
      paragraph_three:
   'Nếu bạn đã đăng ký tài khoản tại bất kỳ thời điểm nào, bạn đã nhận được thứ gọi là mã cá nhân. Trong mật mã học, đây được gọi là “khóa riêng” và thường là một phần của một cặp:', // If you signed up for an account at any point, you got something called a personal code. In cryptography, this is called a “private key” and it is often part of a pair:
      paragraph_four:
   'Chỉ cần một cặp khóa duy nhất là tất cả những gì cần thiết để tạo một ví tiền và kiểm soát các quỹ bên trong nó. Khi bạn muốn chi tiêu bitcoin, bạn sử dụng khóa riêng. Khi bạn muốn nhận bitcoin, bạn sử dụng khóa chung.', // A single key pair is all that’s needed to create a wallet and control the funds within it. When you want to spend bitcoin, you use the private key. When you want to receive bitcoin, you use the public key.
    },

    public_key_two: {
      title: 'Khóa chung', // Public key
      nav_title: 'Đường cong elip trong mật mã học', // Elliptic curve cryptography
      paragraph_one:
   'Vì vậy, chúng ta có khóa riêng, đó là mã cá nhân bạn nhận được khi đăng ký. Làm thế nào để chúng ta tạo khóa chung từ khóa riêng?',// So, we have the private key, it’s the personal code you got when you signed up. How do we generate a public key from it?
      paragraph_two:
   'Để làm được điều đó, chúng ta cần xem qua một nhánh mật mã hấp dẫn được gọi là đường cong elip. Đây được gọi là đường cong elip trong mật mã học, hay ECC cho ngắn gọn.',// To do that, we need to take a peek at a fascinating branch of cryptography called elliptic curves. This is called Elliptic Curve Cryptography, or ECC for short.
      paragraph_three:
   'ECC liên quan đến việc lấy các điểm nhất định trên đường cong elip và thực hiện phép cộng và phép nhân trên các điểm đó.',// ECC involves taking certain points on an elliptic curve and performing addition and multiplication on the points.
      paragraph_four:
   'Bitcoin sử dụng một đường cong cụ thể được gọi là secp256k1. Trong hình, bạn thấy một phiên bản đơn giản hóa dễ hình dung hơn, nhưng vẫn tuân theo các quy tắc toán học giống nhau.', // Bitcoin uses a specific curve called secp256k1. In the image, you see a simplified version that is easier to visualize, but follows the same mathematical rules.
      paragraph_five:
   'Chúng ta bắt đầu với một điểm cụ thể trên đường cong này, được gọi là', // We start with a specific point on this curve, called the
      tooltip_one: {
 highlighted: 'Điểm khởi tạo', // Generator Point
 question: 'Điểm khởi tạo là gì?', // What is the Generator Point?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%20is%20the%20Generator%20point%203F',
      },
    },

    public_key_three: {
      title: 'Khóa chung', // Public key
      nav_title: 'Tính toán khóa chung', // Calculate the public key
      paragraph_one:
   'Để suy ra khóa chung từ khóa riêng, chúng ta thực hiện một hoạt động đường cong elip lặp đi lặp lại với điểm tạo. Điểm khởi tạo là một điểm cụ thể trên đường cong. Giá trị của nó là một phần của tiêu chuẩn secp256k1 và nó luôn giống nhau:',      // To derive a public key from a private key, we perform an elliptic curve operation repeatedly with the generator point. The generator point is a specific point on the curve. Its value is part of the secp256k1 standard and it’s always the same:
      paragraph_two:
   'Các phép toán trên đường cong elip tương tự như phép cộng. Do đó, việc lặp lại các phép toán đó tương tự như phép nhân. Chúng ta sử dụng ký hiệu * để mô tả thuật toán, trong đó `k` là khóa riêng và `P` là khóa chung tương ứng:',// Mathematical operations on an elliptic curve are similar to addition. Therefore, repetition of those operations is similar to multiplication. We use the * symbol to describe the algorithm, where `k` is the private key and `P` is the corresponding public key:
      python: {
 paragraph_three:
   'Hoàn thành hàm <span className="text-green">privatekey_to_publickey()</span>  chấp nhận khóa riêng dưới dạng chuỗi được mã hóa hex và trả về khóa chung tương ứng dưới dạng đối tượng GE (Group Element).',  // Complete the function <span className="text-green">privatekey_to_publickey()</span>  which accepts a private key as a hex-encoded string and returns the corresponding public key as a GE (Group Element) object.
      },
      javascript: {
 paragraph_three:
   'Hoàn thành hàm <span className="text-green">privateKeyToPublicKey()</span>  chấp nhận khóa riêng dưới dạng chuỗi được mã hóa hex và trả về khóa chung tương ứng dưới dạng đối tượng GE (Group Element).',  // Complete the function <span className="text-green">privateKeyToPublicKey()</span>  which accepts a private key as a hex-encoded string and returns the corresponding public key as a GE (Group Element) object.
      },
      paragraph_four: 'Dưới đây là một số gợi ý chuyển đổi kiểu để giúp bạn bắt đầu:',// Here are some type-conversion hints to get you started:
      success: 'Tuyệt vời! Khóa chung đó khá dài. Hãy thử nén nó!'// Good job! That public key is pretty long. Let’s try to compress it!
    },

    public_key_four: {
      title: 'Khóa chung', // Public key
      nav_title: 'Nén khóa chung', // Compress the public key
      paragraph_one:
   'Khóa chung có tọa độ x và y với tổng cộng 64 byte. Điều này có thể được nén thành 33 byte bằng cách xóa tọa độ y và thêm vào trước một byte siêu dữ liệu. Byte đó sẽ chỉ ra xem tọa độ Y là chẵn hay lẻ. Vì phương trình đường cong elip chỉ có hai biến, nên khóa chung đầy đủ có thể được tính toán sau đó bởi người xác thực chỉ bằng cách sử dụng x và siêu dữ liệu:',      // The public key has an x and y coordinate for a total of 64 bytes. This can be compressed into 33 bytes by removing the y coordinate and prepending a single byte of metadata. That byte will indicate if the Y coordinate is even or odd. Because the elliptic curve equation only has two variables, the complete public key can be computed later by the verifier using only x and the metadata:
      paragraph_two_javascript:
   'Byte siêu dữ liệu phải là `2` nếu y là chẵn và `3` nếu y là lẻ. Hoàn thành hàm <span className="text-green">compressPublicKey()</span> để chấp nhận khóa chung và trả về chuỗi hex 33 byte đại diện cho khóa chung được nén.',      // The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function <span className="text-green">compressPublicKey()</span> to accept a public key and return a 33 byte hex string representing the compressed public key.
      paragraph_two_python:
   'Byte siêu dữ liệu phải là `2` nếu y là chẵn và `3` nếu y là lẻ. Hoàn thành hàm <span className="text-green">compress_publickey()</span> để chấp nhận khóa chung và trả về chuỗi hex 33 byte đại diện cho khóa chung được nén.',      // The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function <span className="text-green">compress_publickey()</span> to accept a public key and return a 33 byte hex string representing the compressed public key.
      success:
   'Xuất sắc. Bây giờ chúng ta có khóa chung được nén của mình. Tiếp theo, chúng ta cần mã hóa nó và mã hóa nó ở định dạng thân thiện với con người.',      // Excellent. Now we have our compressed public key. Next we need to hash it and encode it in a human-friendly format.
    },

    address_one: {
      title: 'Địa chỉ', // Address
      nav_title: 'Một chiều', // A one way street
      heading: 'Làm tốt!', // Nice work!
      paragraph_one:
   'Và ở đó bạn có nó! Khóa chung được nén của bạn! Có rất nhiều điều thú vị mà chúng ta có thể làm với nó, bao gồm cả việc tạo địa chỉ cho ví của chúng tôi. Chúng ta sẽ tìm hiểu về điều đó trong thử thách tiếp theo.',      // And there you have it! Your compressed public key! There are lots of interesting things we can do with it, including generating addresses for our wallet. We’ll learn about that in the next challenge.
      paragraph_two:
   'Lưu ý rằng việc tạo khóa chung là một chiều. Bạn không thể tìm ra khóa riêng được sử dụng để tạo khóa chung trừ khi bạn giải được một bài toán toán học khét tiếng được gọi là ',      // Note that generating a public key is a one way street. You can’t figure out the private key used to generate a public key unless you solve a notoriously difficult math problem called the
      tooltip_one: {
 question: 'Vấn đề logarit rời rạc liên quan đến bitcoin như thế nào?', // How is the discrete log problem relevant to bitcoin?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520the%2520discrete%2520log%2520problem%2520relevant%2520to%2520bitcoin%253F',
 highlighted: 'vấn đề logarit rời rạc' // discrete log problem
      },
    },

    address_two: {
      title: 'Địa chỉ', // Address
      nav_title: 'Mã hóa khóa chung được nén', // Hash the compressed public key
      paragraph_one:
   'Bạn có nhớ thử thách mã hóa không? Hóa ra bạn có thể tạo địa chỉ bitcoin đơn giản nhất bằng cách mã hóa khóa chung được nén của mình. Bitcoin sử dụng hai thuật toán mã hóa khác nhau cho việc này: SHA-256 và RIPEMD-160.',// Do you remember the hashing challenge? It turns out you can generate the simplest type of bitcoin address by hashing your compressed public key. Bitcoin uses two different hashing algorithms for this: SHA-256 and RIPEMD-160.
      paragraph_two: 'Các bước:', // Steps:
      paragraph_three:
   '<span className="indent-48">1. Thực hiện hàm mã hóa SHA-256 trên khóa chung được nén của bạn.</span>',// <span className="indent-48">1. Perform a SHA-256 hash on your compressed public key.</span>
      paragraph_four:
   '<span className="indent-48">2. Thực hiện hàm mã hóa RIPEMD-160 trên tóm tắt đầu ra SHA-256 đó. Kết quả cuối cùng sẽ là 20 byte được mã hóa dưới dạng chuỗi hex.</span>',// <span className="indent-48">2. Perform a RIPEMD-160 hash on that SHA-256 output digest. The final result will be 20 bytes encoded as a hex string.</span>
      paragraph_five:
   'Hoàn thành một hàm chấp nhận khóa chung được nén 33 byte dưới dạng chuỗi hex và trả về mã hóa khóa chung 20 byte dưới dạng chuỗi hex.',// Complete a function that accepts a 33-byte compressed public key as a hex string and returns a 20-byte public key hash as a hex string.
      paragraph_six:
   'Đây là tài liệu cho các thư viện mã hóa hóa mà chúng tôi đã nhập cho bạn:\n'+ // Here is the documentation for the hashing libraries we imported for you:\n'
   '<Link href="https://nodejs.org/api/crypto.html#class-hash" target="_blank" className="underline">JavaScript: crypto</Link>\n' +
   '<Link href="https://docs.python.org/3/library/hashlib.html#usage" target="_blank" className="underline">Python: hashlib</Link>', 
      success: 'Tuyệt vời. Thêm một bước nữa và bạn sẽ có địa chỉ ví của mình.', // Great. One more step and you will have your wallet address.
    },

    address_three: {
      title: 'Địa chỉ', // Address
      nav_title: 'Lấy địa chỉ P2WPKH', // Get a P2WPKH address
      paragraph_one:
   'Có nhiều loại địa chỉ bitcoin khác nhau. Trong bài tập trước, chúng tôi đã tạo một số mã hóa khóa chung được nén 20 byte. Bây giờ, chúng tôi muốn mã hóa mã hóa đó thành địa chỉ Pay-to-Witness-Public-Key-Hash (p2wpkh) trên mạng Testnet.', // There are multiple types of bitcoin addresses. In the previous exercise, we created a 20-byte compressed public key hash. Now, we would like to encode that hash into a Pay-to-Witness-Public-Key-Hash (p2wpkh) address on the Testnet network.
      paragraph_two:
   'Đầu tiên, chúng ta cần thêm một số phiên bản chứng nhân là `0` vào mã hóa. 21 byte kết quả này được gọi là <span className="font-bold">chương trình chứng nhân</span>.', // First we need to append a witness version number of `0` to the hash. These resulting 21 bytes are known as the <span className="font-bold">witness program</span>.
      paragraph_three:
   'Sau đó, chương trình chứng nhân được mã hóa thành định dạng thân thiện với con người được gọi là <Link href="https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#user-content-Specification" target="_blank" className="underline">bech32</Link>. Thực hiện việc này sẽ thêm tiền tố có thể đọc được của con người và kiểm tra tổng hợp vào dữ liệu.', // Then, the witness program is encoded into a human-friendly format called <Link href="https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#user-content-Specification" target="_blank" className="underline">bech32</Link>. Doing this appends a human-readable prefix and a checksum to the data.
      paragraph_four: 'Tiền tố được xác định bởi mạng:', // The prefix is determined by the network:
      table_heading: {
 item_one: 'Mạng', // Network
 item_two: 'Tiền tố có thể đọc được của con người', // Human-Readable Prefix
      },
      table_rows: {
 key_one: 'Mainnet',
 value_one: 'bc',
 key_two: 'Testnet',
 value_two: 'tb',
 key_three: 'Regtest',
 value_three: 'bcrt',
      },
      paragraph_five:
   "Vì chúng tôi đang tạo địa chỉ Testnet, chúng tôi sẽ sử dụng tiền tố 'tb'.", // Since we're making a Testnet address, we will be using the 'tb' prefix.
      paragraph_six:
   'Sau khi dữ liệu được mã hóa thành bech32, chúng ta còn lại một địa chỉ bitcoin!', // After the data has been encoded to bech32, we are left with a bitcoin address!
      paragraph_seven:
   'Hoàn thành hàm để tạo địa chỉ bech32 từ mã hóa khóa chung được nén. Bắt đầu bằng cách tạo chương trình chứng nhân, sau đó chuyển đổi chương trình thành địa chỉ bằng cách sử dụng thư viện bech32 đã được nhập cho bạn.', // Complete the function to create a bech32 address from a compressed public key hash. Start by making the witness program, then convert the program to an address by using the bech32 library that has already been imported for you.
      paragraph_eight:
   'Bạn có thể cần nghiên cứu sâu về thư viện bech32 và đọc mã để tìm các hàm phù hợp để sử dụng:\n', // You may need to dig into the bech32 library and read the code to find the right functions to use:
      paragraph_eight_javascript:
   '<Link href="https://github.com/saving-satoshi/bech32js/blob/main/bech32.js" target="_blank" className="underline">JavaScript: @savingsatoshi/bech32js</Link>\n',
      paragraph_eight_python:
   '<Link href="https://github.com/saving-satoshi/bech32py/blob/main/bech32py/bech32.py" target="_blank" className="underline">Python: savingsatoshi_bech32py</Link>',
      success: 'Bây giờ bạn đã có một địa chỉ mà bitcoin được khai thác(đào) khối có thể được gửi đến.', // Now you have an address that mined bitcoin can be sent to.
    },

    outro_one: {
      title: 'Phần kết', // Outro
      nav_title: 'Chương hoàn thành', // Chapter complete
      heading: 'Thành công!', // Success!
      paragraph_one: 'Bạn đã tạo ra ví bitcoin của riêng mình!', // You created your very own bitcoin wallet!
      paragraph_two:
   'Bạn rút bitcoin từ mỏ khai thác(pool) vào ví mà bạn vừa tạo. Bây giờ bạn đã được tài trợ đầy đủ và sẵn sàng cho bất cứ điều gì mà Vanderpoole và BitRey ném vào bạn tiếp theo.', // You withdraw the bitcoin from the mining mỏ into the wallet you just created. You are now fully funded and ready for whatever Vanderpoole and BitRey throw at you next.
    },
    resources: {
      public_key_three: {
 generator_point_heading: 'Điểm khởi tạo', // Generator point
 generator_point_paragraph:
   'Một điểm cụ thể trên đường cong secp256k1. Giá trị của nó là một phần của tiêu chuẩn secp256k1 và nó luôn giống nhau. Điểm này không khác gì các điểm khác trên đường cong, nhưng nó được đồng ý là điểm bắt đầu tiêu chuẩn cho các phép tính. Không ai thực sự biết tại sao điểm cụ thể này được chọn.', // A specific point on the secp256k1 curve. Its value is part of the secp256k1 standard and it’s always the same. This point is not different from other points on the curve, but it is agreed up on as the standard starting point for calculations. No one really knows why this particular point was chosen.
 elliptic_curve_operations_heading: 'Các phép toán trên đường cong Elíp', // Elliptic curve operations
 elliptic_curve_operations_paragraph:
   'Đường cong Elíp có các quy tắc toán học riêng của chúng, vì vậy các phép toán đơn giản như cộng và nhân hoạt động khác nhau. Để đơn giản và ngắn gọn, các ký hiệu đã thiết lập được sử dụng lại, chẳng hạn như sử dụng “*” cho các phép toán tương tự như phép nhân.', // Elliptic curves have their own mathematical rules, so simple operations like addition and multiplication work differently. For simplicity and brevity, established symbols are re-used, like using a “*” for operations that are similar to multiplication.
 discrete_log_heading: 'Thuật toán Logarit rời rạc', // Discrete logarithm
 discrete_log_paragraph:
   'Một hệ thống toán học mà bạn có thể nhân nhưng không thể chia. Một phép ẩn dụ đơn giản cho điều này là nhìn vào đồng hồ. Ba giờ sau 11 giờ là 2 giờ. Vì vậy, chúng ta có thể nói “11 + 3 = 2”. Tuy nhiên, nếu muốn thực hiện “2-x = 11” và giải cho x, bạn sẽ có vô số câu trả lời khả thi (3, 15, 27, 39 ...). Tìm hiểu thêm trên <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">wikipedia</Link>.', // A mathematical system where you can, for example, multiply but cannot divide. A simple metaphor for this is looking at a clock. Three hours past 11 o’clock is 2 o’clock. So we could say “11+3=2”. However if wanted to perform “2-x=11” and solve for x, you would have infinite possible answers (3, 15, 27, 39...). More on <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">wikipedia</Link>.
 tip_one:
   'Phép nhân với các điểm trên đường cong Elíp không giống như phép nhân thông thường mà bạn đã quen thuộc, phép nhân với các số thông thường. Vậy làm thế nào để thực hiện phép nhân? Lưu ý rằng điểm tạo, <span className="p-1 font-mono bg-[#0000004D] m-1">G</span>, thuộc kiểu <span className="p-1 font-mono bg-[#0000004D] m-1">secp256k1.GE</span>. Hãy xem lớp đó để xem bạn có thể gọi các phương thức gì trên nó.', // Multiplication with elliptic curve points is not the same as the kind of multiplication you are used to, the one with regular numbers. So how do you perform multiplication? Notice that the generator point, <span className="p-1 font-mono bg-[#0000004D] m-1">G</span> is of the type <span className="p-1 font-mono bg-[#0000004D] m-1">secp256k1.GE</span>. Have a look at that class to see what methods you can invoke on it.
 tip_two:
   'Mặc dù khóa riêng được chấp nhận ở định dạng hex (hệ thập lục phân), nhưng nó cần được chuyển đổi thành số (BigInt nếu bạn đang sử dụng JS) trước khi nhân với điểm tạo.', // While the private key is accepted in hex format, it needs to be converted to a number (BigInt if you’re using JS) before multiplying with the generator point.
      },
      public_key_four: {
 y_coordinate_compression_heading: 'Nén khóa chung', // Y-coordinate compression
 y_coordinate_compression_paragraph:
   'Khi bạn tính toán phép cộng điểm trên đường cong elliptic, bạn sử dụng tọa độ của hai điểm để tìm tọa độ của điểm thứ ba nằm trên đường cong. Tuy nhiên, thường có hai tọa độ y có thể có cho bất kỳ tọa độ x nào (trừ một số trường hợp đặc biệt). Khi nén khóa chung, bạn chọn một trong những tọa độ y này và chỉ bao gồm tọa độ x cùng với một chỉ báo về tọa độ y nào sẽ được sử dụng, trong trường hợp này, chúng tôi sử dụng siêu dữ liệu được thêm vào trước để chỉ ra tọa độ y.', // When you calculate a point addition on an elliptic curve, you use the coordinates of two points to find the coordinates of a third point that lies on the curve. However, there are usually two possible y-coordinates for any given x-coordinate (except for certain special cases). When compressing a public key, you choose one of these y-coordinates and include only the x-coordinate along with an indicator of which y-coordinate to use, in this case we use the appended metadata to indicate the y-coordinate.
 tip: 'Thử thách này thực sự khá đơn giản, chúng ta chỉ thực sự cố gắng xác định xem tọa độ y là chẵn hay lẻ để chúng ta có thể thêm vào trước siêu dữ liệu đó vào đầu khóa chung của chúng ta.', // This challenge is actually quite simple, we are only really trying to determine whether the y-coordinate is even or odd so that we can prepend that metadata to the front of our public key.
      },
      address_two: {
 hash_algo_heading: 'Thuật toán mã hóa SHA-256, RIPEMD-160', // SHA-256, RIPEMD-160
 hash_algo_paragraph:
   'Các hàm mã hóa tóm tắt bất kỳ lượng dữ liệu nào ở bất kỳ loại nào và luôn trả về kết quả có cùng kích thước. Đối với SHA256, đó là 32 byte. Đối với RIPEMD-160, đó là 20 byte. Đầu ra là xác định (luôn có cùng đầu ra cho cùng một đầu vào) nhưng nếu không, không thể phân biệt với ngẫu nhiên. Các hàm mã hóa có hiệu quả giảm dữ liệu thành một dấu vân tay nhỏ nhất quán.', // Hash functions digest any amount of any kind of data and always return a result of the same size. For SHA256, it’s 32 bytes. For RIPEMD-160, it’s 20 bytes. The output is deterministic (always the same output for the same input) but otherwise, indistinguishable from random. Hash functions effectively reduce data to a small consistent fingerprint.
 tip_one:
   'Khi tính toán mã hóa SHA-256, bạn sẽ cần đảm bảo mã hóa khóa nén của mình dưới dạng byte chứ không phải hex. Nếu bạn đang sử dụng JavaScript, điều này sẽ yêu cầu chuyển đổi chuỗi hex thành bộ đệm.', // When calculating the SHA-256 hash you will need to make sure to hash your compressed key as bytes not hex. If you are using JavaScript, this will require converting the hex string to a buffer.
 tip_two:
   'Đảm bảo rằng bạn đang thực hiện các thuật toán mã hóa theo thứ tự chính xác!', // Make sure you are doing the hashing algorithms in the correct order!
      },
      address_three: {
 wpkh_heading: 'Chứng nhận Địa chỉ Khóa Công khai/Witness Public Key Hash (wpkh)', // Witness Public Key Hash (wpkh) address
 wpkh_paragraph:
   'Địa chỉ bitcoin là một chuỗi ký tự được thiết kế cho người dùng để xử lý. Nó ngắn gọn, dễ sao chép và dán và có một số loại kiểm tra tổng hợp tích hợp để đảm bảo rằng nó luôn được sao chép chính xác. Nó mã hóa an toàn một tập lệnh đầu ra Bitcoin mà người nhận có thể chi tiêu từ đó. Có một số loại tập lệnh đầu ra và một số cơ chế mã hóa. Trong thử thách này, chúng tôi mã hóa khóa chung được nén bằng bech32 để tạo ra cái gọi là địa chỉ mã hóa khóa chung chứng nhân.', // A bitcoin address is a string of characters that is designed for users to handle. It is short, easy to copy and paste, and has some kind of built-in checksum to ensure that it is always copied correctly. It safely encodes a Bitcoin output script that the recipient can spend from. There are several types of output scripts and several encoding mechanisms. In this challenge, we encode a compressed public key with bech32 to create what is called a witness public key hash address.
 network_heading: 'Mainnet, Testnet, Signet và Regtest', // Mainnet, Testnet, Signet, and Regtest
 network_paragraph:
   'Khi phát triển phần mềm bitcoin, điều quan trọng là kiểm tra mã của bạn trước khi bạn tin tưởng tiền thật với nó! Một trong những cách đơn giản nhất để kiểm tra phần mềm bitcoin là sử dụng một blockchain khác với khối khởi tạo mới, nơi tiền không quan trọng, khai thác(đào) khối miễn phí và dễ dàng, và mọi thứ có thể được đặt lại bất kỳ lúc nào. Các chuỗi này được hỗ trợ bởi một mạng lưới các nút duy nhất không can thiệp vào các đồng tiền và nút thực trên Mainnet. Testnet và Signet là tên của hai blockchain bitcoin thay thế như vậy được duy trì song song với Mainnet trên quy mô toàn cầu. Regtest là một chế độ dành cho lập trình viên được thiết kế để chạy cục bộ mà không cần kết nối mạng nào cả.', // When developing bitcoin software, it is important to test your code before you trust real money with it! One of the simplest ways to test bitcoin software is to use a different blockchain with a new genesis block where the coins don’t matter, mining is free and easy, and everything can be reset at any time. These chains are supported by a unique network of nodes that does not interfere with the real coins and nodes on Mainnet. Testnet and Signet are the names of two such alternate bitcoin blockchains that are maintained in parallel with Mainnet on a global scale. Regtest is a developer mode designed to be run locally with no network connections needed at all.
 tip: 'Đảm bảo bạn xem xét kỹ thư viện bech32 để tìm các phương thức chính xác mà bạn có thể sử dụng.', // Make sure you take a close look at the bech32 library to find the exact methods you can use.
      },
    },
  },

  chapter_five: {
    title: 'Liệu Satoshi thật sự có đứng lên?', // Will the Real Satoshi Please Stand Up
    paragraph_one:
      'Đã khuya và bạn cảm thấy mệt mỏi, nhưng khi bạn nhắm mắt lại một lúc, một liều tin xấu kép ập đến.', // It’s late, and you’re tired, but as you shut your eyes for a moment, a double dose of bad news arrives.
    paragraph_two: '1) Vanderpoole đã trở lại trên TV.', // 1) Vanderpoole is back on TV.
    paragraph_three:
      '2) Ông ta tuyên bố mình là chắt của Satoshi Nakamoto.', // 2) He is claiming to be the great-grandson of Satoshi Nakamoto.
    paragraph_four: 'Ông ta trông có vẻ thiếu ngủ.', // He looks sleep-deprived.
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Đừng tin tưởng, hãy xác minh', // Don’t trust, verify
      paragraph_one:
 '—DEBORAH CHUNK: “Ông Vanderpoole. Gần đây, ông đã đưa ra một tuyên bố đáng kinh ngạc trên mạng xã hội rằng ông là chắt của Satoshi Nakamoto. Điều đó có đúng không? Điều này có đúng không?”', // —DEBORAH CHUNK: “Mr. Vanderpoole. You recently made a staggering claim on anti-social media that you are the great-grandson of Satoshi Nakamoto. Is that correct? Is this true?”
      paragraph_two:
 '—VANDERPOOLE: “Chắc chắn rồi, Deborah. Tôi đã giữ bí mật này trong một thời gian rất dài. Bạn thấy đấy, gia đình tôi đã truyền lại một đĩa CD-ROM trông không nổi bật qua nhiều thế hệ. Để giữ bí mật, chúng tôi dán nhãn cho nó là <span className="italic">Creed – My Own Prison</span>. Nó chứa các khóa riêng cho kho lưu trữ bitcoin khổng lồ của ông cố của tôi, Satoshi Nakamoto. Vì vậy, khi tôi phát biểu thay cho các máy(thợ) đào, hãy biết rằng tôi cũng phát biểu thay cho Satoshi Nakamoto.”', // —VANDERPOOLE: “It darn tootin’ is, Deborah. I have harbored this secret for a long, long time. You see, my family has passed an inconspicuous looking CD-ROM down for generations. To keep it secret, we labeled it <span className="italic">Creed – My Own Prison</span>. It contains the private keys to my great-grandfather Satoshi Nakamoto’s enormous bitcoin trove. So when I speak for miners, know that I speak for Satoshi Nakamoto.”
      paragraph_three:
 '—DEBORAH CHUNK: “Có cách nào để chúng tôi xác minh rằng ông thực sự sở hữu các khóa riêng của bitcoin của Satoshi Nakamoto không?”', // —DEBORAH CHUNK: “Is there any way we can verify that you actually own the private keys to Satoshi Nakamoto’s bitcoin?”
      paragraph_four:
 '—VANDERPOOLE: “Thực sự là có. Đó là một vấn đề đơn giản của mật mã khóa chung.”', // —VANDERPOOLE: “Indeed there is. It is a simple matter of public key cryptography.”
      paragraph_five:
 '—DEBORAH CHUNK: Nhưng tại sao lại đợi lâu như vậy mới tiết lộ điều gây chấn động trái đất này?', // —DEBORAH CHUNK: But why wait so long to make this earth-shattering disclosure?
    },
    intro_two: {
      nav_title: 'Lời tuyên bố táo bạo của Vanderpoole', // Vanderpoole's bold claim
      paragraph_one:
 '—VANDERPOOLE: “Tôi không có đủ can đảm. Luôn có những tin đồn về lịch sử gia đình tôi, những tin đồn mà tôi có thể dễ dàng xác nhận. Nhưng tôi không sẵn sàng cho sự công khai quá mức như vậy. Sau tất cả, tôi sống một cuộc sống khiêm tốn, ẩn dật trong một lâu đài thế kỷ 14 trên một trang trại dành riêng cho những người đàn ông trên hòn đảo riêng yêu thích nhất của tôi, thực hiện 5–6 cuộc phỏng vấn như thế này từ bồn tắm nước nóng của tôi mỗi tuần.”', // —VANDERPOOLE: “I didn’t have the courage. There have always been rumors about my family’s history, ones that I could easily confirmed. But I wasn’t ready for that much publicity. After all, I live a humble, secluded life in a 14th century castle on a dude ranch on my favorite of all my private islands, doing 5–6 interviews like this one from my hot tub every week.”
      paragraph_two:
 '—VANDERPOOLE: “Nhưng bây giờ khi tương lai của bitcoin đang bị đe dọa, tôi biết đã đến lúc phải đối mặt với sự thật, cụ thể là âm nhạc từ album đầu tay của Creed, My Own Prison.” *Vanderpoole hát nhẩm giai điệu của bài hát cùng tên trong album thế kỷ 20*', // —VANDERPOOLE: “But now that bitcoin’s future is on the line, I knew it was time to face the music, specifically, the music from Creed’s debut album, My Own Prison.” *Vanderpoole hums the melody from the 20th century album’s namesake song*
      paragraph_three:
 '—VANDERPOOLE: "Tôi chỉ có thể nói rằng tôi rất tiếc vì đã không xuất hiện sớm hơn vì CD-ROM cũng chứa các kế hoạch sửa đổi bitcoin của Satoshi Nakamoto. Bạn thấy đấy, ông cố của tôi luôn hối tiếc vì đã giới hạn nguồn cung bitcoin ở mức 21 triệu đồng xu, đó là lý do tại sao tôi dự định thực hiện giấc mơ của ông cố tôi về việc hard fork bitcoin để ủng hộ việc phát hành bitcoin vĩnh viễn."', // —VANDERPOOLE: "I can only say that I’m sorry for not coming forth sooner because the CD-ROM also contains Satoshi Nakamoto’s revised plans for bitcoin. You see, my great-grandfather always regretted limiting the supply of bitcoin to 21 million coins, which is why I plan to fulfill my great-grandfather’s dream of hard forking bitcoin in favor of perpetual bitcoin issuance."
    },
    intro_three: {
      nav_title: 'Một thông điệp từ Satoshi', // A message from Satoshi
      paragraph_one:
 'Màn hình Hover TXM4H-A của bạn kêu lên. Bạn có một tin nhắn mới.', // Your TXM4H-A Hover Screen chirps to life. You have a new message.
      paragraph_two: '—HOLOCAT: Đừng quên chọc mũi tôi.', // —HOLOCAT: Don’t forget to boop my nose.
      paragraph_three: 'Bạn chọc mũi cô ấy', // You boop her nose
      paragraph_four:
 '—SATOSHI NAKAMOTO: “Vanderpoole không phải là người mà ông ta tự nhận mình là. Bạn có thể vạch trần ông ta. Yêu cầu ông ta chứng minh quyền sở hữu bitcoin của Satoshi bằng cách ký một tin nhắn bằng cách sử dụng các khóa riêng của ví đó.”', // —SATOSHI NAKAMOTO: “Vanderpoole is not who he claims to be. You can expose him. Ask him to prove ownership of Satoshi’s bitcoin by signing a message using that wallet's private keys.”
    },
    derive_message_one: {
      title: 'Truy xuất thông điệp', // Derive the message
      nav_title: 'Thông điệp được đề cập', // The message in question
      heading: 'Vanderpoole nói rằng ông ta đã ký một thông điệp bằng các khóa của Satoshi:', // Vanderpoole says he signed a message with Satoshi’s keys:
      code_one: `-----BEGIN BITCOIN SIGNED MESSAGE----- \n \n Tôi là Vanderpoole và tôi kiểm soát khóa riêng mà Satoshi đã sử dụng để ký giao dịch bitcoin đầu tiên được xác nhận trong khối #170. Thông điệp này được ký bằng cùng một khóa riêng. \n \n -----BEGIN BITCOIN SIGNATURE----- \n \n`, // -----BEGIN BITCOIN SIGNED MESSAGE----- \n \n I am Vanderpoole and I have control of the private key Satoshi used to sign the first-ever bitcoin transaction confirmed in block #170. This message is signed with the same private key. \n \n -----BEGIN BITCOIN SIGNATURE----- \n \n
      code_two:
 '<span className="break-all"> H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k= </span>', 
      code_three: '\n \n-----END BITCOIN SIGNATURE-----',
      paragraph_two: 'Điều này có nghĩa là gì?', // What does this even mean?
    },
    derive_message_two: {
      nav_title: 'Tìm khóa chung', // Finding the public key
      paragraph_one:
 'Chúng ta đã học trong chương 4 rằng khóa riêng là những số ngẫu nhiên khổng lồ được giữ bí mật bởi bất kỳ ai đã tạo ra chúng. Chúng ta có thể sử dụng toán học Đường cong Elliptic để suy ra khóa chung từ khóa riêng đó.', // We learned in chapter 4 that private keys are huge random numbers kept secret by whomever generated them. We can use Elliptic Curve math to derive a public key from that private key.
      paragraph_two:
 'Khóa chung có thể được chia sẻ như một trình định danh duy nhất và khóa riêng được sử dụng để chứng minh rằng một người có quyền kiểm soát trình định danh đó. Bằng chứng đó được gọi là CHỮ KÝ. Để tạo chữ ký, bạn cần một thông điệp và một khóa riêng. Bất kỳ ai cũng có thể xác minh chữ ký bằng một bản sao của thông điệp và khóa chung tương ứng.', // The public key can be shared as a unique identifier and the private key is used to prove that a person has control of that identifier. That proof is called a SIGNATURE. To create a signature, you need a message and a private key. Anyone can verify the signature with a copy of the message and the corresponding public key.
      paragraph_three:
 'Vanderpoole đã cung cấp một chữ ký và một thông điệp. Khóa chung ở đâu?', // Vanderpoole has provided a signature and a message. Where is the public key?
    },
    derive_message_three: {
      nav_title: "Tìm chữ ký của Satoshi", // Find Satoshi's signature
      heading: 'Hãy bắt đầu bằng việc tìm chữ ký của Satoshi', // Let’s start with finding Satoshi’s signature
      paragraph_one:
 `Khối #170 chứa <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">giao dịch bitcoin đầu tiên</link> được thực hiện từ Satoshi đến Hal Finney. Giao dịch đó chỉ có <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">một đầu vào</link>. Lấy scriptSig từ đầu vào đó. Nó chứa chữ ký của Satoshi!`, // Block #170 contains the <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">first bitcoin transaction</link> made from Satoshi to Hal Finney. That transaction only has <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">one input</link>. Retrieve the scriptSig from that input. It contains Satoshi's signature!
      placeholder: 'Dán dữ liệu vào đây', // Paste the data here
      success:
 'Tuyệt vời! Đây thực sự là chữ ký của Satoshi, cho phép chuyển bitcoin của anh ấy cho Hal Finney.', // Nicely done! This is actually Satoshi’s signature, authorizing the transfer of his bitcoin to Hal Finney.
    },
    derive_message_four: {
      nav_title: "Tìm khóa chung của Satoshi", // Find Satoshi's public key
      heading: 'Vậy khóa chung của anh ấy ở đâu?', // So where is his public key?
      paragraph_one:
 'Nó thực sự được lưu trữ cùng với bitcoin mà Satoshi tạo ra bằng cách khai thác(đào) khối #9.', // It’s actually stored along with the bitcoin Satoshi generated by mining block #9.
      paragraph_two:
 '<Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">Theo liên kết</Link> đến giao dịch nguồn ở đầu phần đầu vào # 0. Đây là giao dịch Satoshi tạo ra bằng cách khai thác(đào) khối # 9. Giao dịch tạo 50 BTC và khóa chúng dưới quyền kiểm soát của ... một khóa chung! Tìm dữ liệu bắt đầu bằng 0411 ... trong scriptPubKey.', // <Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">Follow the link</Link> to the source transaction at the top of the input #0 section. This is the transaction Satoshi created by mining block #9. The transaction creates 50 BTC and locks them under control of... a public key! Find the data beginning with 0411... in the scriptPubKey.
      paragraph_three:
 'Khóa chung nằm giữa các lệnh script OP_PUSHBYTES và OP_CHECKSIG. Dán nó bên dưới:', // The public key lives between the script commands OP_PUSHBYTES and OP_CHECKSIG. Paste it below:
      placeholder: 'Dán dữ liệu vào đây', // Paste the data here
      success: 'Đó là nó!', // That’s it!
    },
    derive_message_five: {
      nav_title: 'Xác minh chữ ký tiếp theo', // Verifiying the signature next
      paragraph_one:
 `Trong bài tập trước, chúng ta đã thấy Satoshi nhận được 50 BTC cho việc khai thác(đào) khối #9. Ông ta đã sử dụng điều đó làm đầu vào cho giao dịch của mình đến Hal Finney (trong khối #170), gửi 10 BTC đến khóa chung của Hal Finney và trả lại 40 BTC cho chính mình làm tiền thừa. Khóa riêng tư của Satoshi đã được sử dụng để tạo một chữ ký ủy quyền chuyển giao các quỹ đó.`, // In the previous exercise, we saw Satoshi got 50 BTC for mining block #9. He used that as input for his transaction to Hal Finney (in block #170), sending 10 BTC to Hal Finney’s public key and returning 40 BTC back to himself as change. Satoshi's private key was used to create a signature authorizing the transfer of those funds.
      paragraph_two:
 'Tiếp theo, chúng ta cần tìm hiểu cách xác minh chữ ký. Nhưng vẫn còn thiếu một thứ gì đó ... thông điệp mà Satoshi đã ký để ủy quyền cho giao dịch cho Hal là gì?', // Next we need to learn how to verify a signature. But something is still missing... what is the message Satoshi signed to authorize the transaction for Hal?
    },
    derive_message_six: {
      nav_title: 'Truy xuất thông điệp', // Derive the message
      heading: 'Truy xuất thông điệp từ giao dịch', // Derive the message from the transaction
      paragraph_one:
 'Chỉ cần nhìn vào trang web của trình duyệt chuỗi khối, bạn có thể thấy rằng một giao dịch bitcoin có nhiều phần khác nhau. Một số phần chỉ là các số nhỏ và một số phần là các khối dữ liệu lớn hơn. Giao thức bitcoin có một thuật toán rất cụ thể để tạo thông báo từ các giao dịch, vì vậy các thông báo đó có thể được ký bởi khóa riêng.', // It should be clear by just looking at the block explorer web page that a bitcoin transaction has many different parts. Some parts are just small numbers and some parts are larger chunks of data. The bitcoin protocol has a very specific algorithm for creating messages from transactions, so those messages can be signed by private keys.
      paragraph_two:
 'Chúng tôi sẽ tóm tắt quy trình được nêu <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG" target="_blank" className="underline">ở đây</Link>. Nó thuận tiện sử dụng <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">chính xác giao dịch này từ khối #170</Link> làm ví dụ.', // We will summarize the process outlined <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG" target="_blank" className="underline">here</Link>. It conveniently uses <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">this exact same transaction from block #170</Link> as an example.
      paragraph_three:
 'Để bắt đầu, chúng ta cần các byte thô tạo nên toàn bộ giao dịch. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Trình khám phá khối của chúng tôi</Link> có thể giúp ích cho việc này. Sử dụng điểm cuối API "hex" và dán toàn bộ khối dữ liệu.', // To begin, we need the raw bytes that make up the complete transaction. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Our block explorer</Link> can help with this. Use the "hex" API endpoint and paste the entire blob of data.
      input_challenge_label: 'Dán khối giao dịch', // Paste the transaction blob
      success_message_line_one:
 'Đây là giao dịch thô với từng thành phần được dán nhãn:', // This is the raw transaction with each component labeled:
      success_message_line_two: 'phiên bản:', // version:
      success_message_line_three: 'số lượng đầu vào:', // number of inputs:
      success_message_line_four: 'mã hóa của tx mà đầu vào # 0 đến từ:', // hash of the tx that input #0 came from:
      success_message_line_five:
 'chỉ mục của đầu vào # 0 trong giao dịch tài trợ:', // index of input #0 in the funding transaction:
      success_message_line_six: 'scriptSig để cho phép chi tiêu đầu vào # 0:', // scriptSig to authorize spending input #0:
      success_message_line_seven: 'chuỗi đầu vào # 0:', // input #0 sequence:
      success_message_line_eight: 'số lượng đầu ra:', // number of outputs:
      success_message_line_nine:
 'giá trị đầu ra # 0 (10 BTC hoặc 1.000.000.000 satoshi):', // output #0 value (10 BTC or 1,000,000,000 satoshis):
      success_message_line_ten:
 'scriptPubKey đầu ra # 0 (khóa chung của Hal Finney cộng với OP_CHECKSIG):', // output #0 scriptPubKey (Hal Finney’s public key plus OP_CHECKSIG):
      success_message_line_eleven:
 'giá trị đầu ra # 1 (40 BTC hoặc 4.000.000.000 satoshi):', // outut #1 value (40 BTC or 4,000,000,000 satoshis):
      success_message_line_twelve:
 'scriptPubKey đầu ra # 1 (khóa chung của chính Satoshi, để đổi lại):', // output #1 scriptPubKey (Satoshi’s own public key again, for change):
      success_message_line_thirteen: 'thời gian khóa:', // locktime:
    },
    derive_message_seven: {
      nav_title: 'Xây dựng thông điệp để ký', // Build the message to sign
      paragraph_one:
 "Không thể ký một thông báo chứa chữ ký của chính nó, vì vậy scriptSig cần phải được xóa. Trong giao thức bitcoin, nó thực sự được thay thế bằng scriptPubKey của đầu ra giao dịch mà chúng ta đang chi tiêu.", // It’s impossible to sign a message containing it’s own signature, so the scriptSig needs to be removed. In the bitcoin protocol it is actually replaced by the scriptPubKey of the transaction output we are spending.
      paragraph_two:
 'Chúng tôi đã tìm thấy scriptPubKey trong bước trước, bạn có thể dán nó vào khoảng trống đầu tiên.', // We already found the scriptPubKey in the previous step, you can paste that in the first blank.
      paragraph_three: {
 a: 'Điều cuối cùng chúng ta cần cho thông điệp giao dịch của chúng ta là một', // The last thing we need for our transaction message is a
 b: '. Chúng tôi sẽ đề cập đến điều này nhiều hơn trong chương tiếp theo nhưng bây giờ chúng tôi chỉ cần thêm giá trị <span className="font-bold">01000000</span> vào cuối thông báo.', // . We'll cover this more in the next chapter but for now we'll just add the value <span className="font-bold">01000000</span> to the end of the message.
      },
      tooltip_one: {
 question: 'Cờ sighash là gì?', // What are sighash flags?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520sighash%2520flags%253F',
 highlighted: 'loại cờ sighash', // sighash type flag
      },
      success: "Tuyệt! Bạn đã xây dựng một thông điệp để ký.", // Nice! You've constructed a message to sign.
    },
    verify_signature_one: {
      title: 'Xác minh chữ ký', // Verify the signature
      nav_title: 'Xác minh chữ ký', // Verifying the signature
      heading: 'Cuối cùng chúng ta cũng có một thông điệp!', // Finally we have a message!
      paragraph_one:
 'Chúng tôi cũng có một chữ ký mà chúng tôi biết Satoshi đã tạo bằng các khóa riêng của mình và chúng tôi có khóa chung của anh ấy. Chúng ta hãy tìm hiểu cách xác minh chữ ký và sau đó chúng ta có thể thử xác minh chữ ký của Vanderpoole.', // We also have a signature we know Satoshi created with his own private keys, and we have his public key. Let’s learn how to verify the signature and then we can try to verify Vanderpoole’s signature.
    },
    verify_signature_two: {
      title: 'Xác minh chữ ký', // Verify the signature
      nav_title: 'Mã hóa tóm tắt giao dịch', // Hash the message
      heading: 'Mã hóa tóm tắt giao dịch', // Hash the transaction digest
      paragraph_one:
 'Dữ liệu giao dịch được nối tiếp mà chúng tôi đã biên soạn trong bước cuối cùng thực sự quá dài để ký hoặc xác minh bằng ECDSA.', // The serialized transaction data we compiled in the last step is actually too long to sign or verify with ECDSA.
      paragraph_two:
 'Chúng ta có biết cách nào để nén các khối dữ liệu lớn thành các phần nhỏ hơn, dễ quản lý hơn không? Chắc chắn rồi: mã hóa.', // Do we know any way to compress large chunks of data into more consistent, manageable pieces? We sure do: hashing.
      paragraph_three: {
 a: 'Giao thức bitcoin sử dụng một ', // The bitcoin protocol uses a
 b: ' để nén một giao dịch thành một thông báo có thể ký.', // to compress a transaction into a signable message.
      },
      paragraph_four:
 'Khi chúng ta có một số mã hóa 32 byte, dữ liệu đó được tái diễn giải thành một số nguyên. Vâng, một số nguyên 32 byte (đó là một số thực sự khổng lồ)!', // Once we have a 32-byte hash, that data is re-interpreted as an integer. Yes, a 32-byte integer (that is a truly enormous number)!
      tooltip_one: {
 question: 'Tại sao mọi thứ trong bitcoin đều sử dụng mã hóa kép (HASH256)?', // Why does everything in bitcoin use double hash (HASH256)?
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520does%2520everything%2520in%Bitcoin%2520use%2520double%2520hash%2520%28HASH256%29%253F',
 highlighted: 'tóm tắt SHA256 kép', // double SHA256 digest
      },
      success: 'Làm tốt!', // Nicely done!
    },
    verify_signature_three: {
      nav_title: 'Giải mã chữ ký', // Decode the signature
      heading: 'Giải mã Chữ ký', // Decode the Signature
      label_one: 'Dán giá trị R', // Paste the R value
      label_two: 'Dán giá trị S', // Paste the S value
      paragraph_one:
   "Chữ ký của Satoshi được mã hóa trong một hệ thống gọi là DER, là một tập con của ASN.1.", // Satoshi's signature is encoded in a system called DER which is a subset of ASN.1.
      paragraph_two:
   'Chúng ta cần trích xuất hai số 32 byte. Chúng được gọi tương ứng là R và S và mỗi số đều được thêm tiền tố 0220 trong chuỗi DER. Thay vì giải mã hoàn toàn khối DER, chỉ cần tìm các tiền tố và dán các giá trị R và S.', // There are two 32-byte numbers we need to extract. They are referred to as R and S respectively and are each prefixed by the bytes 0220 in the DER sequence. Instead of fully decoding the DER blob, just look for the prefixes and paste the R and S values.
      paragraph_three:
   "# Chữ ký của Satoshi, từ scriptSig đầu vào của giao dịch đến Hal Finney (khối 170)", // # Satoshi's signature, from the input scriptSig of the tx to Hal Finney (block 170)
    },
    verify_signature_four: {
      nav_title: 'Giải mã khóa chung', // Decode the public key
      heading: 'Giải mã Khóa chung', // Decode the Public Key
      label_one: 'Dán tọa độ x', // Paste the x coordinate
      label_two: 'Dán tọa độ y', // Paste the y coordinate
      paragraph_one:
   'Chúng ta đã học ở chương 4 rằng các khóa chung thực sự là các điểm trên đường cong ECDSA, nghĩa là chúng có giá trị x và y. Byte đầu tiên 04 có nghĩa là "không nén" (trái ngược với 02 và 03 như chúng ta đã học ở chương 4). Xóa byte đầu tiên đó và dữ liệu còn lại là tọa độ x và y 32 byte. Sao chép và dán lại.', // We learned in chapter 4 that public keys are really points in the ECDSA curve, meaning they have an x and y value. The first byte 04 means "uncompressed" (as opposed to 02 and 03 like we learned in chapter 4). Remove that first byte and the remaining data are 32-byte x and y coordinates. Copy and paste again.
      paragraph_two:
   "# Khóa chung của Satoshi, từ scriptPubKey đầu ra của coinbase khối 9", // # Satoshi's public key, from the block 9 coinbase output scriptPubKey
    },
    verify_signature_five: {
      title: 'Kiểm tra chữ ký', // Verify the signature
      nav_title: 'Kiểm tra chữ ký', // Test the signature
      heading: 'Xác minh chữ ký!', // Verify the signature!
      success: "Bạn đã làm được! Bạn đã xác minh được chữ ký của Satoshi!", // You've done it! You've verified Satoshi's signature!
      paragraph_one:
   'Lúc này, chúng ta đã có mọi thứ cần thiết để thực hiện một số phép toán ECDSA.', // At this point we have everything we need to do some ECDSA math.
      paragraph_two:
   'Thuật toán xác minh chữ ký ECDSA được giải thích <Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">ở đây</Link> và <Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">ở đây</Link>.', // The ECDSA signature verification algorithm is explained <Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">here</Link> and <Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">here</Link>.
      paragraph_three:
   'Chúng tôi đã tạo một đối tượng Phần tử Nhóm từ các phần tử X và Y của khóa chung cho bạn. Bạn cần hoàn thành việc triển khai hàm xác minh chữ ký ECDSA <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> chỉ nên trả về True nếu mọi thứ hợp lệ!', // We created a Group Element object from the public key X and Y elements for you. You need to finish implementing the ECDSA signature verification function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> that should only return True if everything is valid!
      paragraph_four:
   "Chúng tôi biết chữ ký của Satoshi là hợp lệ, nó đã được mọi nút đầy đủ Bitcoin kiểm tra kể từ năm 2010! Nếu chương trình của bạn không trả về True, nghĩa là có gì đó không ổn.", // We know Satoshi's signature is valid, it has been checked by every bitcoin full node since 2010! If your program does not return True something is wrong.
      python: {
 paragraph_five_part_one:
   'Gợi ý: phương thức <span className="text-green">pow()</span>', // Hint: the <span className="text-green">pow()</span> method
 paragraph_five_part_two:
   'có thể chấp nhận các số mũ âm và một modulo làm đối số. Xem thêm về <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">tài liệu</Link>.', // can accept negative exponents and a modulus as arguments. More on the <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">documentation</Link>.
      },
      javascript: {
 paragraph_five_part_one:
   'Chúng tôi đã cung cấp một hàm trợ giúp <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">invert()</span>', // We have provided a helper function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">invert()</span>
 paragraph_five_part_two:
   'mà bạn sẽ cần thay cho hàm lũy thừa mô đun gốc của JavaScript.', // which you will need in lieu of a JavaScript native modular exponentiation function.
      },
    },
    validate_signature_one: {
      title: 'Xác thực chữ ký', // Validate the signature
      nav_title: 'Chuẩn bị thông điệp', // Prepare the message
      heading: "Chuẩn bị thông điệp của Vanderpoole để xác minh", // Prepare Vanderpoole's message for verification
      paragraph_one:
 'Vanderpoole đã sử dụng <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">giao thức ký tin nhắn Bitcoin</Link> cho trò chơi khăm của mình. Phép tính sử dụng cùng một thuật toán mà chúng ta đã định nghĩa, nhưng việc chuẩn bị dữ liệu hơi khác một chút.', // Vanderpoole used a <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">bitcoin message signing protocol</Link> for his stunt. The computation uses the same algorithm we've already defined, but the preparation of the data is a bit different.
      paragraph_two:
 'Đầu tiên, chúng ta cần mã hóa thông điệp của anh ấy thành một mảng byte tương ứng với mẫu sau:', // First, we need to encode his message into an array of bytes corresponding to the following template:
      paragraph_three: {
 pre_link: 'Sau đó, chúng ta sẽ', // Then we will
 highlighted: 'hash kép SHA-256', // double SHA-256 hash
 question: 'Tại sao chúng ta lại hash kép trong Bitcoin?', // Why do we double hash in bitcoin?
 post_link:
   'khối dữ liệu đó, và chuyển đổi hash đó thành một số nguyên. Hoàn thành hàm <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">encode_message()</span>. Nó nên trả về một giá trị hex 32 byte.', // that blob of data, and convert that hash into an integer. Complete the function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">encode_message()</span>. It should return a 32-byte hex value.
      },
      success: 'Làm tốt', // Nicely Done
    },
    validate_signature_two: {
      nav_title: 'Chuẩn bị chữ ký', // Prepare the signature
      heading: 'Chuẩn bị chữ ký của Vanderpoole để xác minh', // Prepare Vanderpoole’s signature for verification
      paragraph_one:
 'Giao thức ký tin nhắn Bitcoin mà Vanderpoole đã sử dụng chỉ định base64 cho chữ ký. Chúng ta cần giải mã chuỗi base64 đó thành một chuỗi 65 byte. Hiện tại, chúng ta có thể bỏ qua byte siêu dữ liệu đầu tiên. Phần còn lại của dữ liệu là các giá trị r và s 32 byte mà chúng ta đã học ở bước 6.', // The bitcoin message signing protocol Vanderpoole used specifies base64 for the signature. We need to decode that base64 string into a 65 byte sequence. For now, we can disregard the first byte of metadata. The remainder of the data are the 32-byte r and s values we learned about in step 6.
      javascript: {
 paragraph_two: {
   post_link:
     'Hoàn thành hàm <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">decode_sig()</span>.', // Complete the function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">decode_sig()</span>.
   return:
     'Nó nên trả về một mảng với các giá trị [r, s] dưới dạng BigInt.', // It should return an array with the [r, s] values as BigInts.
 },
      },
      python: {
 paragraph_two: {
   post_link:
     'Hoàn thành hàm <span className=" text-green">decode_sig()</span>.', // Complete the function <span className=" text-green">decode_sig()</span>.
   return: 'Nó nên trả về một bộ dữ liệu (tuple) với các giá trị (r, s).', // It should return a tuple with the (r, s) values.
 },
      },
      success: 'Làm tốt', // Nicely Done
    },
    validate_signature_three: {
      title: 'Xác thực chữ ký', // Validate the signature
      nav_title: 'Xem Vanderpoole có nói dối không', // See if Vanderpoole was lying
      heading: 'Vậy, Vanderpoole có nói dối không?!', // So, is Vanderpoole a liar?!
      paragraph_one:
 `Hãy thu thập tất cả các thành phần cần thiết cho chương trình và xác minh xem chữ ký của Vanderpoole thực sự có bắt nguồn từ khóa chung của Satoshi không! Vui lòng điền vào các tham số còn thiếu cần thiết để thực thi hàm <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> bằng cách sử dụng mã được cung cấp.`, // Let's gather all the necessary components for the program and verify if Vanderpoole's signature actually originated from the private key linked to Satoshi's public key! Please fill in the missing parameters needed to execute the <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> function using the provided code.
      paragraph_two:
 'Sau đó, chúng ta có thể chạy chương trình để xem Vanderpoole có nói dối không. Trống giòn! ...', // Then we can run the program to see if Vanderpoole was lying. Drumroll please...
      success:
 "Thông báo này cho biết chữ ký không bắt nguồn từ khóa chung của Satoshi, vì quá trình xác minh đã thất bại.", // This message indicates that the signature did not originate from Satoshi's public key, as the verification failed.
    },
    validate_signature_four: {
      title: 'Xác thực chữ ký', // Validate the signature
      nav_title: 'Tìm khóa chính xác', // Find the correct key
      heading: 'Làm thế nào mà Vanderpoole thậm chí tạo ra chữ ký đó?', // How did Vanderpoole even create that signature?
      paragraph_one:
 'Holocat chen vào và nói rằng một kẻ đào ngũ ở BitRey đã gửi cho chúng tôi một danh sách các khóa chung mà Vanderpoole thường sử dụng, có thể ông ta đã sử dụng một trong những khóa này để ký vào tin nhắn.', //con mèo chimes in and says a defector in BitRey has sent us a list of public keys Vanderpoole commonly uses, maybe he used one of these keys to sign the message.
      paragraph_two:
 'Vui lòng cung cấp khóa thành công trong quá trình xác minh, cho phép chúng tôi xác định khóa chung mà Vanderpoole đã sử dụng để ký vào tin nhắn này.', // Please provide the key that successfully completes the verification process, allowing us to identify the public key Vanderpoole used to sign this message.
      paragraph_three:
 "Hãy xem bạn có thể xác minh tin nhắn và chữ ký của Vanderpoole bằng một trong NHỮNG khóa NÀY không?", // "Let's see if you can verify Vanderpoole's message and signature using one of THESE keys?"
      success:
 "Chữ ký hợp lệ cho khóa chung này của Vanderpoole, đây không phải là Satoshi!", // The signature is valid for this public key of Vanderpoole's, this was not Satoshi!
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter complete
      heading: 'Vanderpoole đã nói dối!', // Vanderpoole lied!
      paragraph_one:
 "Bạn đã học được một trong những bài học quan trọng nhất trong Bitcoin. Bạn không tin tưởng, bạn đã xác minh.<br><br>Bằng cách đó, bạn đã phát hiện ra rằng Vanderpoole đã không sử dụng khóa của Satoshi để ký vào tin nhắn, tạo ra một bóng đen lớn cho câu chuyện gia đình của ông ta, cho độ tin cậy của ông ta và độ tin cậy của BitRey.<br><br>Bây giờ nếu chỉ có thể bạn có thể gạt được bài hát đó ra khỏi đầu.", // You learned one of the most important lessons in bitcoin. You didn't trust, you verified.<br><br>In doing so, you discovered that Vanderpoole didn’t use Satoshi’s keys to sign the message, casting a big shadow on his family story, on his credibility, and the credibility of BitRey.<br><br>Now if only you could get that song out of your head.
    },
    resources: {
      derive_message_three: {
 op_pushdata_heading: 'OP_PUSHDATA', // OP_PUSHDATA
 op_pushdata_paragraph_one:
   'OP_PUSHDATA đóng một vai trò quan trọng trong script Bitcoin để tạo điều kiện đưa các phần dữ liệu tùy ý vào chuỗi khối dữ liệu Bitcoin (Bitcoin blockchain). Nó thực sự là một whole category of opcodes cho phép bao gồm các yếu tố dữ liệu có kích thước khác nhau, làm cho ngôn ngữ kịch bản của Bitcoin linh hoạt hơn. Mã opcode này đặc biệt quan trọng trong việc cho phép triển khai các chức năng hợp đồng thông minh khác nhau và các loại giao dịch tùy chỉnh. Vì chúng ta biết đây là opcode để đưa 71 byte dữ liệu lên stack, bạn có thể tìm ra cách opcode này có thể được biểu diễn ở dạng hex không? Bạn có thể đọc thêm về một số OP_CODE này và hơn thế nữa <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">ở đây</Link>.', // OP_PUSHDATA in bitcoin script plays a crucial role in facilitating the insertion of arbitrary pieces of data into the blockchain. It is actually a whole category of opcodes that allow for the inclusion of data elements of varying sizes, making Bitcoin’s scripting language more versatile. This opcode is particularly significant in enabling the implementation of various smart contract functionalities and custom transaction types. Given that we know this is supposed to push 71 bytes of data onto the stack, can you work out how this opcode might be represented in hex? You can read more about some of these OP_CODES and more <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">here</Link>.
      },
      derive_message_four: {
 op_checksig_heading: 'OP_CHECKSIG', // OP_CHECKSIG
 op_checksig_paragraph_one:
   'OP_CHECKSIG đóng vai trò quan trọng trong script Bitcoin để đảm bảo khóa riêng chính xác có thể chi tiêu một giao dịch nhất định. Trong hầu hết mọi script Bitcoin sẽ có một OP_CHECKSIG để đảm bảo rằng người đang cố gắng chi tiêu Bitcoin có thể làm như vậy với khóa được cung cấp. Bạn có thể đọc thêm về một số OP_CODE này và hơn thế nữa <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">ở đây</Link>.', // OP_CHECKSIG in bitcoin script is critically important to ensuring that the correct private key is able to spend a given transaction. In almost every bitcoin script there will be an OP_CHECKSIG to ensure that the person attempting to spend the bitcoin is able to do so with the given key. You can read about some of these OP_CODES and more <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">here</Link>.
      },
      derive_message_six: {
 transaction_parts_heading: 'Phần của giao dịch', // Transaction Parts
 transaction_parts_one:
   'Phiên bản: Phiên bản này chỉ ra cách thức tổ chức giao dịch.', // Version: This version indicates how the the transaction will be organized.
 transaction_parts_two:
   'Số lượng đầu vào: Số lượng đầu vào trong giao dịch này.', // Number of inputs: The number of inputs in this transaction.
 transaction_parts_three:
   'TXID đầu vào #0: Đây là hash của giao dịch mà đầu vào #0 chi tiêu từ đó.', // Input #0 TXID: This is the hash of the transaction that input #0 spends from.
 transaction_parts_four:
   'Chỉ mục đầu vào #0: Đây là chỉ mục đầu ra của giao dịch được xác định bởi TXID ở trên, cung cấp nguồn tiền.', // Input #0 index: This is the output index of the transaction identified by the above TXID that provides a source of funds.
 transaction_parts_five:
   'Scriptsig: Đây là dữ liệu ủy quyền chi tiêu đầu ra được chỉ định ở trên. Thông thường bao gồm các chữ ký.', // Scriptsig: This is the data that authorizes the spending of the output specified above. Typically consists of signatures.
 transaction_parts_six:
   'Chuỗi đầu vào #0: Đây là số chuỗi cho đầu vào chi tiêu.', // Input #0 sequence: This is the sequence number for the spending input.
 transaction_parts_seven:
   'Số lượng đầu ra: Điều này cho biết giao dịch có bao nhiêu đầu ra.', // Number of outputs: This indicates how many outputs the tx has.
 transaction_parts_eight:
   'Giá trị đầu ra #0: Đây là số tiền được chi tiêu bởi đầu ra đầu tiên, được biểu thị dưới dạng số nguyên little-endian.', // Output #0 value: This is the amount that is spent by the first output, expressed as a little-endian integer.
 transaction_parts_nine:
   'ScriptPubKey đầu ra #0: Đây là script xác định những gì cần thiết để chi tiêu tiền. Thông thường bao gồm khóa chung và các opcode khác tạo thành một thử thách.', // Output #0 scriptPubKey: This is the script that determines what is required to spend the funds. Typically consists of a public key and other opcodes that form a challenge.
 transaction_parts_ten:
   'Giá trị đầu ra #1: Đây là số tiền được chi tiêu bởi đầu ra thứ hai, được biểu thị dưới dạng số nguyên little-endian.', // Output #1 value: This is the amount that is spent by the second output, expressed as a little-endian integer.
 transaction_parts_eleven:
   'ScriptPubKey đầu ra #1: Đây là script xác định những gì cần thiết để chi tiêu tiền. Thông thường bao gồm khóa chung và các opcode khác tạo thành một thử thách.', // Output #1 scriptPubKey: This is the script that determines what is required to spend the funds. Typically consists of a public key and other opcodes that form a challenge.
 transaction_parts_twelve:
   'Locktime: Chiều cao khối trước đó mà giao dịch này không hợp lệ để xác nhận.', // Locktime: A block height before which this transaction is not valid for confirmation.
      },
      derive_message_seven: {
 sighash_type_flag_heading: 'Cờ loại SigHash', // SigHash Type Flag
 sighash_type_flag_paragraph_one:
   'Cờ SigHash là một cơ chế trong Bitcoin xác định phần nào của giao dịch được bao gồm trong hash được ký bởi khóa riêng. Về bản chất, chúng xác định phạm vi cam kết của người ký đối với các phần cụ thể của dữ liệu giao dịch. Cờ SigHash là một byte duy nhất được thêm vào mỗi chữ ký và có thể thay đổi giữa các đầu vào trong cùng một giao dịch. Có một số loại cờ SigHash mà bạn có thể tìm hiểu thêm <Link href="https://river.com/learn/terms/s/sighash-flag" target="_blank" className="underline">ở đây</Link>.', // SigHash flags are a mechanism in bitcoin that define which parts of a transaction are included in the hash that is signed by a private key. Essentially, they determine the scope of commitment by the signer to specific parts of the transaction data. The SigHash flag is a single byte appended to each signature and can vary between inputs within the same transaction. There are several types of SigHash flags you can learn about <Link href="https://river.com/learn/terms/s/sighash-flag" target="_blank" className="underline">here</Link>.
      },
      verify_signature_two: {
 tip_one:
   'Gợi ý JavaScript: Bạn có thể chuyển đổi một chuỗi hex thành một bộ đệm byte bằng cách sử dụng <span className="p-1 font-mono bg-[#0000004D] m-1">Buffer.from(someString, \'hex\');</span>', // JavaScript hint: You can convert a hex string to a buffer of bytes using <span className="p-1 font-mono bg-[#0000004D] m-1">Buffer.from(someString, \'hex\');</span> 
 signature_verification_heading: 'Xác minh chữ ký', // Signature Verification
 signature_verification_paragraph_one:
   'Xác minh chữ ký là một thuật toán toán học trong đó một bên cung cấp một phần dữ liệu (chữ ký) chỉ có thể được tạo ra nếu bên đó biết một số bí mật (khóa riêng). Xác minh liên quan đến việc so sánh chữ ký, khóa chung và một thông điệp nhất định. Nếu thuật toán đưa ra một giá trị boolean TRUE, thì chữ ký được coi là xác thực.', // Signature verification is a mathematical algorithm in which one party provides a piece of data (the signature) that could only be generated if that party knows a secret number (the private key). Verification involves comparing the signature, the public key, and a given message. If the algorithm outputs a TRUE boolean, then the signature is considered authentic.
      },
      verify_signature_three: {
 signature_encoding_heading: 'Mã hóa chữ ký', // Signature Encoding
 signature_encoding_paragraph_one:
   'Chữ ký (DER) hoặc Quy tắc mã hóa phân biệt (Distinguished Encoding Rules) đơn giản là một định dạng được sử dụng để mã hóa chữ ký ECDSA trong Bitcoin. Chữ ký ECDSA được tạo bằng khóa riêng và mã hóa của thông báo được ký. Nó bao gồm hai số 32 byte (r, s). Nó có nhiều thành phần mà bạn có thể tìm hiểu thêm <Link href="https://technicaldifficulties.io/2020/07/22/bip-66-unpacking-der-signatures/" target="_blank" className="underline">ở đây</Link>.', // A (DER) signature or Distinguished Encoding Rules is simply a format used to encode an ECDSA signature in bitcoin. An ECDSA signature is generated using a private key and a hash of the signed message. It consists of two 32-byte numbers (r,s). It has multiple components you can learn more about <Link href="https://technicaldifficulties.io/2020/07/22/bip-66-unpacking-der-signatures/" target="_blank" className="underline">here</Link>.
      },
      verify_signature_four: {
 eliptic_curve_heading: 'Thuật toán chữ ký số đường cong Elliptic (ECDSA)', // Elliptic Curve Digital Signature Algorithm (ECDSA)
 eliptic_curve_paragraph_one:
   "ECDSA là một thuật toán mật mã được Bitcoin sử dụng để đảm bảo rằng tiền chỉ có thể được chi tiêu bởi chủ sở hữu hợp pháp của chúng. Khóa chung được suy ra từ khóa riêng thông qua phép nhân đường cong elliptic, điều này khá đơn giản về mặt tính toán. Tuy nhiên, đảo ngược quá trình này để suy ra khóa riêng khóa chung là không khả thi về mặt tính toán. Hàm một chiều này là nền tảng của bảo mật Bitcoin.", // ECDSA is a cryptographic algorithm used by bitcoin to ensure that funds can only be spent by their rightful owners. A public key is derived from a private key through elliptic curve multiplication, which is computationally straightforward. However, reversing this process to derive the private key from the public key is computationally unfeasible. This one-way function is a cornerstone of Bitcoin's security.
 
 public_private_key_heading: 'Khóa chung và khóa riêng', // Public and Private Keys
 public_private_key_paragraph_one:
   'Trong Bitcoin, một cặp khóa được sử dụng để đảm bảo giao dịch an toàn. Khóa riêng, được giữ bí mật, được sử dụng để ký giao dịch và chứng minh quyền sở hữu của một địa chỉ Bitcoin. Khóa chung, được suy ra từ khóa riêng, có thể được chia sẻ và được sử dụng để xác minh rằng chữ ký được thực hiện bởi chủ sở hữu khóa riêng, mà không tiết lộ khóa riêng.', // In bitcoin, a pair of keys is used to ensure secure transactions. The private key, kept secret, is used to sign transactions and prove ownership of a bitcoin address. The public key, derived from the private key, can be shared and is used to verify that a signature is made by the private key holder, without revealing the private key.
      },
      verify_signature_five: {
 finite_field_arithmetic_heading: 'Số học trường hữu hạn', // Finite Field Arithmetic
 finite_field_arithmetic_paragraph_one:
   "Loại số học này, được sử dụng trong ECDSA, liên quan đến các số trong một phạm vi hoặc trường cố định. Các phép toán như cộng, trừ, nhân và tìm nghịch đảo modulo được thực hiện theo kích thước của trường này. Điều này rất cần thiết cho các phép tính đường cong elliptic trong mật mã học Bitcoin.", // This type of arithmetic, used in ECDSA, involves numbers within a fixed range or field. Operations such as addition, subtraction, multiplication, and finding modular inverses are performed with respect to the size of this field. This is essential for the elliptic curve calculations in bitcoin's cryptography.
 ge_and_fe_heading: 'Phần tử nhóm (GE) và Phần tử trường (FE)', // Group Elements (GE) and Field Elements (FE)
 ge_and_fe_paragraph_one:
   "Trong ngữ cảnh của mật mã học đường cong elliptic, một phần tử nhóm thường đại diện cho một điểm trên đường cong elliptic. Trong thử thách, GE đề cập đến một điểm như vậy với tọa độ x và y cụ thể. FE đại diện cho một phần tử của trường hữu hạn, được sử dụng cho các phép tính trong các ràng buộc của trường.", // In the context of elliptic curve cryptography, a group element typically represents a point on the elliptic curve. In the challenge, GE refers to such a point with specific x and y coordinates. FE represents an element of the finite field, used for calculations within the field's constraints.
 modular_inverse_heading: 'Nghịch đảo modulo', // Modular Inverse
 modular_inverse_paragraph_one:
   "Nghịch đảo modulo của một số a modulo m là một số b sao cho (a * b) % m = 1. Tìm nghịch đảo modulo là một bước quan trọng trong việc xác minh chữ ký ECDSA. Nó được sử dụng trong việc tính toán u1 và u2 trong quá trình xác minh.", // The modular inverse of a number a modulo m is a number b such that (a * b) % m = 1. Finding the modular inverse is a critical step in ECDSA signature verification. It's used in the calculation of u1 and u2 during the verification process.
      },
      validate_signature_one: {
 message_verification_heading: 'Tầm quan trọng của việc xác minh thông điệp', // Importance of Message Verification
 message_verification_paragraph_one:
   'Xác minh thông điệp nâng cao tính bảo mật của giao tiếp trong hệ sinh thái Bitcoin. Nó cho phép các bên xác minh tính xác thực và tính toàn vẹn của các thông điệp, điều này rất có giá trị trong các tình huống mà sự tin tưởng và xác minh là điều cần thiết, chẳng hạn như trong các giao dịch ngang hàng hoặc giao tiếp giữa các bên trong một hợp đồng thông minh. Hơn nữa, xác minh thông điệp đóng vai trò nền tảng cho nhiều ứng dụng khác nhau, bao gồm xác minh danh tính và chứng nhận quyền sở hữu của một địa chỉ Bitcoin cụ thể. Nó bổ sung một lớp đảm bảo mật mã, củng cố bản chất phi tin cậy và phi tập trung (không qua trung gian) của mạng lưới Bitcoin.', // Message verification enhances the security of communications within the bitcoin ecosystem. It allows parties to verify the authenticity and integrity of messages, which is valuable in situations where trust and verification are essential, such as in peer-to-peer transactions or communication between parties in a smart contract. Furthermore, message verification serves as a foundation for various applications, including identity verification and the attestation of ownership of a particular bitcoin address. It adds a layer of cryptographic assurance, reinforcing the trustless and decentralized nature of the bitcoin network.
      },
      validate_signature_two: {
 base64_encoding_heading: 'Mã hóa Base64', // Base64 Encoding
 base64_encoding_paragraph_one:
   "Base64 là một lược đồ mã hóa byte sang văn bản cơ bản chỉ cho phép dữ liệu được chuyển đổi thành byte, sau đó có thể được sử dụng trong bộ đệm hoặc từ byte sang văn bản theo cách tránh mọi sự cố với đường dẫn url và tham số truy vấn. Điều này khác với lược đồ mã hóa base58 ở chỗ nó vẫn bao gồm các ký tự tương tự (số không, chữ hoa 'O', chữ hoa 'I' và chữ thường 'l') có thể gây nhầm lẫn cho người dùng khi cố gắng sao chép hoặc đọc thông báo được mã hóa.", // Base64 is a basic byte to text encoding scheme that just allows for the data to be convereted to bytes which can then be used in buffers or from bytes to text in such a way that it avoids any problems with url paths and query params. This differs from the base58 encoding scheme in that it still includes the similar characters (zero, uppercase 'O', uppercase 'I', and lowercase 'l') that may otherwise be confusing to a user when trying to copy or dictate the encoded message.
      },
      validate_signature_three: {
 signing_and_ownership_heading: 'Ký và sở hữu', // Message Signing and Ownership
 signing_and_ownership_paragraph_one:
   "Dựa trên tính ẩn danh giả của Bitcoin, chúng ta bị hạn chế trong những gì chúng ta có thể chứng minh một cách dứt khoát bởi vì chủ sở hữu của một khóa có thể từ chối ký một thông điệp hoặc ký một thông điệp bằng một khóa không chính xác một cách cố ý. Điều duy nhất chúng ta có thể chứng minh là khóa tạo ra chữ ký không hợp lệ không phải là khóa khớp với khóa có thể ký một thông điệp.", // Based on bitcoin's psuedo-anonymity we are limited in what we are able to definitively prove because the owner of a key can refuse to sign a message or sign a message with an incorrect key on purpose. The only thing we can prove is that the key that creates an invalid signature is not one that matches a key that can sign a message.
      },
      validate_signature_four: {
 one_for_one_heading: 'Một-một', // One for One
 one_for_one_paragraph_one:
   'Để đảm bảo độ tin cậy và bảo mật của ECDSA, một chữ ký được tạo bởi một khóa riêng chỉ có thể được xác minh bởi khóa chung tương ứng. Nếu các khóa riêng khác nhau có thể tạo ra cùng một khóa chung hoặc chữ ký, điều đó sẽ làm suy yếu bảo mật và độ tin cậy của ECDSA. Thông qua điều này, chúng ta có thể biết rằng khóa chung có thể ký vào thông điệp này có quyền sở hữu Bitcoin này.', // To ensure the reliability and security of ECDSA, a signature created by a private key can only be verified by the corresponding public key. If different private keys could produce the same public key or signature, it would undermine the security and reliability of ECDSA. Through this we can know that the public key that was able to sign this message has ownership of this bitcoin.
      },
    },
  },

  chapter_six: {
    title: `Người giữ chìa khóa`, // The Keyholder
    paragraph_one:
      'Ahhh! Vanderpoole đang tìm cách trả thù bạn vì đã vạch trần những tuyên bố gian lận của ông ta. Nhưng mặc dù sự thật đã được phơi bày, nhiều người vẫn sợ hãi tiếp tục bám víu vào huyền thoại mà Vanderpoole đã tạo ra xung quanh bản thân, gia đình và tổ tiên giả định của họ. Thời kỳ này đáng sợ, và mọi người cần một người hùng. Thật không may, đối với nhiều người, ông ta là người tốt nhất mà họ có.', // Ahhh! Vanderpoole is out to get you for exposing his fraudulent claims. But despite the fact that the holocat is out of the bag, plenty of scared people continue to cling to the myth that Vanderpoole created around himself, his family, and their supposed ancestry. Times are scary, and people need a hero. Unfortunately, for many, he’s the best they’ve got.
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Có phải đó thực sự là Satoshi không?', // Was that really Satoshi
      paragraph_one:
 '—SATOSHI NAKAMOTO: ”Làm tốt. Giờ thì cả thế giới có thể tự mình thấy rằng Vanderpoole là một kẻ lừa đảo. Ngay cả khi một số người vẫn chưa tin, họ sẽ tin trước khi công việc của chúng ta hoàn thành.”', // —SATOSHI NAKAMOTO: ”Well done. Now the world can see for itself that Vanderpoole is a fraud. Even if some don’t believe it yet, they will before our work is done.”
      paragraph_two:
 'Bạn dừng lại một lúc và nhận ra rằng mọi tin nhắn cho đến thời điểm này đều được ký “Satoshi Nakamoto”. Bạn đã luôn cho rằng đây là bút danh được sử dụng bởi ai đó tôn trọng các nguyên tắc cốt lõi của Bitcoin. Chắc chắn, họ không thể là Satoshi Nakamoto thực sự. Nhưng cuối cùng, bạn quyết định, việc hỏi cũng đáng.', // You pause for a moment and realize that every message up to this point has been signed “Satoshi Nakamoto.” You had just assumed that this was a pseudonym used by someone who adheres to bitcoin’s core principles. Surely, they couldn’t be the real Satoshi Nakamoto. But, finally, you decide, it’s worth asking.
      paragraph_three:
 '—”Điều này có thể khiến tôi trông thật ngu ngốc, nhưng liệu ông có phải là Satoshi thực sự không?”', // —”This might make me sound stupid, but are you the real Satoshi?”
    },
    intro_two: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Trả cho Mika 3000', // Paying Mika 3000
      paragraph_one:
 '—HOLOCAT: “Hầu như không có gì khiến bạn trông ngu ngốc hơn gần đây.”', // —HOLOCAT: “Hardly the only thing to make you sound stupid lately.”
      paragraph_two:
 '—SATOSHI NAKAMOTO: “Bitcoin đã vượt xa tầm kiểm soát của người tạo ra nó nhiều năm trước. Cho dù Vanderpoole hay tôi có phải là Satoshi, hay một trong những hậu duệ của họ thì cũng không quan trọng. Bitcoin được định nghĩa bởi cộng đồng của nó và không thể bị một cá nhân hoặc thực thể nào đó chiếm đoạt - kể cả Satoshi. Chứng minh điều này là trận chiến thực sự. Tôi hy vọng bạn không phiền, nhưng tôi đã nhờ người bạn phóng viên tự do lập dị của bạn liên hệ.”', // —SATOSHI NAKAMOTO: “Bitcoin moved far beyond its creator’s control many years ago. It would not matter if Vanderpoole or I were Satoshi, or one of their descendants. Bitcoin is defined by its community and cannot be co-opted by a single individual or entity—including Satoshi. Proving this is the real battle. I hope you don’t mind, but I asked your eccentric freelance reporter friend to reach out.”
      paragraph_three:
 '—Ông ta làm gì?', // —He what?
      paragraph_four:
 '—Ting.', // —Ding.
      paragraph_five:
 '—HOLOCAT: Đừng quên bấm vào tôi.', // —HOLOCAT: Don’t forget to boop me.
      paragraph_six:
 `—MIKA 3000: “Bạn rất dũng cảm, nhưng dũng cảm thôi là chưa đủ. Những gì bạn phát hiện chỉ mới là sự khởi đầu. Câu chuyện này còn nhiều điều hơn thế, nhưng chúng ta cần đến thăm hòn đảo riêng của Vanderpoole để biết chắc chắn "nhiều hơn" nghĩa là gì. Điều này sẽ tốn rất nhiều tiền, vì vậy tôi có thể sử dụng sự giúp đỡ của bạn để rút tiền từ ví đa chữ ký mà bạn đã giúp tôi thiết lập. Bạn vẫn còn một trong những khóa của tôi, phải không?”`, // —MIKA 3000: “You’ve got guts, but guts aren't enough. What you discovered is just the start. There’s more to this story, but we need to visit Vanderpoole’s private island to know for sure what "more" means. This will cost a lot, so I could use your help pulling funds off the multisig wallet that you helped me set up. You’ve got a key, right?”
    },
    in_out_one: {
      title: 'Nội tình', // The ins and outs
      nav_title: 'Giao dịch chưa chi tiêu (UTXO)', // The unspent UTXO
      paragraph_one:
 "Mika 3000 cần 1 BTC để mua đồ dùng cho chuyến đi đến hòn đảo riêng của Vanderpoole. Bạn quyết định gửi cho cô ấy 1 BTC từ phần thưởng khai thác(đào) khối mỏ chương 3 của mình, phần thưởng đã được gửi bởi nhóm khai thác(đào) khối mỏ đến địa chỉ mà bạn đã tạo trong chương 4.", // Mika 3000 needs 1 BTC to buy gear for her trip to Vanderpoole's private island. You decide to send her 1 BTC from your chapter 3 mining rewards, which have been sent by the mining mỏ to the address you created in chapter 4.
      paragraph_two:
 'Bạn mở nút đầy đủ Bitcoin của mình và thực thi một lệnh để xem tiền của mình ở đâu trong blockchain.', // You open your bitcoin full node and execute a command to see where your money is in the blockchain.
      paragraph_three:
 'Đây là đầu ra giao dịch chưa chi tiêu (UTXO). Bạn có thể nhận ra hash khóa chung được nén và địa chỉ của mình từ chương 4. Số tiền cũng có vẻ chính xác: 1.61 BTC.', // This is an unspent transaction output (aka "UTXO"). You might recognize your compressed public key hash and address from chapter 4. The amount looks right, too: 1.61 BTC.
    },
    in_out_two: {
      title: 'Nội tình', // The ins and outs
      nav_title: 'Địa chỉ nhận', // The receiving address
      paragraph_one:
 'Mika 3000 cung cấp cho bạn một địa chỉ để gửi 1 BTC đóng góp của bạn:', // Mika 3000 gives you an address to send your 1 BTC contribution to:
      paragraph_two:
 'Hm, địa chỉ đó trông dài hơn địa chỉ của bạn nhiều! Tôi tự hỏi tại sao...', // Hm, that address looks a lot longer than yours! I wonder why...
      paragraph_three:
 `Chúng ta cần tạo và ký một giao dịch gửi một trong 1.61 BTC của bạn đến địa chỉ này. Chúng ta đã xem cấu trúc giao dịch của Satoshi trong chương 5 nhưng giao dịch của bạn sẽ hơi khác. Ngày nay, có những phương pháp mới hơn để tạo giao dịch. Chúng tôi sẽ sử dụng một giao thức gọi là Segregated Witness, đặt phiên bản giao dịch thành 2.`, // We need to create and sign a transaction that sends one of your 1.61 BTC to this address. We looked at Satoshi's transaction structure in chapter 5 but yours will be a bit different. Today, there are newer methods for creating transactions. We'll be using a protocol called Segregated Witness which sets the transaction version to 2.
    },
    in_out_three: {
      title: 'Nội tình', // The ins and outs
      nav_title: 'Các bước giao dịch', // Transaction steps
      paragraph_one:
 'Các giao dịch Segregated Witness hoạt động giống như các giao dịch cũ trước đây. Có một vài giá trị toàn cầu như phiên bản và thời gian khóa. Có một mảng đầu vào (UTXO mà chúng tôi muốn chi tiêu) và một mảng đầu ra (UTXO mới mà chúng tôi muốn tạo, để những người khác chi tiêu trong tương lai). Ngoài ra còn có một mảng các chứng nhân, mỗi chứng nhân cho một đầu vào. Đó là nơi chữ ký và tập lệnh sẽ đi vào thay vì scriptSig.', // Segregated Witness transactions work just like their legacy predecessors. There are a few global values like version and locktime. There is an array of inputs (UTXOs we want to spend) and an array of outputs (new UTXOs we want to create, for other people to spend in the future). There will also be an array of witnesses, one for each input. That is where signatures and scripts will go instead of the scriptSig.
      paragraph_two:
 'Việc tuần tự hóa thông điệp cho tất cả các thành phần này được ghi nhận <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">ở đây</Link> và <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline">ở đây</Link>.', // The message serializations for all these components is documented <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">here</Link>  and <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline" >here</Link>.
    },
    in_out_four: {
      normal: {
 title: 'Nội tình', // The ins and outs
 nav_title: 'Lớp đầu vào', // The input class
 heading: 'Xem xét triển khai lớp Input', // Looking at the Input class implementation
 paragraph_one:
   'Ở đây chúng ta có mã cho hai lớp: lớp <span className="font-bold">Input</span> và lớp <span className="font-bold">Outpoint</span> (không phải "output"!).', // Here we have code for two classes: an <span className="font-bold">Input</span> class and an <span className="font-bold">Outpoint</span> (not "output"!) class.
 paragraph_two:
   'Đầu vào đến từ các đầu ra giao dịch chưa chi tiêu. Nếu bạn cung cấp mô tả của một đầu ra cho phương thức <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span>, nó sẽ tạo ra một thể hiện của lớp Input:', // Inputs come from unspent transaction outputs. If you provide the description of an output to the <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span> method, it will create an instance of the Input class:
 paragraph_three:
   'Hai đối số đầu tiên là:', // The first two arguments are:
 paragraph_four:
   '1. <span className="font-bold">txid: </span>ID của giao dịch đã tạo ra đầu ra, và', // 1. <span className="font-bold">txid: </span>the ID of the transaction that created the output, and
 paragraph_five:
   '2. <span className="font-bold">vout: </span>chỉ mục của đầu ra trong toàn bộ danh sách đầu ra của giao dịch', // 2. <span className="font-bold">vout: </span>the index of the output in the transaction's entire list of outputs
 paragraph_six:
   'Cùng nhau, hai thông tin này tạo thành một <span className="font-bold">Outpoint</span>. Cuối cùng, chúng tôi sẽ chuyển các giá trị txid và vout đã nhận được từ việc thực thi lệnh <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">listunspent</span> trong bài tập trước.', // Together, these two pieces of information make up an <span className="font-bold">Outpoint</span>. Eventually we will pass in the txid and vout values that came from executing the <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">listunspent</span> command in the previous exercise. 
 paragraph_seven:
   "Hai đối số thứ hai là giá trị của đầu ra mà chúng tôi muốn chi tiêu (tính bằng satoshi) và một thứ gọi là scriptcode. Dữ liệu đó không cần thiết cho đến sau này nên hãy tạm thời sử dụng một mảng byte trống.", // "The second two arguments are the value of the output we want to spend (in satoshis) and something called a scriptcode. That data is not needed until later so let's temporarily use an empty byte array."
 paragraph_eight: {
   a: 'Hashes trong Bitcoin là', // Hashes in bitcoin are
   b: {
     text: ' được đảo ngược', // reversed
     question: 'Tại sao chúng ta đảo ngược hashes trong Bitcoin?', // Why do we reverse hashes in bitcoin?
     href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=why%2520are%2520hashes%2520reversed%2520in%2520bitcoin',
   },
   c: `, nhưng chỉ khi được trình bày hoặc nhập bởi người dùng. Khi một hash được cung cấp ở định dạng thập lục phân, thứ tự byte phải được đảo ngược trước khi lưu trữ hoặc truyền dữ liệu dưới dạng byte thô.`, // , but only when presented to or entered by a user. When a hash is provided in hexadecimal format, the byte order must be reversed before storing or transmitting the data as raw bytes.
 },
 paragraph_nine: `Bạn có thể thấy một ví dụ về điều này trong phương thức <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span> nơi nó xử lý đối số txid.`, // You can see an example of this in the <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span> method where it handles the txid argument.
 paragraph_ten: `Chúng ta cũng cần một phương thức <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">serialize()</span> trả về một mảng byte theo thông số kỹ thuật. Đây là cách giao dịch thực sự được gửi giữa các nút trên mạng và cách nó được thể hiện trong một khối:`, // We also need a <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">serialize()</span> method that returns a byte array according to the specification. This is how the transaction is actually sent between nodes on the network, and how it is expressed in a block:
 heading_three: 'Outpoint', // Outpoint
 table_one: {
   heading: {
     one: 'Mô tả', // Description
     two: 'Tên', // Name
     three: 'Kiểu', // Type
     four: 'Kích thước', // Size
   },
   row_one: {
     column: {
one: 'Hash của giao dịch đang được chi tiêu từ', // Hash of transaction being spent from
two: 'txid', // txid
three: 'bytes', // bytes
four: '32', // 32
     },
   },
   row_two: {
     column: {
one: "Vị trí của đầu ra đang được chi tiêu trong mảng đầu ra của giao dịch", // Position of output being spent in the transaction's output array
two: 'index', // index
three: 'int', // int
four: '4', 
     },
   },
 },
 heading_four: 'Đầu vào', // Input
 table_two: {
   row_one: {
     column: {
one: 'txid và chỉ mục đầu ra đang được chi tiêu từ', // txid and output index being spent from
two: 'outpoint', // outpoint
three: 'bytes', // bytes
four: '36',
     },
   },
   row_two: {
     column: {
one: 'Độ dài ScriptSig (luôn bằng 0 cho Segregated Witness)', // ScriptSig length (always 0 for Segregated Witness)
two: 'length', // length
three: 'int', // int
four: '1',
     },
   },
   row_three: {
     column: {
one: 'Luôn trống cho Segregated Witness', // Always empty for Segregated Witness
two: 'script', // script
three: 'bytes', // bytes
four: '0',
     },
   },
   row_four: {
     column: {
one: 'Giá trị mặc định là 0xffffffff nhưng có thể được sử dụng cho khóa thời gian tương đối', // Default value is 0xffffffff but can be used for relative timelocks
two: 'sequence', // sequence
three: 'int',
four: '4',
     },
   },
 },
 paragraph_eleven: {
   a: 'Nhớ rằng: các số nguyên trong Bitcoin được tuần tự hóa ', // Remember: integers in bitcoin are serialized
   b: {
     text: 'little-endian', // little-endian
     question: 'Endianness là gì?', // What is endianness?
     href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520endianness%253F',
   },
 },
 success: 'Lớp Input trông ổn. Làm tốt!', // The Input class looks good. Great Work!
      },
      hard: {
 title: 'Nội tình', // The ins and outs
 nav_title: 'Xây dựng lớp Input', // Build the input class
 heading: 'Hoàn thành việc triển khai Lớp Input', // Finish the implementation of Class Input
 paragraph_one: 'Nó nên có phương thức sau:', // It should have the following method:
 paragraph_two:
   'Hai đối số đầu tiên là ID giao dịch và chỉ mục của đầu ra của giao dịch đó mà bạn muốn chi tiêu từ đó.', // The First two arguments are the transaction ID and the index of the output of that transaction you want to spend from.
 paragraph_three:
   'Cuối cùng, chúng ta sẽ chuyển các giá trị txid và vout mà bạn đã nhận được ở trên từ listunspent. Lưu ý rằng các hash trong Bitcoin là little-endian, có nghĩa là bạn sẽ cần phải đảo ngược thứ tự byte của chuỗi txid!', // Eventually we will pass in the txid and vout values you got above from listunspent. Note that hashes in bitcoin are little-endian, which means that you will need to reverse the byte order of the txid string!
 paragraph_four:
   "Hai đối số thứ hai là giá trị của đầu ra mà chúng tôi muốn chi tiêu (tính bằng satoshi) và một thứ gọi là scriptcode. Đối với bây giờ, chỉ cần lưu trữ những dữ liệu này dưới dạng thuộc tính của lớp Input, chúng tôi sẽ không cần chúng cho đến bước 6.", // "The second two arguments are the value of the output we want to spend (in satoshis) and something called a scriptcode. For now, just store these data as properties of the Input class, we won't need them until step 6."
 paragraph_five:
   'Chúng ta cũng cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> trả về một mảng byte theo thông số kỹ thuật:', // We also need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that returns a byte array according to the specification:
 heading_two: 'Outpoint', // Outpoint
 table_one: {
   heading: {
     one: 'Mô tả', // Description
     two: 'Tên', // Name
     three: 'Kiểu', // Type
     four: 'Kích thước', // Size
   },
   row_one: {
     column: {
one: 'Hash của giao dịch đang được chi tiêu từ', // Hash of transaction being spent from
two: 'txid', // txid
three: 'bytes', // bytes
four: '32', // 32
     },
   },
   row_two: {
     column: {
one: "Vị trí của đầu ra đang được chi tiêu trong mảng đầu ra của giao dịch", // Position of output being spent in the transaction's output array
two: 'index', // index
three: 'int', // int
four: '4',
     },
   },
 },
 heading_three: 'Input',
 table_two: {
   row_one: {
     column: {
one: 'txid và chỉ mục đầu ra đang được chi tiêu từ', // txid and output index being spent from
two: 'outpoint',
three: 'bytes',
four: '36',
     },
   },
   row_two: {
     column: {
one: 'Độ dài ScriptSig (luôn bằng 0 cho Segregated Witness)', // ScriptSig length (always 0 for Segregated Witness)
two: 'length', // length
three: 'int',
four: '1',
     },
   },
   row_three: {
     column: {
one: 'Luôn trống cho Segregated Witness', // Always empty for Segregated Witness
two: 'script', // script
three: 'bytes',
four: '0',
     },
   },
   row_four: {
     column: {
one: 'Giá trị mặc định là 0xffffffff nhưng có thể được sử dụng cho khóa thời gian tương đối', // Default value is 0xffffffff but can be used for relative timelocks
two: 'sequence', // sequence
three: 'int',
four: '4',
     },
   },
 },
 success: 'Lớp Input trông ổn. Làm tốt!', // The Input class looks good. Great Work!
      },
    },
    in_out_five: {
      title: 'Nội tình', // The ins and outs
      nav_title: 'Xây dựng lớp Output', // Build the output class
      heading: 'Hoàn thành việc triển khai Lớp Output', // Finish the implementation of the Output class
      paragraph_one:
 'Giống như lớp Input, nó cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">from_options()</span> sẽ tạo một đối tượng Output từ dữ liệu do người dùng cung cấp:', // Like the Input class, it needs a method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">from_options()</span> that will construct an Output object from user-provided data:
      paragraph_two:
 `Nó chấp nhận một địa chỉ Bitcoin dưới dạng chuỗi (như địa chỉ từ Mika 3000) và một giá trị dưới dạng số nguyên. Giá trị được biểu thị bằng số lượng satoshi! Hãy nhớ rằng, 1 BTC = 100000000 satoshi. Bạn sẽ cần sử dụng lại thư viện bech32 của chúng tôi để giải mã địa chỉ thành các thành phần phiên bản và dữ liệu.
 Lớp này cũng cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span>  trả về một mảng byte theo thông số kỹ thuật:`, // It accepts a bitcoin address as a string (like the address from Mika 3000) and a value as an integer. The value is expressed as a number of satoshis! Remember, 1 BTC = 100000000 satoshis. You will need to use our bech32 library again to decode the address into version and data components. The class also needs a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span>  method that returns a byte array according to the specification:
      heading_two: 'Đầu ra', // Output
      table: {
 heading: {
   one: 'Mô tả', // Description
   two: 'Tên', // Name
   three: 'Kiểu', // Type
   four: 'Kích thước', // Size
 },
 row_one: {
   column: {
     one: 'Số lượng satoshi đang được gửi.', // Number of satoshis being sent.
     two: 'value', // value
     three: 'bytes', // bytes
     four: '8', // 8
   },
 },
 row_two: {
   column: {
     one: 'Tổng độ dài của tập lệnh sau (chương trình "witness").', // Total length of the following script (the "witness program").
     two: 'length', // length
     three: 'int',
     four: '1',
   },
 },
 row_three: {
   column: {
     one: 'Phiên bản Segregated Witness. Đã được suy ra từ địa chỉ bech32.', // The segregated witness version. Derived from the bech32 address.
     two: 'version', // version
     three: 'int',
     four: '1',
   },
 },
 row_four: {
   column: {
     one: 'Độ dài của dữ liệu chương trình witness tiếp theo.', // Length of the following witness program data.
     two: 'length',
     three: 'int',
     four: '1',
   },
 },
 row_five: {
   column: {
     one: 'Thành phần dữ liệu được suy ra từ địa chỉ bech32.', // The data component derived from the bech32 address.
     two: 'index',
     three: 'bytes',
     four: '(var)',
   },
 },
      },
      paragraph_three:
 "Đừng quên: các số nguyên trong Bitcoin được tuần tự hóa little-endian!", // Don't forget: integers in bitcoin are serialized little-endian!
      success: 'Lớp Output trông ổn. Làm tốt!', // The Output class looks good. Great Work!
    },
    put_it_together_one: {
      title: 'Kết hợp tất cả', // Putting it all together
      normal: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Xây dựng bản tóm tắt giao dịch', // Build the transaction digest
 heading: 'Bản tóm tắt giao dịch', // Transaction digest
 paragraph_one:
   'Trong chương 5, chúng tôi đã học được rằng để ký một giao dịch, trước tiên chúng tôi cần sắp xếp lại và mã hóa dữ liệu của nó thành một thông báo, thông báo này trở thành một trong các đầu vào thô cho thuật toán ký của chúng tôi. Vì bây giờ chúng tôi đang sử dụng segregated witness, chúng tôi cũng cần triển khai thuật toán bản tóm tắt giao dịch được cập nhật được chỉ định trong <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.', // In chapter 5 we learned that to sign a transaction we first need to rearrange and hash its data into a message, which becomes one of the raw inputs to our signing algorithm. Since we are using segregated witness now, we also need to implement the updated transaction digest algorithm which is specified in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.
 paragraph_two:
   'Hãy nhớ rằng mỗi đầu vào giao dịch cần có chữ ký riêng và do đó một số thành phần của thuật toán tóm tắt có thể được lưu trữ và sử dụng lại nhưng một số thành phần khác sẽ khác nhau tùy thuộc vào đầu vào nào đang được ký! Hoàn thành phương thức giao dịch <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> tính toán thông báo 32 byte để ký một đầu vào.', // Remember each transaction input needs its own signature, and so some components of the digest algorithm can be cached and reused but others will be different depending on which input is being signed! Finish the transaction method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> that computes the 32-byte message for signing an input.
 list_heading: 'Một số lưu ý:', // Some notes:
 list_one: '"Double SHA-256" hay dSHA256 = sha256(sha256(data))', // "Double SHA-256" or dSHA256 = sha256(sha256(data))
 list_two:
   'value là số lượng satoshi trong đầu ra được chi tiêu. Chúng tôi đã thêm nó vào lớp Input của chúng tôi ở bước 2 và chỉ lưu nó ở đó bên trong lớp cho đến bây giờ.', // value is the amount of the satoshis in the output being spent from. We added it to our Input class back in step 2, and just saved it there inside the class until now.
 list_three:
   'scriptcode là script Bitcoin thô đang được đánh giá. Chúng tôi cũng đã thêm nó vào lớp Input của chúng tôi ở bước 2.', // scriptcode is the raw bitcoin script being evaluated. We also added this to our Input class back in step 2.
 list_four: 'tất cả các số nguyên được mã hóa theo little-endian!', // all integers are encoded as little-endian!
 paragraph_three:
   'Chúng tôi sẽ đi sâu vào vấn đề này hơn trong phần tiếp theo, nhưng để chi tiêu từ địa chỉ pay-to-witness-public-key-hash (P2WPKH) của bạn, scriptcode của bạn sẽ là:', // We'll dive in to this more in the next section, but to spend from your pay-to-witness-public-key-hash (P2WPKH) address, your scriptcode would be:
 paragraph_four: '...mà giải mã thành script Bitcoin sau đây.', // ...which decodes to the following bitcoin script.
 paragraph_five:
   'Để biết thêm thông tin về scriptcode, hãy xem <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.', // For more information about scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP
 headings: {
   item_one: 'Mô tả', // Description
   item_two: 'Name',
   item_three: 'Type',
   item_four: 'Size',
 },
 table: {
   row_one: {
     item_one: 'Transaction version, default 2',
     item_two: 'version',
     item_three: 'int',
     item_four: '4',
   },
   row_two: {
     item_one:
'The dSHA256 of all outpoints from all inputs, serialized',
     item_two: 'bytes',
     item_three: 'bytes',
     item_four: '32',
   },
   row_three: {
     item_one:
'The dSHA256 of all sequence values from all inputs, serialized',
     item_two: 'sequences',
     item_three: 'bytes',
     item_four: '32',
   },
   row_four: {
     item_one:
'The serialized outpoint of the single input being signed ',
     item_two: 'outpoint',
     item_three: 'bytes',
     item_four: '36',
   },
   row_five: {
     item_one: 'The output script being spent from',
     item_two: 'scriptcode',
     item_three: 'bytes',
     item_four: '(var)',
   },
   row_six: {
     item_one:
'The value in satoshis being spent by the single input being signed',
     item_two: 'value',
     item_three: 'int',
     item_four: '8',
   },
   row_seven: {
     item_one: 'The sequence value of the single input being signed',
     item_two: 'sequence',
     item_three: 'int',
     item_four: '4',
   },
   row_eight: {
     item_one: 'The dSHA256 of all outputs, serialized',
     item_two: 'outputs',
     item_three: 'bytes',
     item_four: '32',
   },
   row_nine: {
     item_one: 'Transaction locktime, default 0',
     item_two: 'locktime',
     item_three: 'int',
     item_four: '4',
   },
   row_ten: {
     item_one: 'Signature hash type, we will use 1 to indicate "ALL"',
     item_two: 'sighash',
     item_three: 'int',
     item_four: '4',
   },
 },
 paragraph_seven:
   'Cuối cùng, thông báo chúng ta ký là double SHA-256 của tất cả dữ liệu tuần tự hóa này.', // Finally, the message we sign is the double SHA-256 of all this serialized data.
 success: 'Phương thức digest() trông ổn. Làm tốt!', // The digest() method looks good. Great Work!
      },
      hard: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Xây dựng lớp witness', // Build the witness class
 heading: 'Hoàn thành việc triển khai Lớp Witness', // Finish the implementation of Class Witness
 paragraph_one:
   'Nó nên có phương thức sau, chấp nhận một mảng byte và thêm mục đó vào ngăn xếp witness.', // It should have the following method, which accepts a byte array and adds that item to the witness stack.
 paragraph_two:
   'Nó cũng sẽ cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> trả về ngăn xếp witness được tuần tự hóa.', // It will also need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that returns the serialized witness stack.
 subheading_one: 'Ngăn xếp witness', // Witness stack
 headings: {
   item_one: 'Description',
   item_two: 'Name',
   item_three: 'Type',
   item_four: 'Size',
 },
 table_one: {
   row_one: {
     item_one: 'The number of items in the witness stack',
     item_two: 'count',
     item_three: 'int',
     item_four: '1',
   },
   row_two: {
     item_one: 'Serialized stack items',
     item_two: 'items',
     item_three: '(items)',
     item_four: '(var)',
   },
 },
 subheading_two: 'Witness stack item',
 table_two: {
   row_one: {
     item_one: 'Total length of the following stack item',
     item_two: 'length',
     item_three: 'int',
     item_four: '1',
   },
   row_two: {
     item_one: 'The raw bytes of the stack item',
     item_two: 'data',
     item_three: 'bytes',
     item_four: '(var)',
   },
 },
 success: 'The Witness class looks good. Great Work!',
      },
    },
    put_it_together_two: {
      normal: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Xây dựng lớp witness', // Build the witness class
 heading: 'Ký và Điền vào Witness!', // Sign and Populate the Witness!
 paragraph_one:
   'Trong chương trước, chúng tôi đã viết một số đoạn mã xác minh chữ ký ECDSA quan trọng. Bây giờ, để tạo chữ ký hợp lệ, chúng tôi sẽ lấy đoạn mã đó và sắp xếp lại một chút.', // In the last chapter, we wrote some important ECDSA signature verification code. Now, in order to create a valid signature, we are going to take that code and rearrange it a bit.
 paragraph_two:
   "Trong bài tập này, chúng tôi sẽ triển khai một số phép toán đằng sau thuật toán ký ECDSA. Để biết thêm thông tin về cách thức hoạt động của nó, hãy kiểm tra các tài nguyên này:", // In this exercise we'll be implementing some of the math behind the ECDSA signing algorithm. For more information on how that works, check out these resources:
 paragraph_three:
   '• Trang Wikipedia cho <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">Elliptic Curve Digital Signature Algorithm</Link>', // • The Wikipedia page for <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">Elliptic Curve Digital Signature Algorithm</Link>
 paragraph_four:
   '• <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">Tiêu chuẩn cho Mật mã Hiệu quả 1 (SEC 1)</Link>: Trang 44, Mục 4.1.3', // • <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">Standards for Efficient Cryptography 1 (SEC 1)</Link>: Page 44, Section 4.1.3
 heading_one: 'Bước 1', // Step 1
 paragraph_five:
   'Trong lớp Transaction, có một phương thức, <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> chấp nhận số thứ tự của đầu vào và khóa riêng (một số nguyên 32 byte hoặc BigInt trong JavaScript). Hoàn thành phương thức này để nó tính toán bản tóm tắt thông báo cho đầu vào được chọn. Sử dụng phương thức <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">digest()</span> từ bước cuối cùng của chúng tôi, sau đó trả về chữ ký ECDSA dưới dạng hai số nguyên 32 byte: <span className="italic">r</span> và <span className="italic">s</span>.', // In the Transaction class, there is a method, <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> that accepts the index number of an input and a private key (a 32-byte integer, or BigInt in JavaScript). Finish this method so it computes the message digest for the chosen input. Use the <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">digest()</span> method from our last step, then return an ECDSA signature in the form of two 32-byte integers: <span className="italic">r</span> and <span className="italic">s</span>.
 heading_two: 'Bước 2', // Step 2
 paragraph_six:
   'Đối với thuật toán ký, giao thức bitcoin yêu cầu thêm một điều nữa. Giá trị <span className="italic">s</span> cần phải "thấp", nghĩa là nhỏ hơn order của đường cong chia cho 2. Thêm kiểm tra này vào <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature()</span>.', // For the signing algorithm, the bitcoin protocol requires one more thing. The <span className="italic">s</span> value needs to be "low", meaning less than the order of the curve divided by
      },
      hard: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Tuần tự hóa giao dịch', // Serialize the transaction
 heading: 'Hoàn thành việc triển khai Lớp Transaction', // Finish the implementation of Class Transaction
 paragraph_one:
   'Nó nên có các thuộc tính toàn cục locktime và phiên bản cũng như một mảng đầu vào, đầu ra và ngăn xếp witness.', // It should have global properties locktime and version as well as an array of inputs, outputs and witness stacks.
 paragraph_two:
   'Nó sẽ cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> trả về toàn bộ giao dịch dưới dạng byte được định dạng để phát sóng trên mạng ngang hàng Bitcoin.', // It will need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that outputs the enitire transaction as bytes formatted for broadcast on the bitcoin p2p network.
 headings: {
   item_one: 'Description',
   item_two: 'Name',
   item_three: 'Type',
   item_four: 'Size',
 },
 table: {
   row_one: {
     item_one: 'Currently 2',
     item_two: 'version',
     item_three: 'int',
     item_four: '4',
   },
   row_two: {
     item_one: 'Must be exactly 0x0001 for segregated witness',
     item_two: 'flags',
     item_three: 'bytes',
     item_four: '2',
   },
   row_three: {
     item_one: 'The number of inputs',
     item_two: 'in count',
     item_three: 'int',
     item_four: '1',
   },
   row_four: {
     item_one: 'All transaction inputs,serialized',
     item_two: 'inputs',
     item_three: 'Inputs[]',
     item_four: '(var)',
   },
   row_five: {
     item_one: 'The number of outputs',
     item_two: 'out count',
     item_three: 'int',
     item_four: '1',
   },
   row_six: {
     item_one: 'All transaction outputs,serialized',
     item_two: 'outputs',
     item_three: 'Outputs[]',
     item_four: '(var)',
   },
   row_seven: {
     item_one: 'All witness stacks, serialized',
     item_two: 'witness',
     item_three: 'Witnesses[]',
     item_four: '(var)',
   },
   row_eight: {
     item_one: 'Setting to 0 indicates finality',
     item_two: 'locktime',
     item_three: 'int',
     item_four: '4',
   },
 },
 paragraph_three:
   'Lưu ý rằng không có giá trị "đếm" nào cho các witness. Đó là bởi vì số lượng ngăn xếp witness phải luôn bằng chính xác với số lượng đầu vào.', // Notice that there is no "count" value for witnesses. That is because the number of witness stacks must always be exactly equal to the number of inputs.
 success: 'Phương thức serialize() trông ổn. Làm tốt!', // The serialize() method looks good. Great Work!
      },
    },
    put_it_together_three: {
      normal: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Ký giao dịch', // Sign the transaction
 heading: 'Hoàn thành việc triển khai Lớp Transaction', // Finish the implementation of Class Transaction
 paragraph_one:
   'Để hoàn thành giao dịch của chúng tôi, chúng tôi sẽ cần một phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> xuất ra toàn bộ giao dịch dưới dạng byte được định dạng để phát sóng trên mạng ngang hàng Bitcoin.', // To complete our transaction we will need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that outputs the entire transaction as bytes formatted for broadcast on the bitcoin p2p network.
 paragraph_two:
   'Script của chúng tôi sẽ tạo và ký một đối tượng Transaction. Nó sẽ có một đầu vào (UTXO mà chúng tôi đã xác định trong <span className="underline">Lớp đầu vào</span>) và hai đầu ra:', // Our script will create and sign a Transaction object. It will have one input (the UTXO we identified in <span className="underline">The input class</span>) and two outputs:
 paragraph_three:
   'Chúng tôi biết đầu vào của mình, chúng tôi biết đầu ra của mình. Chúng tôi đã sẵn sàng để xây dựng và ký một giao dịch chưa? Chưa hẳn. Chúng tôi có đầu vào 1.61 BTC và đầu ra 1 BTC ... điều gì sẽ xảy ra với 0.61 BTC còn lại? Hầu hết số tiền đó sẽ là "tiền thừa" và chúng tôi cần gửi lại số tiền đó về địa chỉ của chính mình!', // We know our input, we know our output. Are we ready to build and sign a transaction? Not quite. We have a 1.61 BTC input and a 1 BTC output... what happens to the 0.61 BTC? Most of that will be "change" and we need to send it back to our own address!
 paragraph_four:
   'Lưu ý rằng không có giá trị "đếm" nào cho các witness. Đó là bởi vì số lượng ngăn xếp witness phải luôn bằng chính xác với số lượng đầu vào.', // Notice that there is no "count" value for witnesses. That is because the number of witness stacks must always be exactly equal to the number of inputs.
 paragraph_five:
   'Nhưng đợi đã! Chúng tôi cần bao gồm một "phí". Chúng tôi sẽ cắt giảm một phần nhỏ trong số tiền thừa của chúng tôi từ 61.000.000 xuống còn 60.999.000 satoshi để khuyến khích các nhóm khai thác(đào) khối mỏ đưa giao dịch của chúng tôi vào một khối.', // But wait! We need to include a "fee". We'll shave off a tiny piece of our change output from 61,000,000 to 60,999,000 satoshis to incentivize the mining mỏs to include our transaction in a block.
 paragraph_six:
   'Cuối cùng, công việc của chúng tôi đã hoàn thành. Script của bạn sẽ kết thúc bằng cách trả về kết quả của phương thức tuần tự hóa giao dịch. Đây là một giao dịch Bitcoin đã được ký hợp lệ và chúng tôi có thể phát sóng nó trên mạng để gửi cho Mika 3000 số tiền cô ấy cần!', // Finally our work is done. Your script should end by returning the result of the transaction serialize() method. This is a valid signed bitcoin transaction and we can broadcast it to the network to send Mika 3000 the money she needs!
 headings: {
   item_one: 'Description',
   item_two: 'Name',
   item_three: 'Type',
   item_four: 'Size',
 },
 table: {
   row_one: {
     item_one: 'Currently 2',
     item_two: 'version',
     item_three: 'int',
     item_four: '4',
   },
   row_two: {
     item_one: 'Must be exactly 0x0001 for segregated witness',
     item_two: 'flags',
     item_three: 'bytes',
     item_four: '2',
   },
   row_three: {
     item_one: 'The number of inputs',
     item_two: 'in count',
     item_three: 'int',
     item_four: '1',
   },
   row_four: {
     item_one: 'All transaction inputs, serialized',
     item_two: 'inputs',
     item_three: 'Inputs[]',
     item_four: '(var)',
   },
   row_five: {
     item_one: 'The number of outputs',
     item_two: 'out count',
     item_three: 'int',
     item_four: '1',
   },
   row_six: {
     item_one: 'All transaction outputs, serialized',
     item_two: 'outputs',
     item_three: 'Outputs[]',
     item_four: '(var)',
   },
   row_seven: {
     item_one: 'All witness stacks, serialized',
     item_two: 'witness',
     item_three: 'Witnesses[]',
     item_four: '(var)',
   },
   row_eight: {
     item_one: 'Setting to 0 indicates finality',
     item_two: 'locktime',
     item_three: 'int',
     item_four: '4',
   },
 },
 bullet_one:
   'Mika 3000 nhận được 100.000.000 satoshi vào bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj', // Mika 3000 gets 100,000,000 satoshis to bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj
 bullet_two:
   'Bạn nhận lại 61.000.000 vào địa chỉ của mình bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs', // You get 61,000,000 back to your address bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs
 success: "Bạn đã làm được! Bạn đã xây dựng một giao dịch!", // You've done it! You've built a transaction!
      },
      hard: {
 title: 'Kết hợp tất cả', // Putting it all together
 nav_title: 'Xây dựng bản tóm tắt giao dịch', // Build the transaction digest
 heading: 'Bản tóm tắt giao dịch', // Transaction digest
 paragraph_one:
   'Trong chương 5, chúng tôi đã học được rằng để ký một giao dịch, trước tiên chúng tôi cần sắp xếp lại và mã hóa dữ liệu của nó thành một thông báo, thông báo này trở thành một trong các đầu vào thô cho thuật toán ký của chúng tôi. Vì bây giờ chúng tôi đang sử dụng segregated witness, chúng tôi cũng cần triển khai thuật toán bản tóm tắt giao dịch được cập nhật được chỉ định trong <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.', // In chapter 5 we learned that to sign a transaction we first need to rearrange and hash its data into a message, which becomes one of the raw inputs to our signing algorithm. Since we are using segregated witness now, we also need to implement the updated transaction digest algorithm which is specified in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.
 paragraph_two:
   'Hãy nhớ rằng mỗi đầu vào giao dịch cần có chữ ký riêng và do đó một số thành phần của thuật toán tóm tắt có thể được lưu trữ và sử dụng lại nhưng một số thành phần khác sẽ khác nhau tùy thuộc vào đầu vào nào đang được ký! Hoàn thành phương thức giao dịch <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> tính toán thông báo 32 byte để ký một đầu vào.', // Remember each transaction input needs its own signature, and so some components of the digest algorithm can be cached and reused but others will be different depending on which input is being signed! Finish the transaction method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> that computes the 32-byte message for signing an input.
 list_heading: 'Một số lưu ý:', // Some notes:
 list_one: '"Double SHA-256" hay dSHA256 = sha256(sha256(data))', // "Double SHA-256" or dSHA256 = sha256(sha256(data))
 list_two:
   'value là số lượng satoshi trong đầu ra được chi tiêu. Chúng tôi đã thêm nó vào lớp Input của chúng tôi ở bước 2 và chỉ lưu nó ở đó bên trong lớp cho đến bây giờ.', // value is the amount of the satoshis in the output being spent from. We added it to our Input class back in step 2, and just saved it there inside the class until now.
 list_three:
   'scriptcode là script Bitcoin thô đang được đánh giá. Chúng tôi cũng đã thêm nó vào lớp Input của chúng tôi ở bước 2.', // scriptcode is the raw bitcoin script being evaluated. We also added this to our Input class back in step 2.
 paragraph_three:
   'Chúng tôi sẽ đi sâu vào vấn đề này hơn trong phần tiếp theo, nhưng để chi tiêu từ địa chỉ pay-to-witness-public-key-hash (P2WPKH) của bạn, scriptcode của bạn sẽ là:', // We'll dive in to this more in the next section, but to spend from your pay-to-witness-public-key-hash (P2WPKH) address, your scriptcode would be:
 paragraph_four: '...mà giải mã thành script Bitcoin sau đây.', // ...which decodes to the following bitcoin script.
 paragraph_five:
   'Để biết thêm thông tin về scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.', // For more information about scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.
 paragraph_six:
   'Giao dịch thô có một ảnh tiền thân là phần tuần tự hóa của:', // 'The raw transaction has a preimage that is the serialization of:',
 headings: {
   item_one: 'Description',
   item_two: 'Name',
   item_three: 'Type',
   item_four: 'Size',
 },
 table: {
   row_one: {
     item_one: 'Transaction version, default 2',
     item_two: 'version',
     item_three: 'int',
     item_four: '4',
   },
   row_two: {
     item_one:
'The dSHA256 of all outpoints from all inputs, serialized',
     item_two: 'bytes',
     item_three: 'bytes',
     item_four: '32',
   },
   row_three: {
     item_one:
'The dSHA256 of all sequence values from all inputs, serialized',
     item_two: 'sequences',
     item_three: 'bytes',
     item_four: '32',
   },
   row_four: {
     item_one:
'The serialized outpoint of the single input being signed ',
     item_two: 'outpoint',
     item_three: 'bytes',
     item_four: '36',
   },
   row_five: {
     item_one: 'The output script being spent from',
     item_two: 'scriptcode',
     item_three: 'bytes',
     item_four: '(var)',
   },
   row_six: {
     item_one:
'The value in satoshis being spent by the single input being signed',
     item_two: 'value',
     item_three: 'int',
     item_four: '8',
   },
   row_seven: {
     item_one: 'The sequence value of the single input being signed',
     item_two: 'sequence',
     item_three: 'int',
     item_four: '8',
   },
   row_eight: {
     item_one: 'The dSHA256 of all outputs, serialized',
     item_two: 'outputs',
     item_three: 'bytes',
     item_four: '32',
   },
   row_nine: {
     item_one: 'Transaction locktime, default 0',
     item_two: 'locktime',
     item_three: 'int',
     item_four: '4',
   },
   row_ten: {
     item_one: 'Signature hash type, we will use 1 to indicate "ALL',
     item_two: 'sighash',
     item_three: 'int',
     item_four: '4',
   },
 },
 paragraph_seven:
   'Finally, the message we sign is the double SHA-256 of all this serialized data.',
 success: 'The digest() method looks good. Great Work!',
      },
    },
    put_it_together_four: {
      hard: {
 title: 'Putting it all together',
 heading: 'Signing!',
 nav_title: 'Sign the transaction',
 paragraph_one: `We wrote the ECDSA signature verification code in the last chapter, now we need to rearrange that a bit to create a valid signature. Add a method called <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index: int, key: int)</span> to your Transaction class that accepts an input index number and a private key (a 32-byte integer!). It should compute the message digest for the chosen input using the <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest()</span> method from step 6, and return an ECDSA signature in the form of two 32-byte integers r and s.`,
 paragraph_two:
   'See <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">this page</Link> for the ECDSA signing algorithm. Also <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">this PDF</Link> (Page 44, Section 4.1.3).',
 paragraph_three:
   'The bitcoin protocol requires one extra step to the signing algorithm, which requires that the s value is "low", meaning less than the order of the curve divided by 2. Learn more about this in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link>.',
 success: 'The compute_input_signature() method looks good. Great Work!',
      },
    },
    put_it_together_five: {
      hard: {
 title: 'Kết hợp tất cả', // Putting it all together
 heading: 'Điền vào Witness', // Populate the Witness
 nav_title: 'Điền vào Witness', // Populate the Witness
 paragraph_one:
   'Hoàn thành phương thức <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">sign_input(index: int, key: int)</span> gọi phương thức bước 7 của chúng tôi <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index, key)</span> và xử lý giá trị trả về của nó. Các số r và s cần được mã hóa bằng thuật toán gọi là DER mà chúng tôi đã triển khai cho bạn.', // Finish the method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">sign_input(index: int, key: int)</span> that calls our step 7 method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index, key)</span> and handles its return value. The r and s numbers need to be encoded with an algorithm called DER which we have implemented for you.
 paragraph_two:
   'Bitcoin yêu cầu thêm một byte được nối vào cuối chữ ký DER, đại diện cho "loại sighash". Hiện tại, chúng tôi sẽ luôn sử dụng byte 0x01 cho việc này, biểu thị "SIGHASH ALL".', // Bitcoin requires one extra byte appended to the DER-signature which represents the "sighash type". For now we’ll always use the byte 0x01 for this indicating "SIGHASH ALL".
 paragraph_three:
   'Sau khi chúng ta có khối chữ ký đó, chúng ta cần tạo một đối tượng Witness với hai mục ngăn xếp: khối chữ ký đã mã hóa DER và khóa chung nén của bạn. Đẩy chữ ký trước, tiếp theo là khóa chung.', // Once we have that signature blob, we need to create a Witness object with two stack items: the signature blob, and your compressed public key. Push the signature first, followed by the public key.
 paragraph_four:
   'Đối tượng ngăn xếp witness có thể được thêm vào mảng các witness của đối tượng giao dịch.', // The witness stack object can then be appended to the witnesses array of the transaction object.
 success: 'Phương thức sign_input() trông ổn. Làm tốt!', // The sign_input() method looks good. Great Work!
      },
    },
    put_it_together_six: {
      hard: {
 title: 'Kết hợp tất cả', // Putting it all together
 heading: 'Kết hợp tất cả!', // Put it All Together
 nav_title: 'Kết hợp tất cả!', // Put it All Together!
 paragraph_one:
   'Chúng tôi biết đầu vào của mình, chúng tôi biết đầu ra của mình. Chúng tôi đã sẵn sàng để xây dựng và ký một giao dịch chưa? Chưa hẳn. Chúng tôi có đầu vào 1.61 BTC và đầu ra 1 BTC ... điều gì sẽ xảy ra với 0.61 BTC còn lại? Hầu hết số tiền đó sẽ là "tiền thừa" và chúng tôi cần gửi lại số tiền đó về địa chỉ của chính mình!', // We know our input, we know our output. Are we ready to build and sign a transaction? Not quite. We have a 1.61 BTC input and a 1 BTC output... what happens to the 0.61 BTC? Most of that will be "change" and we need to send it back to our own address!
 paragraph_two:
   'Viết một lệnh (script) tạo và ký một đối tượng Transaction. Nó sẽ có một đầu vào (UTXO mà chúng tôi đã xác định ở bước 1) và hai đầu ra:', // Write a script that creates and signs a Transaction object. It will have one input (the UTXO we identified in step 1) and two outputs:
 paragraph_three:
   'Nhưng đợi đã! Chúng tôi cần bao gồm một "phí". Chúng tôi sẽ cắt giảm một phần nhỏ trong số tiền thừa của chúng tôi từ 61.000.000 xuống còn 60.999.000 satoshi để khuyến khích các nhóm khai thác(đào) khối mỏ đưa giao dịch của chúng tôi vào một khối.', // But wait! We need to include a "fee". We'll shave off a tiny piece of our change output from 61,000,000 to 60,999,000 satoshis to incentivize the mining mỏs to include our transaction in a block.
 paragraph_four:
   'Cuối cùng, công việc của chúng tôi đã hoàn thành. Script của bạn sẽ kết thúc bằng cách trả về kết quả của phương thức tuần tự hóa giao dịch <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span>. Đây là một giao dịch Bitcoin đã được ký hợp lệ và chúng tôi có thể phát sóng nó trên mạng để gửi cho Mika 3000 số tiền cô ấy cần!', // Finally our work is done. Your script should end by returning the result of the transaction <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method. This is a valid signed bitcoin transaction and we can broadcast it to the network to send Mika 3000 the money she needs!
 bullet_one:
   'Mika 3000 nhận được 100.000.000 satoshi vào bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj', // Mika 3000 gets 100,000,000 satoshis to bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj
 bullet_two:
   'Bạn nhận lại 61.000.000 vào địa chỉ của mình bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs', // You get 61,000,000 back to your address bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs
 success: "Bạn đã làm được! Bạn đã xây dựng một giao dịch!", // You've done it! You've built a transaction!
      },
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter complete
      heading: 'Bạn đã làm được!', // You did it!
      paragraph_one:
 "Bạn đã thành công trong việc xây dựng một giao dịch từ đầu để trả cho Mika 3000 vì sự giúp đỡ của cô ấy. Bây giờ khi chúng ta đã hoàn thành ở đây, hãy xem những gì chúng ta có thể tìm thấy trên đảo của Vanderpoole.", // You successfully built a transaction from scratch to pay Mika 3000 for her help. Now that we are done here let's see what we can find on Vanderpoole's island.
    },
    resources: {
      in_out: {
 input_class_heading: 'Lớp Input', // Input Class
 input_class_paragraph_one: 'Tài nguyên Placeholder', // Placeholder Resources
 output_class_heading: 'Lớp Output', // Output Class
 output_class_paragraph_one: 'Tài nguyên Placeholder', // Placeholder Resources
      },
      put_it_together: {
 building_a_transaction_heading: 'Xây dựng một giao dịch', // Building a Transaction
 building_a_transaction_paragraph_one: 'Tài nguyên Placeholder', // Placeholder Resources
      },
    },
  },
  chapter_seven: {
    title: `Tấn công là phòng thủ tốt nhất`, // Offense is the Best Defense
    paragraph_one:
      'Bạn và Mika 3000 đến hòn đảo riêng của Vanderpoole trước tiên bằng máy bay và dù nhảy, sau đó bằng xe buggy và sau đó bằng thuyền chèo tự chèo.', // You and Mika 3000 reach Vanderpoole’s private island first via plane and parachute, then via dune buggy, and then via rowboat that rows itself.
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Xâm nhập vào khu phức hợp', // Infiltrating the compound
      paragraph_one:
 'Bạn hỏi những người bạn đồng hành của mình liệu họ có lo lắng về đội quân máy bay không người lái của Vanderpoole không.', // You ask your compatriots whether they are worried about Vanderpoole’s army of security drones.
      paragraph_two:
 '—HOLOCAT: “Cho tôi 15 phút. Chúng cơ bản giống như chim, và tôi là một con mèo. Chúng không có cơ hội nào.”', // —HOLOCAT: “Give me 15 minutes. They’re basically birds, and I’m a cat. They don’t stand a chance.”
      paragraph_three:
 'Holocat giơ móng vuốt của mình và đối phó với đội quân máy bay không người lái của Vanderpoole bằng cách nhảy vọt. Mika 3000 đưa cho bạn một chiếc áo len cổ lọ màu đen, găng tay và một cặp kính nhìn đêm.', //con mèo extends her claws and deals with Vanderpoole’s drone army pounce by pounce. Mika 3000 hands you a black turtleneck sweater, gloves, and a pair of night vision goggles.
      paragraph_four:
 '—MIKA 3000: “Bạn không thể làm gián điệp trong một chiếc áo sơ mi Hawaii. Bạn đang nghĩ gì vậy? Đây không phải là một nhà kho bỏ hoang; đây là một pháo đài. Đây, suýt nữa thì tôi quên mất. Lấy móc bám này.”', // —MIKA 3000: “You can’t do espionage in a Hawaiian shirt. What were you thinking? This isn’t another abandoned warehouse; this is a fortress. Here, I almost forgot. Take this grappling hook.”
      paragraph_five:
 'Tự hỏi mình đã dính vào chuyện gì, bạn và Mika 3000 leo lên tường thành của dinh thự chính của Vanderpoole. Đến ngạc nhiên, ngôi nhà của ông ta tràn ngập nghệ thuật, sách và tạp chí giấy ủng hộ Bitcoin. Ông ta là, hoặc đúng hơn là đã từng là, một người hâm mộ Bitcoin thực thụ. Một bộ sưu tập các máy đào mỏ có niên đại 125 năm tuổi được bảo quản trong tủ kính trưng bày. Đó là lúc bạn nhìn thấy nó: xưởng làm việc của Vanderpoole.', // Wondering what you’ve gotten yourself into, you and Mika 3000 scale the castle walls of Vanderpoole’s primary residence. To your surprise, his home overflows with pro-bitcoin art, books, and paper magazines. He is, or rather was, a true bitcoiner. A collection of miners dating back 125 years sit preserved in glass display cases. That’s when you see it: Vanderpoole’s workshop.
    },
    intro_two: {
      nav_title: 'Phòng điều khiển', // The control room
      paragraph_one:
 'Căn phòng khổng lồ này rất lộn xộn, mặc dù bố cục của nó có phương pháp. Bạn nhớ lại khi các máy(thợ) đào làm tắc nghẽn mạng Bitcoin bằng các khối trống không? Bên trong những cuốn sổ tay mở, bạn tìm thấy thiết kế của Vanderpoole cho cửa hậu mà ông ta đã sử dụng được phác thảo chi tiết. Bạn đã đúng: Tất cả đều là dối trá, nhưng không phải do một tên phản diện xảo quyệt mà do một người tin tưởng tuyệt đối vào Bitcoin, công ty của người đó không thể cạnh tranh nữa. Để bảo tồn di sản của mình, Vanderpoole đã lây nhiễm cho các máy(thợ) đào một loại virus.', // The gigantic room is a mess, though its layout is methodical. Remember when miners were clogging up the bitcoin network with empty blocks? Inside open notebooks, you find Vanderpoole’s designs for the backdoor that he used sketched out in detail. You were right: It was all a lie, yet one told not by a conniving villain but by a desperate believer in bitcoin whose company could no longer compete. To preserve his legacy, Vanderpoole infected the miners with a virus.
      paragraph_two:
 'Virus này thay thế một phần của mã được sử dụng bởi tất cả các máy(thợ) đào, bất kể họ có thuộc về một nhóm khai thác(đào) khối hay không. Đó là logic xây dựng khối, thuật toán lắp ráp các giao dịch thành một mẫu khối. Mẫu vẫn được chuyển tiếp đến mã mã hóa hợp pháp để xác minh công việc. Các mẫu được kết hợp với hàng triệu nonce khác nhau trong khi tìm kiếm một hash hợp lệ, nhưng khi tìm thấy một hash, thiệt hại - sự vắng mặt của bất kỳ giao dịch nào trong mẫu khối, đã được thực hiện.', // The virus replaces a section of the code used by all miners, regardless if they are part of a mỏ or not. It is the block building logic, the algorithm that assembles transactions into a block template. The template is still passed on to legitimate hashing code for proof-of-work. Templates are combined with zillions of different nonces while searching for a valid hash, but by the time one is found, the damage–the absence of any transactions in the block template, has been done.
      paragraph_three:
 '—HOLOCAT: “Thật là một tổn thất. Gia đình của ông ấy từng rất vĩ đại. Thật buồn khi thấy gia tộc Vanderpoole rơi vào tình cảnh này.”', // —HOLOCAT: “What a loss. His family was once great. It’s so sad to see the Vanderpoole’s come to this.”
    },
    intro_three: {
      nav_title: 'Sửa chữa phần mềm', // Correcting the software
      paragraph_one:
 "Nhưng bạn không thể chỉ để mã khai thác(đào) khối bị tàn tật trên máy chủ của Vanderpoole. Nó sẽ tiếp tục lây nhiễm cho các máy(thợ) đào. Bạn phải sửa chữa nó! Khi bạn đọc qua mã,con mèo cho bạn xem màn hình hiển thị mempool đang tràn ngập các giao dịch chưa được xác nhận. Càng sớm sửa chữa mã này thì càng tốt.", // But you can't just leave the crippled mining code on Vanderpoole's server. It will keep infecting miners. You have to fix it! As you read through the code,con mèo shows you a mempool display that is filling with unconfirmed transactions. The sooner this code gets fixed, the better.
    },
    mempool_transaction_one: {
      title: 'Khối xây dựng', // Building blocks
      nav_title: 'Lắp ráp một khối', // Assemble a block
      heading: 'Thử thách mã', // Code Challenge
      python: {
 paragraph_one:
   'Đây là mã bạn tìm thấy trên máy chủ của Vanderpoole. Nó nhập mempool hiện tại từ tệp JSON và lưu trữ tất cả các giao dịch chưa được xác nhận trong bộ nhớ dưới dạng các trường hợp của lớp MempoolTransaction. Hàm mà Vanderpoole đã làm hỏng là <span className="text-green">assemble_block()</span>. Nếu bạn chạy mã như cách Vanderpoole đã để lại, bạn sẽ thấy vấn đề ngay lập tức.', // This is the code you find on Vanderpoole's server. It imports the current mempool from a JSON file and stores all the unconfirmed transactions in memory as instances of the MempoolTransaction class. The function that Vanderpoole has crippled is <span className="text-green">assemble_block()</span>. If you run the code as Vanderpoole left it, you will see the problem right away.
      },
      javascript: {
 paragraph_one:
   'Đây là mã bạn tìm thấy trên máy chủ của Vanderpoole. Nó nhập mempool hiện tại từ tệp JSON và lưu trữ tất cả các giao dịch chưa được xác nhận trong bộ nhớ dưới dạng các trường hợp của lớp MempoolTransaction. Hàm mà Vanderpoole đã làm hỏng là <span className="text-green">assembleBlock()</span>. Nếu bạn chạy mã như cách Vanderpoole đã để lại, bạn sẽ thấy vấn đề ngay lập tức.', // This is the code you find on Vanderpoole's server. It imports the current mempool from a JSON file and stores all the unconfirmed transactions in memory as instances of the MempoolTransaction class. The function that Vanderpoole has crippled is <span className="text-green">assembleBlock()</span>. If you run the code as Vanderpoole left it, you will see the problem right away.
      },
      paragraph_two: {
 a: 'Bạn cần sửa chữa hàm lắp ráp khối không chỉ để xây dựng các khối hợp lệ mà còn tối đa hóa phí trong khối, để các máy(thợ) đào có thể kiếm được nhiều lợi nhuận nhất có thể theo các quy tắc đồng thuận. Các quy tắc đồng thuận quan trọng nhất mà bạn cần chú ý để hạn chế tổng ', // You need to fix the block assembly function not only to build valid blocks but also maximize the fees in the block, so the miners can earn the most profit possible given the consensus rules. The most critical consensus rules you will need to pay attention to restrict the total
 b: {
   text: 'transaction weight ',
   href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520weighted%2520units',
   question: 'What are weighted units?',
 },
 c: ' and the ',
 d: {
   text: 'order of transactions ',
   href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520order%2520do%2520transactions%2520need%2520to%2520be%2520in%2520a%2520block',
   question: 'What order do transactions need to be in a block?',
 },
 e: ' in the block.',
      },
      paragraph_three:
 'Bạn có thể đưa ra các giả định sau để hoàn thành nhiệm vụ của mình:', // You can make the following assumptions to complete your mission:
      bullet_one:
 'Tất cả các giao dịch trong mempool đã được xác minh là hợp lệ.', // All transactions in the mempool have already been verified as valid.
      bullet_two:
 'Có thể bỏ qua giao dịch coinbase và trọng lượng của nó đóng góp vào khối.', // The coinbase transaction, and the weight it contributes to the block, can be ignored.
      paragraph_four:
 'Bạn có thể xem toàn bộ tệp JSON mempool thô <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">ở đây</Link>.', // You can view the entire raw mempool JSON file <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">here</Link>.
      paragraph_five:
 'Hoặc duyệt một phần tệp trong bảng này để biết một số mẫu cơ bản:', // Or browse an excerpt of the file in this table for some basic patterns:
      headings: {
 item_one: 'Transaction ID',
 item_two: 'Fee',
 item_two_b: 'Satoshis',
 item_three: 'Weight',
 item_three_b: 'Weight units (WU)',
 item_four: 'Ancestors',
      },
      table_one: {
 footer:
   'View the json file  <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">here</Link> for the rest of the transaction data',
      },
      poor: "Đây là một khối hợp lệ, nhưng bạn có thể làm tốt hơn không? Thử thu thập thêm phí.", // Poor: "It's a valid block, but can you do better? Try to collect more fees."
      good: "Đây là một khối hợp lệ, nhưng bạn chưa thu được nhiều phí nhất. Tiếp tục làm việc hoặc tiếp tục, tùy bạn chọn.", // Good: "It's a valid block, but you are not quite getting the most fees yet. Keep working, or continue, your choice."
      success: "Đây là một khối hợp lệ và bạn đã tối ưu hóa phí. Tuyệt vời!", // Success: "It's a valid block, and you optimized fees. Nice!"
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter complete
      heading: 'Bạn đã làm được!', // You did it!
      paragraph_one:
 'Bạn trốn thoát khỏi khu phức hợp và trở về nhà. Các nhà đầu tư bán cổ phiếu BitRey hàng loạt khi câu chuyện được tiết lộ, khiến giá trị tài sản ròng của Vanderpoole sụt giảm mạnh.', // You escape the compound and return home. Investors sell their BitRey shares en masse when the story drops, plummeting Vanderpoole’s net worth.
    },
    resources: {
      mempool_transaction_one: {
 bytes_v_weight_heading: 'Các đơn vị Byte so với Trọng số', // Bytes vs Weight Units
 bytes_v_weight_paragraph_one:
   'Trong việc xây dựng khối Bitcoin, "đơn vị trọng số" (WU) và "byte" là hai số liệu khác nhau được sử dụng để đo kích thước của các giao dịch và khối.', // In bitcoin block construction, "weight units" (WU) and "bytes" are two different metrics used to measure the size of transactions and blocks.
 bytes_v_weight_subheading_bytes: 'Byte', // Bytes
 bytes_v_weight_paragraph_two:
   'Byte đề cập đến kích thước thô của một giao dịch hoặc khối theo thuật ngữ dữ liệu thực tế. Đó là kích thước theo nghĩa đen của dữ liệu giao dịch khi nó được tuần tự hóa (chuyển đổi thành định dạng có thể lưu trữ hoặc truyền). Trước khi triển khai Segregated Witness (SegWit), kích thước khối được giới hạn ở 1 megabyte (1 MB), được đo bằng byte.', // Bytes refer to the raw size of a transaction or block in terms of actual data. It is the literal size of the transaction data when it is serialized (converted into a format that can be stored or transmitted). Before the implementation of Segregated Witness (SegWit), the block size was limited to 1 megabyte (1 MB), measured in bytes.
 bytes_v_weight_subheading_wu: 'Đơn vị Trọng số', // Weighted Units
 bytes_v_weight_paragraph_three:
   'Đơn vị trọng số là một số liệu phức tạp hơn được giới thiệu với SegWit trong Bitcoin Improvement Proposal 141 <Link href="https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#user-content-Other_consensus_critical_limits" target="_blank" className="underline">BIP 141</Link>. Hệ thống này nhằm mục đích phân bổ dung lượng khối công bằng hơn bằng cách xem xét tác động của dữ liệu chứng thực riêng biệt.', // Weighted units are a more complex metric introduced with SegWit in Bitcoin Improvement Proposal 141 <Link href="https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#user-content-Other_consensus_critical_limits" target="_blank" className="undeline">BIP 141</Link>. This system aims to more fairly allocate block space by considering the impact of witness data separately.
 bytes_v_weight_paragraph_four:
   'Trong bài học này, điều quan trọng cần lưu ý là chúng tôi đang sử dụng các đơn vị trọng số để tính toán kích thước khối tối đa và tương tự cho mỗi giao dịch, vì vậy hãy đảm bảo khối của bạn không vượt quá kích thước tối đa là 4.000.000 đơn vị trọng số.', // In our lesson here its just important to note we are using weight units to calculate the maximum block size and the same for each tx so make sure your block does not exceed the maximum size of 4000000 weight units.
      },
    },
  },

  chapter_eight: {
    title: 'Hai mươi mốt triệu', // Twenty-One Million
    paragraph_one: `Nhờ cuộc điều tra của bạn, mọi người thực sự muốn nghe từ bạn, vì vậy bạn nhấn mũi Holocat, tiết lộ một lời mời từ Deborah Chunk, người mời bạn xuất hiện trực tiếp tại văn phòng của LARGE BIG NEWS Studios. Việc đưa câu chuyện ra ngoài là rất quan trọng, vì vậy bạn một lần nữa nhảy lên Budgetcopter của mình.`, // Thanks to your investigation, people really want to hear from you, so you boop Holocat’s nose, revealing an invitation from Deborah Chunk, who invites you to appear in person at the offices of LARGE BIG NEWS Studios. Getting the story out is important, so you once again hop into your Budgetcopter.
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: `Sự lừa dối của Vanderpoole`, // Vanderpoole's Deception
      paragraph_one: `—DEBORAH CHUNK: “Những tài liệu này đã vạch trần những lời nói dối bị cáo buộc của Thomas Vanderpoole theo một cách chắc chắn mang tính lịch sử, thậm chí là tai tiếng. Điều đầu tiên mà mọi người sẽ muốn biết nhất là liệu bạn có hành động một mình hay không. Câu thứ hai là bạn đã lấy thông tin từ đâu.”`, // —DEBORAH CHUNK: “These documents expose the alleged lies of Thomas Vanderpoole in a way that is certainly historic, scandalous even. The first thing people will most want to know is whether you acted alone. The second is where you got your information.”
      paragraph_two: `Bạn kể cho cô ấy vềcon mèo và chỉ có con mèo. Bạn nói rằng thông tin đã được chuyển trực tiếp cho bạn và Mika 3000 bởi một người tự xưng là Satoshi Nakamoto, người mà bạn nghi ngờ thực sự là một tập thể hacker. Điểm cuối cùng này khiến Thomas Vanderpoole gọi trực tiếp vào chương trình.`, // You tell her aboutcon mèo and only con mèo. You say that the information was delivered directly to you and Mika 3000 by someone claiming to be Satoshi Nakamoto, who you suspect is actually a hacker collective. This last point causes Thomas Vanderpoole to call directly into the show.
    },
    intro_two: {
      title: 'Phần mở đầu', // Intro
      nav_title: `Sự tức giận của Vanderpoole`, // Vanderpoole's Anger
      paragraph_one: `—THOMAS VANDERPOOLE: “Gia đình tôi là Satoshi Nakamoto! Bạn có thấy những gì tên lừa đảo này vừa nói không? Ông ta vừa thừa nhận đã làm việc với những hacker, một tập thể chỉ sử dụng tên Satoshi Nakamoto để đòi hỏi một di sản vốn thuộc về gia đình tôi. Kẻ lưu manh này đang nói dối để phá hoại các cuộc biểu tình của những người ủng hộ Bitcoin đang vô cùng tức giận về việc loại bỏ phần thưởng khối!”`, // —THOMAS VANDERPOOLE: “My family is Satoshi Nakamoto! Do you see what this hootenanny just said? He just admitted to working with hackers, a collective that only uses the name Satoshi Nakamoto to claim a legacy that is rightfully mine. This scoundrel is lying to undermine the protests of bitcoiners who are rightfully upset about the elimination of block rewards!”
      paragraph_two: `Vanderpoole tiếp tục ném vào bạn những lời lăng mạ có từ hai thế kỷ trước. Ông ta gọi bạn là một kẻ lừa đảo, một tên lừa đảo, một kẻ nhát gan, một kẻ ngớ ngẩn và nhiều hơn nữa. Bạn gần như cảm thấy tội nghiệp cho ông ta. Gia đình của ông ta chắc chắn quan trọng đối với lịch sử của Bitcoin, ngay cả khi những tuyên bố của ông ta về Satoshi Nakamoto là giả mạo một cách rõ ràng.`, // Vanderpoole continues to hurl two century-old insults at you. He calls you a varmint, a rapscallion, a yellow belly, a greenhorn, and more. You almost feel bad for him. His family was undeniably important to bitcoin’s history, even if his claims about Satoshi Nakamoto are transparently fake.
    },
    intro_three: {
      intro: `Giới thiệu`, // Intro
      nav_title: `Những cáo buộc chống lại Vanderpoole`, // Allegations Against Vanderpoole
      paragraph_one: `—DEBORAH CHUNK: “Ông Vanderpoole, nếu tôi có thể. Mọi người đang bối rối và không chắc chắn liệu nguồn cung Bitcoin có bị can thiệp hay không. Ông có thể chứng minh rằng mình không đóng bất kỳ vai trò nào trong việc can thiệp bị cáo buộc không? Hacker bí ẩn và con mèo hoang của ông ta, bạn có thể chứng minh Vanderpoole đã cố gắng thực hiện tội ác này chống lại Bitcoin không?”`, // —DEBORAH CHUNK: “Mr. Vanderpoole, if I may. People are confused and uncertain about whether the bitcoin supply has been tampered with. Can you prove that you played no part in alleged tampering? Mysterious hacker and his holocat, can you prove Vanderpoole attempted this crime against bitcoin?”
    },
    building_blocks_one: {
      title: 'Khối xây dựng', // Building blocks
      nav_title: 'Tìm đầu chuỗi', // Finding the chain tip
      paragraph_one: {
 a: 'You know that Vanderpoole has been trying to confuse people by mining blocks that generate more bitcoin than they are allowed to, ultimately inflating the money supply. These blocks are invalid because they break hard-coded protocol rules, but they might still fool some people running buggy or malicious software, or ',
 b: {
   text: 'light clients',
   href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520light%2520clients%253F',
   question: 'What are light clients?',
 },
 c: ' that do not fully verify network data.',
      },
      paragraph_two: `Bạn cũng biết rằng ở đâu đó trên mạng là một chuỗi các khối hợp lệ từ khối khởi tạo đến "đầu chuỗi" ngày hôm nay, trong đó mọi giao dịch và khối đều tuân theo các quy tắc. Chuỗi này là chuỗi <span className="italic">thực sự</span> duy nhất, chuỗi duy nhất quan trọng và là chuỗi duy nhất mà nguồn cung 21 triệu Bitcoin gốc của Bitcoin vẫn còn nguyên vẹn.`, // You also know that somewhere on the network is a chain of valid blocks from the genesis block to today's "chain tip", where every transaction and block follows the rules. This chain is the only <span className="italic">real</span> chain, the only chain that matters, and the only chain where bitcoin's supply of 21 million original bitcoins is intact.
      paragraph_three:
 "Bây giờ, trên sóng truyền hình trực tiếp trước toàn thế giới, bạn cần tìm blockchain hợp lệ dài nhất và xác minh tính toàn vẹn của nguồn cung tiền xu. Trong khi bạn đang ở đó, bạn cũng sẽ có thể chứng minh rằng Vanderpoole đã biến mạng lưới Bitcoin thành một bãi mìn khối không hợp lệ.", // Now, on live TV in front of the entire world, you need to find the longest valid blockchain and verify the coin supply's integrity. While you're at it, you'll also be able to prove that Vanderpoole has turned the bitcoin network into an invalid block minefield.
    },
    building_blocks_two: {
      title: 'Khối xây dựng', // Building blocks
      nav_title: 'Cây khối Bitcoin', // A bitcoin block tree
      paragraph_one:
 "Mỗi khối chỉ có chính xác một khối trước đó, nhưng có thể có nhiều hơn một khối tiếp theo. Vì lý do này, các khối Bitcoin tạo thành nhiều hơn một chuỗi. Một số nhánh là điểm chết và, như bạn phải chứng minh, một số nhánh không hợp lệ do những trò hề của Vanderpoole.", // Every block has exactly one preceding block, but could have more than one next block. Because of this, bitcoin blocks form more of a tree than a chain. Some of the branches are dead-ends and, as you must prove, some of the branches are invalid because of Vanderpoole’s shenanigans.
      paragraph_two:
 "Ở đâu đó trong mê cung này là một con đường từ khối khởi tạo đến khối gần đây nhất của ngày hôm nay. Bạn phải tìm thấy nó và nói cho Deborah Chunk khối nào nằm ở đầu của chuỗi hợp lệ nhất ... trước giờ nghỉ thương mại. Á!", // Somewhere in this maze is a path from the genesis block to today's most recent block. You have to find it and tell Deborah Chunk which block is on the tip of the tree's most valid chain... before the next commercial break. Ahhh!
      paragraph_three:
 'Hình minh họa nghệ thuật này về "cây" blockchain của Bitcoin cho thấy cách mỗi khối chỉ có một cha mẹ duy nhất, nhưng có thể có nhiều hơn một con. Mỗi khối được gắn nhãn bằng hash của nó và hash của cha mẹ của nó (<span className="p-1 font-mono m-0.5 text-sm">prev</span>).', // This artistic interpretation of bitcoin’s blockchain “tree” shows how each block has exactly one parent, but could have more than one child. Each block is labeled with its hash, and the hash of its parent (<span className="p-1 font-mono m-0.5 text-sm">prev</span>).
      paragraph_four:
 'Một số khối này có màu đỏ vì chúng không hợp lệ. Đường dẫn dài nhất của các khối bắt đầu từ khối khởi tạo được tô màu xanh lục và đại diện cho chuỗi "công việc nhiều nhất" hoặc "hợp lệ nhất". Các giao dịch trong các khối này là các giao dịch duy nhất thực sự "được xác nhận". Các khối hợp lệ khác, màu xanh lam, không có nhiều hậu duệ như chuỗi "công việc nhiều nhất". Chúng kết thúc bằng những gì được gọi là <span className="italic">mẹo cũ</span>.', // Some of these blocks are red because they are invalid. The longest path of blocks starting from the genesis block is colored green and represents the “most work” or “most valid” chain. Transactions in these blocks are the only truly “confirmed” transactions. Other valid blocks, the blue ones, don’t have as many descendants as the “most work” chain. They terminate in what are called <span className="italic">stale tips</span>.
    },
    building_blocks_three: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: `Khám phá API Bitcoin`, // Explore the Bitcoin API
      heading: 'API Bitcoin', // The Bitcoin API
      paragraph_one: `Để trả lời những câu hỏi này, bạn sẽ cần tương tác với một nút đầy đủ Bitcoin, thông qua API JSON-RPC của nó. Chúng tôi đã nhập một thư viện cho bạn có tên là <span className="p-1 font-mono bg-[#0000004D] m-1">bitcoin_rpc</span> xử lý kết nối HTTP an toàn từ script của bạn đến nút đầy đủ, thực thi các lệnh của bạn và trả về phản hồi. Nút đầy đủ của bạn đang "cắt tỉa" nên nó chỉ có quyền truy cập vào 300 khối cuối cùng, nhưng điều đó có thể đủ để bao gồm toàn bộ khoảng thời gian lộn xộn gần đây của Vanderpoole.`, // To answer these questions, you'll need to interact with a bitcoin full node, via its JSON-RPC API. We've imported a library for you called <span className="p-1 font-mono bg-[#0000004D] m-1">bitcoin_rpc</span> which handles the secure HTTP connection from your script to the full node, executes your commands, and returns the responses. Your full node is "pruning" so it only has access to the last 300 blocks, but that should be enough to include the entire timespan of Vanderpoole's recent muckery.
      paragraph_two: `Hãy bắt đầu bằng cách làm quen với API. Thư viện có một hàm chấp nhận một đối số bắt buộc, <span className="p-1 font-mono bg-[#0000004D] m-1">method</span> (một chuỗi) và một đối số tùy chọn, <span className="p-1 font-mono bg-[#0000004D] m-1">params</span> (một chuỗi hoặc một số):`, // Let's start by getting familiar with the API. The library has one function that accepts one required argument, <span className="p-1 font-mono bg-[#0000004D] m-1">method</span> (a string) and one optional argument, <span className="p-1 font-mono bg-[#0000004D] m-1">params</span> (either a string or a number):
      paragraph_three:
 'API cũng có một phương thức "help" thuận tiện! Yêu cầu trợ giúp để tìm hiểu thêm về các lệnh có sẵn, sau đó chuyển qua thử thách bằng cách in độ khó hiện tại của mạng.', // The API also has a convenient "help" method! Ask it for help to learn more about the available commands, then pass the challenge by printing the current network difficulty.
      success: "Làm tốt khi khám phá API! Chúng ta hãy tiếp tục.", // Nice work exploring the API! Let's move on.
    },
    building_blocks_four: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: `Tìm khối giao dịch nhỏ nhất`, // Find the Smallest Transaction Block
      heading: 'Dữ liệu khối', // Block Data
      paragraph_one: `Mỗi nút đầy đủ Bitcoin đều có một cơ sở dữ liệu. Đó là nơi lưu trữ và lập chỉ mục các khối theo mã hóa của chúng. Nút đầy đủ theo dõi các khối nào là ứng viên ở mỗi độ cao trong chuỗi với một chỉ mục thứ hai ánh xạ chiều cao -> [mã hóa khối].`, // Each bitcoin full node has a database. That's where blocks are stored and indexed by their hash. The full node keeps track of which blocks are candidates at each height in the chain with a second index that maps height -> [block hashes].
      paragraph_two: `API JSON-RPC trả về dữ liệu khối dưới dạng các đối tượng JSON bao gồm một thuộc tính <span className="p-1 font-mono bg-[#0000004D] m-1">txs</span> là một mảng các đối tượng giao dịch.`, // The JSON-RPC API returns block data as JSON objects that include a property <span className="p-1 font-mono bg-[#0000004D] m-1">txs</span> which is an array of transaction objects.
      paragraph_three: `Truy xuất tất cả các ứng viên khối ở độ cao 6929996 và in mã hóa của khối có ít giao dịch nhất trong số đó.`, // Retrieve all the block candidates at height 6929996 and print the hash of the block with the fewest transactions in it.
      success: `Làm tốt`, // Nicely Done
    },
    building_blocks_five: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: `Lấy phí giao dịch`, // Get the Transaction Fee
      heading: 'Dữ liệu giao dịch', // Transaction Data
      paragraph_one: `Các đối tượng giao dịch được xác nhận trong một khối là các đối tượng JSON bao gồm các mảng "đầu vào" và "đầu ra". Cả hai mảng này đều là danh sách UTXO, còn được gọi là "đồng xu". Đối tượng đồng xu có thuộc tính "giá trị" được biểu thị bằng satoshi.`, // The transaction objects confirmed in a block are JSON objects that include arrays of "inputs" and "outputs". Both of these arrays are lists of UTXOs, also known as "coins". Coin objects have a "value" property represented in satoshis.
      paragraph_two: `Mảng "đầu vào" là các đồng xu được chi tiêu (bị phá hủy) bởi giao dịch và mảng "đầu ra" là các đồng xu được tạo ra bởi giao dịch. Bạn có thể nhớ lại từ Chương 6 rằng các giao dịch luôn trả một khoản phí để khuyến khích các máy(thợ) đào đưa chúng vào một khối. Khoản phí đó chính xác là sự khác biệt về giá trị giữa tổng giá trị đầu vào và tổng giá trị đầu ra của một giao dịch.`, // The "inputs" array is the coins spent (destroyed) by the transaction and the "outputs" array is the coins created by the transaction. You may recall from Chapter 6 that transactions always pay a fee to incentivize miners to include them in a block. That fee is exactly the difference in value between the total input and total output values of a transaction.
      paragraph_three: `Nói cách khác, máy(thợ) đào được giữ bất kỳ Bitcoin nào đã được gửi vào giao dịch nhưng không được gửi lại cho người nhận giao dịch.`, // In other words, the miner gets to keep whatever bitcoin that was sent in to the transaction but not sent back out to the transaction recipients.
      paragraph_four: `Có một giao dịch với txid:`, // There is a transaction with the txid:
      paragraph_five: `trong một khối có mã hóa:`, // in a block with the hash:
      paragraph_six: `In phí của giao dịch đó theo đơn vị satoshi.`, // Print that transaction's fee in satoshis.
      success: `Làm tốt`, // Nicely Done
    },
    building_blocks_six: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: 'Xác định khoản trợ cấp', // Determine the subsidy
      heading: 'Giao dịch Coinbase', // The Coinbase Transaction
      paragraph_one:
 'Giao dịch đầu tiên trong mỗi khối được gọi là coinbase. Nó cũng có thể được gọi là giao dịch "0" (tham chiếu đến txs[0]) và nó có một số thuộc tính rất đặc biệt. Đầu tiên, nó không có đầu vào! Điều này là do nó không chi tiêu bất kỳ đồng xu nào hiện có. Thứ hai, giá trị đầu ra của nó được xác định nghiêm ngặt bởi giao thức (bất kể Vanderpoole có thể nói gì!). Đây là cơ chế mà các máy(thợ) đào vừa thu thập phí từ các giao dịch, vừa tạo ra các đồng xu mới.', // The first transaction in every block is called the coinbase. It may also be referred to as the "0th" transaction (referring to txs[0]) and it has a few very special properties. First of all, it has no inputs! This is because it does not spend any existing coins. Second, its output value is strictly defined by the protocol (despite what Vanderpoole might say!). This is the mechanism by which miners both collect fees from transactions, and generate new coins.
      paragraph_two:
 "Khá dễ hiểu cách tính tổng phí giao dịch trong một khối, nhưng giá trị trợ cấp khối đó đến từ đâu? Làm thế nào để mọi người tham gia vào mạng Bitcoin xác định chính xác số lượng Bitcoin mới mà các máy(thợ) đào được phép tạo ra tại bất kỳ thời điểm nào?", // It's fairly easy to understand how total transaction fees in a block are summed up, but where does that block subsidy value come from? How does every participant in the bitcoin network determine exactly how much new bitcoin miners are allowed to generate at any given time?
      paragraph_three:
 'Đây là thuật toán do Satoshi Nakamoto viết, vẫn là một thuộc tính cốt lõi bất biến của hệ thống Bitcoin kể từ khi bắt đầu:', // This is the algorithm written by Satoshi Nakamoto that has remained an immutable core property of the bitcoin system since the beginning:
      list_one:
 'Bắt đầu với khối #1 được khai thác(đào) khối vào năm 2009, trợ cấp khối là 50 BTC (hoặc 5.000.000.000 satoshi)', // Starting with the block #1 mined in 2009, the block subsidy is 50 BTC (or 5,000,000,000 satoshis)
      list_two: 'Cứ sau 210.000 khối, giá trị đó giảm một nửa.', // Every 210,000 blocks that value is cut in half.
      paragraph_four:
 'Ở độ cao khối 209.999, trợ cấp là 50 BTC. Trong khối tiếp theo ngay lập tức ở độ cao 210.000, trợ cấp là 25 BTC, v.v. Sau 63 lần "giảm một nửa", trợ cấp sẽ chỉ còn một satoshi duy nhất. Việc giảm một nửa cuối cùng sẽ giảm trợ cấp xuống còn không.', // At block height 209,999 the subsidy was 50 BTC. In the very next block at height 210,000 the subsidy was 25 BTC, and so on. After 63 "halvings" the subsidy will be one single satoshi. The last halving will drop the subsidy to zero.
      paragraph_five: 'VÀ VIỆC GIẢM MỘT NỬA CUỐI CÙNG ĐÃ XẢY RA HÔM QUA!', // AND THAT LAST HALVING WAS YESTERDAY!
      paragraph_six:
 'Hoàn thành việc triển khai hàm sau, chấp nhận độ cao khối làm đối số và trả về giá trị của trợ cấp theo đơn vị satoshi.', // Finish the implementation of the following function that accepts a block height as an argument and returns the value of the subsidy in satoshis.
      success: 'Hàm get_subsidy trông ổn. Làm tốt!', // The get_subsidy function looks great. Nice work!
    },
    building_blocks_seven: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: `Tìm khối hợp lệ`, // Get the Valid Block
      heading: 'Kẻ lừa đảo độc ác!', // That Pernicious Scallywag!
      paragraph_one: `Có bốn ứng viên khối ở độ cao 6929851. Chỉ có một trong số chúng là một khối hợp lệ, ba khối còn lại đã được khai thác(đào) khối bởi băng nhóm của Vanderpoole trong những nỗ lực liều lĩnh để thổi phồng nguồn cung tiền Bitcoin.`, // There are four block candidates at height 6929851. Only one of them is a valid block, the other three were mined by Vanderpoole's cartel in reckless attempts to inflate the bitcoin money supply.
      paragraph_two: `Sử dụng hàm trợ cấp khối mà bạn đã viết trong thử thách trước và API JSON-RPC, hãy viết một hàm để kiểm tra tính hợp lệ của một ứng viên khối. Làm điều này bằng cách kiểm tra xem đầu ra coinbase có chính xác không. Hàm của bạn sẽ trả về true nếu khối hợp lệ.`, // Using the block subsidy function you wrote in the previous challenge and the JSON-RPC API, write a function to check the validity of a block candidate. Do this by checking if the coinbase output is correct. Your function should return true if the block is valid.
      paragraph_three: `Đây là cách mã của bạn sẽ được sử dụng để tìm khối hợp lệ duy nhất ở độ cao 6929851:`, // Here's how your code will be used to find the one valid block at height 6929851:
      success: 'Hàm khối xác thực trông ổn. Làm tốt!', // The validate block function looks great. Nice work!
    },

    building_blocks_eight: {
      title: 'Khối xây dựng', // Building Blocks
      nav_title: 'Giờ diễn!', // Showtime!
      heading_one: 'Giờ diễn!', // Showtime!
      paragraph_one: `Các camera đang quay, hai tỷ người trên toàn thế giới đang theo dõi trực tiếp. Chỉ còn vài phút nữa là đến giờ nghỉ thương mại. Deborah Chunk đang đổ mồ hôi. Bằng cách nào đó,con mèo cũng đang đổ mồ hôi. Ở đâu đó bên kia cuộc gọi, Vanderpoole chắc hẳn cũng đang đổ mồ hôi. Đây là khoảnh khắc của bạn.`, // The cameras are rolling, two billion humans worldwide are tuned in to the live stream. Only a few minutes remain until the next commercial break. Deborah Chunk is sweating. Somehow,con mèo is also sweating. Somewhere on the other end of the call, Vanderpoole must be sweating, too. This is your moment.
      paragraph_two: `Bắt đầu từ khối hợp lệ ngay trước khối mà bạn đã tìm thấy ở độ cao 6929851, tìm chuỗi khối hợp lệ dài nhất có thể. Lưu trữ chuỗi dưới dạng một mảng các số mã hóa khối. Trong khi bạn đang ở đó, hãy duy trì một mảng của mọi khối không hợp lệ mà bạn tìm thấy, chỉ để cho thế giới thấy Vanderpoole đã cố gắng phá vỡ Bitcoin như thế nào. Thứ tự của các số mã hóa khối không hợp lệ này không quan trọng, nhưng chuỗi hợp lệ của bạn PHẢI bắt đầu bằng mã hóa của khối 6929850 theo sau là một số mã hóa khối ở mỗi độ cao cho đến đầu chuỗi.`, // Starting with the valid block just before the one you found at height 6929851, find the longest chain of valid blocks you can. Store the chain as an array of block hashes. While you're at it, maintain an array of every invalid block you find as well, just to show the world how hard Vanderpoole tried to break bitcoin. It doesn't matter what order these invalid block hashes are in, but your valid chain MUST start with the hash of block 6929850 followed by one block hash at each height all the way up to the chain tip.
      paragraph_three: `Vanderpoole rất xảo quyệt! Ông ta đã khai thác(đào) khối các khối hợp lệ trên các khối không hợp lệ và các khối không hợp lệ trên các chuỗi ngắn các khối hợp lệ! Đó là một mê cung, một bãi mìn, ở ngoài đó. Bạn có thể cần theo dõi một số nhánh hợp lệ khi bạn duyệt qua cây. Sẽ có các khối hợp lệ với các khối cha mẹ hợp lệ không nằm trong chuỗi dài nhất! Cuối cùng, sẽ chỉ có một lá hợp lệ với độ cao lớn hơn tất cả các lá khác.`, // Vanderpoole is sneaky! He mined valid blocks on top of invalid blocks, and invalid blocks on top of short chains of valid blocks! It's a maze, a minefield, out there. You may need to keep track of several valid branches as you traverse the tree. There will be valid blocks with valid parents that are not in the longest chain! In the end, there will be only one valid leaf with a greater height than all the others.
      paragraph_four: `Hãy nhớ rằng: Các đối tượng khối được trả về bởi API JSON có một thuộc tính "prev" xác định cha mẹ của khối đó bằng mã hóa của nó:`, // Remember: Block objects returned by the JSON API have a property "prev" which identifies that block's parent by its hash:
      heading_two: `Một khối CHỈ hợp lệ nếu:`, // A block is ONLY valid if:
      paragraph_five: `Giá trị đầu ra coinbase của nó bằng với trợ cấp khối dự kiến ​​cộng với tổng phí giao dịch trong khối.`, // Its coinbase output value is equal to the expected block subsidy plus the total transaction fees in the block.
      heading_three: `VÀ`, // AND
      paragraph_six: `Khối là con của một khối HỢP LỆ khác. Điều này đảm bảo một CHUỖI HỢP LỆ.`, // The block is a child of another VALID block. This ensures a VALID CHAIN.
      paragraph_seven: `Trả về một đối tượng JSON với hai mảng được gắn nhãn "hợp lệ" và "không hợp lệ":`, // Return a JSON object with two arrays labeled "valid" and "invalid":
      success: 'Hàm thời gian biểu trông ổn. Làm tốt!', // The showtime function looks great. Nice work!
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter complete
      heading: 'Chúng ta đang làm trực tiếp!', // We're doing it live!
      paragraph_one:
 "Bạn đã tìm thấy chuỗi dài nhất và chứng minh điều đó cho mọi người thấy! Danh sách các khối không hợp lệ mà bạn tìm thấy rất ấn tượng. Vanderpoole đã rất nỗ lực để khiến mọi người chấp nhận các khối của ông ta chứa trợ cấp, nhưng ông ta không thể làm gì để thay đổi các quy tắc của Bitcoin. Như chúng ta đã quan sát thấy, chỉ vì một khối là một phần của một chuỗi, điều đó không nhất thiết có nghĩa là nó hợp lệ. Bây giờ, bạn đã tiến gần hơn một bước để bôi nhọ danh dự của Vanderpoole. Không cần phải nói, ông ta đã không trả lời phần còn lại của câu hỏi của bà Chunk.", // You found the longest chain and proved it to everyone! The list of invalid blocks you found is impressively long. Vanderpoole went to great lengths to try to get people to accept his blocks containing subsidies, but he couldn't do anything to change the rules of bitcoin. As we observed, just because a block is part of a chain, it does not necessarily mean that it is valid. Now, you are one step closer to discrediting Vanderpoole. Needless to say, he didn't answer the remainder of Ms. Chunk's questions.
    },
    resources: {
      building_blocks_three: {
 tip: 'Hãy thử lệnh này trước để có ý tưởng về các lệnh khả dụng.', // Try this command first to give you an idea of what commands are available.
 rpc_heading: 'Lệnh RPC', // RPC commands
 rpc_paragraph_one:
   'Lệnh RPC là một giao diện các lệnh cho phép một client thực hiện các yêu cầu tới một chương trình tạo ra tương tác giữa client và máy chủ. Những yêu cầu này được gửi từ phía client hoặc người yêu cầu cùng với bất kỳ tham số nào mà client cần để sửa đổi yêu cầu của mình.', // RPC commands are an interface of commands that allow a client to make requests to a program creating an interaction between the client and the server. These requests are sent from the client or requester along with any parameters that the client needs to modify their request.
      },
      building_blocks_four: {
 block_data_heading: 'Dữ liệu khối', // Block data
 block_data_paragraph_one:
   'Ở cốt lõi của nó, Bitcoin là một sổ cái, một danh sách, của tất cả các giao dịch từng được gửi kể từ khi bắt đầu. Mỗi giao dịch được sắp xếp theo khối và mỗi khối được sắp xếp theo thứ tự từ khối khởi tạo.', // At its core bitcoin is a ledger, a list, of all the transactions ever sent since its inception. Each transaction is organized by block and each block is organized in order from the genesis block.
      },
      building_blocks_five: {
 transaction_data_heading: 'Dữ liệu giao dịch', // Transaction data
 transaction_data_paragraph_one:
   'Mỗi giao dịch chứa một tập hợp con thông tin riêng để phân biệt nó với các giao dịch khác và để làm rõ số lượng Bitcoin được chuyển và đầu vào và đầu ra nào đang được sử dụng.', // Each transaction contains its own subset of information to distinguish itself from other transactions and to make it clear how much bitcoin is transferred and what inputs and outputs are being used.
      },
      building_blocks_six: {
 block_subsidy_heading: 'Trợ cấp khối', // Block subsidy
 block_subsidy_paragraph_one:
   'Trợ cấp khối là số lượng Bitcoin được phát hành vào lưu thông từ coinbase của mỗi khối mới. Vì chỉ có khoảng 21 triệu Bitcoin có thể được tạo ra nên phải có một phương trình giảm dần để cho phép trợ cấp coinbase đạt đến số lượng 21 triệu. Phương trình dưới đây trực quan hóa những gì tồn tại trong Bitcoin.', // The block subsidy is the amount of bitcoin released into circulation from the coinbase of each new block. As there are only ~21 million total bitcoins able to be created there must be some diminishing euqation to allow for a coinbase subisdy that reaches the 21 million amount. The equation below visualizes what exists in bitcoin.
 block_subsidy_paragraph_two:
   'Phương trình này hoạt động như thế nào? Chúng ta biết rằng phần thưởng coinbase của khối khởi tạo là 50 Bitcoin và điều này được biểu thị bằng tử số của phân số ở phía bên phải của phương trình. Mẫu số là phần của phương trình của chúng tôi chỉ ra mức giảm thưởng sẽ giảm bao nhiêu trong mỗi lần giảm một nửa, trong trường hợp này là 2 hoặc bằng một nửa. Chúng ta cũng biết rằng Bitcoin chỉ nhận thức được các khối riêng lẻ như một hệ thống thời gian nên chúng ta tạo ra mỗi lần giảm một nửa là 210.000 khối. Cuối cùng, chúng tôi muốn mỗi lần giảm một nửa sẽ tăng gấp đôi mỗi lần, vì vậy chúng tôi muốn nhân đôi số lần giảm một nửa của trợ cấp trong mỗi lần giảm một nửa, vì vậy chúng tôi nâng 2 lên lũy thừa của lần giảm một nửa hiện tại `i` lên thời đại giảm một nửa cuối cùng 32 lần trong tương lai.', // What does this equation do? Well we know that the coinbase reward of the genesis block was 50 bitcoin and this indicated with the numerator of the fraction on the right side of the equation. The denominator is the part of our equation that indicates by how much the reward will be decreased each halving, in this case 2, or by half. We also know that bitcoin is only aware of individual blocks as a chronological system so we make each halving 210,000 blocks long. Lastly we want to make each halving double each time so we want to double the amount the subsidy is halved by each halving so we raise 2 to the power of the current halving `i` to the final halving epoch 32 iterations in the future.
      },
      building_blocks_seven: {
 validating_heading: 'Xác thực khối', // Validating blocks
 validating_paragraph_one:
   'Xác thực một khối vô cùng quan trọng đối với sức mạnh của mạng lưới vì mỗi khối được xây dựng trên các giao dịch của các khối trước đó, nếu bất kỳ khối nào bị phát hiện là không hợp lệ trong quá khứ, nó có thể gây ra hậu quả nghiêm trọng khi một chuỗi lớn các khối bị đặt câu hỏi với một khối trước đó không hợp lệ.', // Validating a block is incredibly important to the strength of the network as each block is built on transactions of previous blocks, if any block is discovered to be invalid in the past it can cause huge ramifications as a large chain of blocks comes into question with a previously invlaid block.
      },
      building_blocks_eight: {
 showtime_heading: 'Xác thực chuỗi', // Validating the chain
 showtime_paragraph_one:
   'Xác thực blockchain trong Bitcoin rất quan trọng để duy trì tính toàn vẹn và bảo mật của toàn bộ mạng lưới. Mỗi giao dịch phải được xác thực bởi các máy(thợ) đào để đảm bảo rằng giao dịch đó hợp pháp và tuân theo các quy tắc đồng thuận do mạng lưới thiết lập. Quy trình xác thực này ngăn chặn việc chi tiêu gấp đôi và gian lận, cho phép người dùng tin tưởng vào hệ thống mà không cần đến cơ quan quản lý trung tâm. Hơn nữa, nó tăng cường tính minh bạch, vì tất cả các giao dịch được xác thực đều được ghi lại trên một sổ cái công khai, cho phép bất kỳ ai cũng kiểm toán lịch sử giao dịch.', // Validating the blockchain in Bitcoin is crucial for maintaining the integrity and security of the entire network. Each transaction must be verified by miners to ensure that it is legitimate and follows the consensus rules established by the network. This validation process prevents double-spending and fraud, allowing users to trust the system without needing a central authority. Moreover, it enhances transparency, as all validated transactions are recorded on a public ledger, enabling anyone to audit the history of transactions.
      },
    },
  },

  chapter_nine: {
    title: `Đừng tin tưởng, hãy xác minh.`, // Don't trust, verify.
    paragraph_one: `Vừa đúng lúc, bạn đã chứng minh cho cả thế giới thấy rằng Vanderpoole đã cố gắng làm rối loạn mạng lưới Bitcoin bằng các khối không hợp lệ. Khi một đoạn quảng cáo phát sóng, tổ quay phim của studio chuẩn bị cho phân đoạn tiếp theo.`, // Just in time, you proved to the world that Vanderpoole has been attempting to confuse the bitcoin network with invalid blocks. As a commercial break airs, the studio’s television crew prepares for the next segment.
    intro_one: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Mối đe dọa', // Threats
      paragraph_one:
 'Mọi người đang ăn mừng; tất cả mọi người đều đang cười. Nhưng có một người đàn ông trên trường quay không vui: một người đàn ông cao lớn, ăn mặc lịch sự, tóc hoa râm mà bạn nhận ra ngay lập tức. Đám đông tách ra và bạn nhìn thấy ông ta mặt đối mặt lần đầu tiên: Vanderpoole!', // Everyone is celebrating; everyone is smiling. But there is one man on set who isn’t happy: a tall, well-dressed, gray-haired man who you recognize immediately. The crowd parts, and you see him face to face for the first time: Vanderpoole!
      paragraph_two:
 'Hai tay ông ta nắm chặt. Bạn đã phá hủy công việc kinh doanh của ông ta và vạch trần trò lừa đảo lâu đời của gia đình ông ta. Điều đầu tiên ông ta thốt ra là lời đe dọa sẽ kiện bạn mỗi ngày trong suốt quãng đời còn lại của bạn "nhân vô cực".', // His fists are clenched. You have ruined his business and exposed his family’s long con. The first thing out of his mouth is a threat to sue you every day for the rest of your life "times infinity".
    },
    intro_two: {
      title: 'Phần mở đầu', // Intro
      nav_title: 'Đón nhận', // Coming to terms
      paragraph_one:
 'Khi Vanderpoole đang phát biểu, một nhà sản xuất bước vào và nói với bạn rằng người xem từ khắp nơi trên thế giới muốn ủng hộ sự nghiệp của bạn bằng cách quyên góp bitcoin và calzone cho bạn ... vì một số lý do! Deborah yêu cầu bạn cung cấp cho người xem của họ địa chỉ ví của bạn.', // As Vanderpoole rants, a producer walks in and tells you that viewers from around the world want to support your cause by donating bitcoin and calzones to you for... some reason! Deborah asks you to provide their viewership with a wallet address.
      paragraph_two:
 'Điều này khiến Vanderpoole càng tức giận hơn. Ông ta yêu cầu bạn chia sẻ các khoản quyên góp với ông ta, nếu không ông ta sẽ kiện bạn nhiều hơn nữa, như thể có thể có nhiều hơn vô hạn vụ kiện.', // This makes Vanderpoole even more furious. He demands that you split the incoming donations with him, or he’ll drown you in even more lawsuits, as if there can be more than infinity lawsuits.
      paragraph_three:
 'Việc chia sẻ khoản quyên góp với Vanderpoole không có nhiều ý nghĩa. Tiền đang đến từ những người muốn cảm ơn bạn vì đã vạch trần những nỗ lực phá hoại Bitcoin của Vanderpoole. Bạn chợt nhận ra rằng yêu cầu này của ông ta xuất phát từ việc ông ta thua cuộc hơn là muốn có tiền. Đôi lúc, bạn thậm chí còn bắt đầu cảm thấy tội nghiệp cho ông ta. Ông ta đã tự đưa mình vào chân tường mà không có lối thoát.', // Sharing donations with Vanderpoole doesn’t make much sense. The money is coming from people that want to thank you for exposing Vanderpoole’s efforts to undermine bitcoin. It dawns on you that this demand is more about him losing than wanting money. For a moment, you even start to feel bad for him. He’s backed himself into a corner with no way out.
      paragraph_four:
 'Như thể đọc được suy nghĩ của bạn, Deborah Chunk xen vào. Cô ấy hỏi liệu có tổ chức từ thiện nào mà Vanderpoole muốn một phần tiền quyên góp được chuyển đến không. Đến ngạc nhiên của bạn, ông ta nhiệt tình đặt tên cho Quỹ Lil Bits, một tổ chức phi lợi nhuận dành cho trẻ em.', // As if she could read your mind, Deborah Chunk steps in. She asks if there is a charity Vanderpoole would like to see a portion of the donations go to. To your surprise, he enthusiastically names the Lil Bits Foundation, a non-profit dedicated to helping children.
      paragraph_five:
 'Khuôn mặt của Vanderpoole dịu lại từ màu đỏ củ cải xuống màu tím củ dền. Bạn bắt đầu tạo một hợp đồng script Bitcoin giữa bạn và Vanderpoole. Ông ta chịu trách nhiệm chuyển tiền cho Quỹ Lil Bits. Hợp đồng script này là những gì bạn sẽ sử dụng để tạo địa chỉ quyên góp. Nó sẽ coi Vanderpoole như một đối tác không đáng tin cậy và đảm bảo cả hai bạn đều có thể chi tiêu từ đó theo cách và thời điểm bạn đồng ý.', // Vanderpoole’s complexion calms from radish red to beet purple. You start creating a bitcoin script contract between you and Vanderpoole. He is responsible for getting the funds to the Lil Bits Foundation. This script contract is what you will use to derive the donation address. It will treat Vanderpoole as an untrustable counterparty and ensure you both can spend from it how and when you agree.
    },
    opcodes_one: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Script Bitcoin', // Bitcoin script
      heading: 'Script Bitcoin', // Bitcoin script
      paragraph_one:
 "Chúng tôi đã đề cập đến script Bitcoin trong chương 6 nhưng chúng tôi không đề cập đến nó vì các đồng xu mà bạn đã chi tiêu đã bị khóa bằng một cơ chế đơn giản: một chữ ký duy nhất và một lệnh (script) ngầm định đã đánh giá chữ ký đó với một khóa chung. Bây giờ mọi thứ sẽ trở nên thú vị hơn.", // We mentioned bitcoin script back in chapter 6 but we didn't dwell on it because the coins you were spending were locked by a simple mechanism: a single signature and an implied script that evaluated that signature with a public key. Now things are going to get more interesting.
      paragraph_two:
 'Có hai phần quan trọng để chi tiêu một đầu ra Bitcoin: Một script và một ngăn xếp.', // There are two important parts to spending a bitcoin output: A script and a stack.
      paragraph_three: "Chúng ta sẽ khám phá hai khái niệm ở cấp độ cao trước.", // We'll explore the two concepts at a high level first.
    },
    opcodes_two: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Ngăn xếp Bitcoin', // Bitcoin stack
      heading: 'Ngăn xếp', // The stack
      paragraph_one:
 "Hãy nghĩ về một chồng sách 📚. Nếu bạn muốn thêm một cuốn sách, bạn phải đặt nó lên trên cùng của chồng sách. Không có nơi nào khác cho nó đi. Nếu bạn muốn đọc một cuốn sách, cuốn sách duy nhất bạn có thể truy cập là cuốn sách nằm trên cùng của chồng sách. Ngay cả khi bạn muốn nhiều hơn một cuốn sách, bạn cũng phải bắt đầu từ đầu chồng sách và làm việc theo cách của bạn xuống. Theo thuật ngữ máy tính, một ngăn xếp giống như một mảng các mục dữ liệu với hai thao tác:", // Think of a stack of books 📚. If you want to add a book, you have to place it on top of the stack. There's nowhere else for it to go. If you want to read a book, the only one you can access is the one on top of the stack. Even if you want more than one you have start at the top of the stack and work your way down. In computing terms, a stack is like an array of data items with two operations:
      paragraph_two:
 '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span> Thêm một mục vào "đầu" của ngăn xếp.', // <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span> Add an item to the "top" of the stack.
      paragraph_three:
 '<span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_POP</span> Xóa mục "đầu" khỏi ngăn xếp để xử lý.', // <span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_POP</span> Remove the "top" item from the stack for processing.
      subheading_one: 'Ví dụ:', // Example:
      stack_list_one:
 'Đây là một ngăn xếp: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[]</span>', // Here is a stack: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[]</span>
      stack_list_two:
 'Đẩy số 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>', // Push the number 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>
      stack_list_three:
 'Đẩy số 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1, 2]</span>', // Push the number 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1, 2]</span>
      stack_list_four:
 'Bỏ mục trên cùng khỏi ngăn xếp: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>', // Pop the top item off the stack: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>
      paragraph_four:
 'Lưu ý rằng mục đầu tiên được đẩy vào ngăn xếp sẽ là mục cuối cùng được bật ra khỏi ngăn xếp, do đó nó sẽ là mục cuối cùng được xử lý bởi script. Vì lý do này, ngăn xếp có cảm giác "lộn ngược" hoặc "lùi lại" và điều đầu tiên bạn nhìn thấy trên ngăn xếp có thể là giải pháp được yêu cầu vào cuối quá trình xử lý script.', // Notice that the first item pushed on to the stack will be the last item popped off the stack, so it will be the last item processed by the script. For this reason the stack has an "upside down" or "backwards" feel to it, and the first thing you see on the stack will likely be the solution required at the end of script processing.
      paragraph_five:
 "Khi chi tiêu một đầu ra giao dịch Bitcoin, các yếu tố được yêu cầu bởi người chi tiêu được cung cấp trong phần chứng thực của đầu vào giao dịch chi tiêu (xem chương 6) và các yếu tố đó được đẩy vào ngăn xếp trước khi bất kỳ quá trình xử lý script nào bắt đầu. Chúng tôi sẽ gọi các mục đó là NGĂN XẾP BAN ĐẦU. Chúng rất quan trọng bởi vì chúng chính là dữ liệu mở khóa một lệnh (script) và cho phép chi tiêu tiền xu!", // When spending a bitcoin transaction output, the elements required by the spender are provided in the witness section of the spending transaction's input (see chapter 6) and those elements get pushed on to the stack before any script processing begins. We will refer to those items as the INITIAL STACK. They are important because they are literally the data that unlocks a script and allows coins to be spent!
    },
    opcodes_three: {
      title: 'OpCodes', // OpCodes
      nav_title: 'OpCodes', // OpCodes
      heading: 'OpCodes', // OpCodes
      paragraph_one:
 'Script là một chuỗi tuyến tính các lệnh được thực thi từng cái một, thao tác các mục trên ngăn xếp. Khi kết thúc script, PHẢI CHỈ CÒN ĐÚNG MỘT MỤC KHÔNG KHÔNG (KHÔNG SAI) còn lại trên ngăn xếp, nếu không toàn bộ thao tác sẽ không hợp lệ và giao dịch Bitcoin của bạn cũng vậy. Có hơn 100 lệnh trong ngôn ngữ script Bitcoin, được gọi là "opcode". Chúng ta chỉ sử dụng một số ít trong số chúng cho thử thách này.  ', // Script is a linear series of commands that are executed one by one, manipulating items on the stack. When the end of the script is reached, there must be EXACTLY ONE NON-ZERO (NON-FALSE) ITEM remaining on the stack, or the entire operation is invalid and so is your bitcoin transaction. There are over 100 commands in the bitcoin script language, called "opcodes". We are only going to use a handful of them for this challenge.  
      paragraph_two:
 "Hãy minh họa một ví dụ trong đó chúng tôi khóa một Bitcoin với bài toán toán học 1 + 2 = ?. Bất cứ ai biết câu trả lời cho bài toán toán học này đều có thể chi tiêu các đồng xu.", // Let's demonstrate an example where we lock up a bitcoin with the math problem 1 + 2 = ?. Whoever knows the answer to this math problem can spend the coins.
      paragraph_three: 'Script sẽ trông như thế này:', // The script would look like this:
      paragraph_four:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1 OP_2 OP_ADD OP_EQUAL</span>', // <span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1 OP_2 OP_ADD OP_EQUAL</span>
      paragraph_five:
 'Script này sẽ được mã hóa và được mã hóa bech32 thành một địa chỉ mà ai đó có thể gửi tiền đến.', // This script will be hashed and bech32-encoded into an address where someone can send coins.
    },
    opcodes_four: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Giải pháp ngăn xếp', // The stack solution
      heading: 'Giải pháp ngăn xếp', // The stack solution
      paragraph_one:
 "Giải pháp ngăn xếp sẽ trông như thế này và giao dịch chi tiêu cần chứa tất cả các yếu tố này. Chúng đi vào phần chứng thực của đầu vào đang cố gắng chi tiêu những đồng xu này. Hãy cùng bước qua nó:", // The stack solution would look like this and the spending transaction needs to contain all these elements. They go in the witness section of the input that is trying to spend these coins. Let's step through it:
      table_one: {
 headings: {
   item_one: 'Step',
   item_two: 'Stack',
   item_three: 'Script Execution',
 },
      },
      subheading_one: 'Giải thích', // Explanation
      stack_list_one:
 'khởi tạo: đầu ra giao dịch tài trợ và đầu vào giao dịch chi tiêu được đưa lại với nhau.', // init: the funding transaction output and spending transaction input are brought together.
      stack_list_two:
 'bước 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span> đẩy "1" vào ngăn xếp.', // step 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>pushes "1" onto the stack.
      stack_list_three:
 'bước 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span> đẩy "2" vào ngăn xếp.', // step 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>pushes "2" onto the stack.
      stack_list_four:
 'bước 3: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span> bật hai mục khỏi ngăn xếp, cộng chúng lại với nhau và đẩy tổng trở lại ngăn xếp.', // step 3: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span>pops two items off the stack, adds them together, and pushes the sum back to the stack.
      stack_list_five:
 'bước 4: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span> bật hai mục khỏi ngăn xếp, so sánh chúng và đẩy kết quả boolean trở lại ngăn xếp.', // step 4: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span>pops two items off the stack, compares them, and pushes a boolean result back to the stack.
      paragraph_two:
 'Bây giờ chúng ta đã đến cuối script và chỉ còn một mục ĐÚNG duy nhất còn lại trên ngăn xếp - các đồng xu đã được chi tiêu!', // Now we have reached the end of the script and there is only a single TRUE item left on the stack - the coins are spent!
      paragraph_three:
 'Nếu chúng ta bắt đầu ví dụ này với số 4 trên ngăn xếp, chúng ta sẽ không thể chi tiêu các đồng xu vì OP_EQUAL sẽ đánh giá là FALSE. Đối với những thử thách này, chúng tôi sẽ sử dụng một tập hợp rất hạn chế các opcode, mà chúng tôi sẽ giới thiệu theo từng danh mục.', // If we started this example with a 4 on the stack, we would not be able to spend the coins because the OP_EQUAL would evaluate to FALSE. For these challenges we are going to use a very limited set of opcodes, which we will introduce by category.
    },
    opcodes_five: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Tính toán số học cơ bản', // Compute basic arithmetic
      heading: 'Số học cơ bản', // Basic Arithmetic
      paragraph_one:
 'Script Bitcoin có thể thực hiện các phép toán số học đơn giản. Bạn có thể khóa các đồng xu bằng cách sử dụng toán học đơn giản nhưng sau đó bất kỳ ai cũng có thể thực hiện toán học và chi tiêu các đồng xu! Nói cách khác, đừng thử điều này trên mainnet.', // Bitcoin script can do simple math operations. You could lock coins using simple math but then anyone who can do math could spend the coins! In other words, do not try this on mainnet.
      subheading_one:
 'Các opcode đẩy số nguyên hoặc dữ liệu tùy ý vào ngăn xếp', // Opcodes that push integers or arbitrary data to the stack
      opconstants_list_one_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_0</span>',
      opconstants_list_one_paragraph: 'Đẩy số 0 vào ngăn xếp.', // Pushes the number 0 on to the stack.
      opconstants_list_two_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>',
      opconstants_list_two_paragraph: 'Đẩy số 1 vào ngăn xếp.', // Pushes the number 1 on to the stack.
      opconstants_list_three_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>',
      opconstants_list_three_paragraph: 'Đẩy số 2 vào ngăn xếp.', // Pushes the number 2 on to the stack.
      opconstants_list_four_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_3</span>',
      opconstants_list_four_paragraph: 'Đẩy số 3 vào ngăn xếp.', // Pushes the number 3 on to the stack.
      opconstants_list_five_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DUP</span>',
      opconstants_list_five_paragraph:
 'Đẩy một bản sao của mục trên cùng của ngăn xếp vào ngăn xếp.', // Pushes a duplicate of the top stack item on to the stack.
      opconstants_list_six_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span>',
      opconstants_list_six_paragraph:
 'Đẩy giá trị script sau vào ngăn xếp. Ví dụ về giá trị bao gồm SIG(alice), PUBKEY(alice), HASH256(secret), secret. Chuỗi chữ thường đại diện cho dữ liệu thực tế và các opcode khác trong trình thông dịch này sẽ xử lý chúng như thể chúng là các khóa, chữ ký, tóm tắt mã hóa và hình ảnh tiền thân thực tế.', // Pushes the following script value on to the stack. Example values include SIG(alice), PUBKEY(alice), HASH256(secret), secret. Lowercase strings represent real-world data and the other opcodes in this interpreter will process them as if they are actual keys, signatures, hash digests and preimages.
      subheading_two: 'Các opcode thực hiện số học', // Opcodes that do arithmetic
      oparithmetic_list_one_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span>',
      oparithmetic_list_one_paragraph:
 'Bỏ hai mục khỏi ngăn xếp, cộng chúng lại với nhau, đẩy tổng của chúng trở lại ngăn xếp.', // Pops two items off the stack, adds them together, pushes their sum back to the stack.
      oparithmetic_list_two_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span>',
      oparithmetic_list_two_paragraph:
 'Bỏ hai mục khỏi ngăn xếp, so sánh sự bằng nhau của chúng, đẩy một giá trị boolean trở lại ngăn xếp.', // Pops two items off the stack, compares their equality, pushes a boolean back to the stack.
      oparithmetic_list_three_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUALVERIFY</span>',
      oparithmetic_list_three_paragraph:
 'Giống như OP_EQUAL nhưng ném ra lỗi và dừng ngay lập tức việc thực thi script nếu hai mục không bằng nhau.', // Like OP_EQUAL but throws an error and halts script execution immediately if the two items are not equal.
      paragraph_two: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
    },
    opcodes_six: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Giải mã bằng mật mã học', // Decode with cryptography
      heading: 'Mật mã học đơn giản', // Simple Cryptography
      paragraph_one:
 'Chúng tôi đã khám phá "thanh toán cho mã hóa khóa chung" trong các chương trước. Đây là script Bitcoin được viết rõ ràng trong hàng triệu đầu ra giao dịch trước khi chứng kiến ​​tách biệt xuất hiện và rút gọn nó. Đồng xu bị khóa bởi mã hóa của một khóa chung. Người chi tiêu phải tiết lộ khóa chung khớp với mã hóa đó và sau đó cung cấp chữ ký được xác minh bởi khóa chung đó.', // We've explored "pay to public key hash" in previous chapters. This is the bitcoin script that was written explicitly in millions of transaction outputs before segregated witness came along and abbreviated it. Coins are locked by the hash of a public key. The spender must reveal the public key that matches that hash, and then provide a signature verified by that public key.
      subheading_one: 'Các opcode thực hiện mật mã học đơn giản', // Opcodes that do simple cryptography
      opcryptography_list_one_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_HASH256</span>',
      opcryptography_list_one_paragraph:
 'Bỏ một mục khỏi ngăn xếp, tính toán tóm tắt mã hóa kép-SHA256 và đẩy tóm tắt mã hóa đó trở lại ngăn xếp. Trong bài tập của chúng tôi, thao tác này được biểu thị bằng cách sử dụng chuỗi. Ví dụ: Script OP_1 OP_HASH256 tạo ra ngăn xếp [HASH256(1)]', // Pops one item off the stack, computes the double-SHA256 digest and pushes that digest back to the stack. In our exercise this operation is symbolized using strings. Example: The script OP_1 OP_HASH256 produces the stack [HASH256(1)]
      opcryptography_list_two_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_CHECKSIG</span>',
      opcryptography_list_two_paragraph:
 'Bỏ hai mục khỏi ngăn xếp. Mục đầu tiên nó bật ra phải là một khóa chung ở định dạng PUBKEY (...). Mục thứ hai phải là một chữ ký ở định dạng SIG (...). Nếu các chuỗi bên trong dấu ngoặc đơn trong cả hai mục đều bằng nhau, chúng tôi coi đó là một chữ ký ECDSA hợp lệ và đẩy TRUE trở lại ngăn xếp, nếu không thì FALSE', // Pops two items off the stack. The first item it pops must be a public key in the format PUBKEY(...). The second item must be a signature in the format SIG(...). If the strings inside the parentheses in both items are equal we consider that a valid ECDSA signature and push TRUE back to the stack, otherwise FALSE
      paragraph_two: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
    },
    opcodes_seven: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Multisig', // Multisig
      heading: 'Multisig', // Multisig
      paragraph_one:
 'Chính sách chữ ký đa phương cung cấp một danh sách các khóa chung và số lượng chữ ký bắt buộc đối với một chi tiêu hợp lệ. Nó có thể được mô tả là "m-trong-n" có nghĩa là "m số lượng chữ ký được yêu cầu từ danh sách n khóa chung này". Các khóa chung và các giá trị m và n thường được bao gồm trong script khóa và người chi tiêu chỉ cần cung cấp đúng số lượng chữ ký.', // Multisignature policies provide a list of public keys and a number of signatures required for a valid spend. It can be described as "m-of-n" meaning "m number of signatures are required from this list of n public keys". The public keys and the m and n values are typically included in the locking script and the spender only needs to provide the right number of signatures.
      paragraph_two:
 'Holocat xuất hiện với một tin nhắn được ghi âm trước từ Satoshi Nakamoto!', //con mèo appears with a pre-recorded message from Satoshi Nakamoto!
      paragraph_three:
 'Xin chào. Tôi đã vô tình viết một lỗi khi triển khai <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span>. Nó bật một mục bổ sung khỏi ngăn xếp mà không được sử dụng chút nào. Vì vậy, ừm, ồ. Xin lỗi. Mã đó là quan trọng đối với sự đồng thuận nên mọi hoạt động <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> trong quá khứ, hiện tại và tương lai của Bitcoin sẽ bị buộc phải bao gồm một "mục giả". Đừng quên nó nếu không bạn sẽ không thể chi tiêu tiền xu đa chữ ký của mình!', // Hi. I accidentally wrote a bug when I implemented <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span>. It pops an extra item off the stack that isn't used at all. So, uh, whoops. Sorry. That code is consensus-critical so every <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> operation in bitcoin's past, present, and future will be forced to include a "dummy" element. Don't forget it or you won't be able to spend your multisig coins!
    },
    opcodes_eight: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Ký bằng nhiều khóa', // Sign with multiple keys
      heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-1">OP_CHECKMULTISIG</span>',
      subheading_one:
 'Xử lý chữ ký đa phương m-trong-n bằng cách làm theo thuật toán này.', // Processes m-of-n multisignature by following this algorithm.
      multisig_list_one:
 'Bỏ một số nguyên duy nhất khỏi ngăn xếp. Đây là giá trị <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span>.', // Pop a single integer off the stack. This is the <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> value.
      multisig_list_two:
 'Bỏ <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> số mục khỏi ngăn xếp, tất cả đều được mong đợi là các khóa chung ở định dạng <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">PUBKEY(...)</span>', // Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> number of items off the stack, these are all expected to be public keys of the format <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">PUBKEY(...)</span>
      multisig_list_three:
 'Bỏ một số nguyên duy nhất khỏi ngăn xếp. Đây là giá trị <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span>.', // Pop a single integer off the stack. This is the <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> value.
      multisig_list_four:
 'Bỏ <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> số mục khỏi ngăn xếp, tất cả đều được mong đợi là các chữ ký ở định dạng <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">SIG(...)</span>', // Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> number of items off the stack, these are all expected to be signatures of the format <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">SIG(...)</span>
      multisig_list_five:
 'Bỏ một mục bổ sung khỏi ngăn xếp vì hoàn toàn không có lý do gì cả.', // Pop an extra element off the stack for absolutely no reason at all.
      multisig_list_six:
 'Lặp lại từng khóa chung: Xác minh khóa với chữ ký trên cùng của ngăn xếp. Nếu hợp lệ, hãy xóa cả khóa và chữ ký và tiếp tục với khóa chung tiếp theo. Nếu không hợp lệ, chỉ xóa khóa chung và tiếp tục với khóa chung tiếp theo (sẽ bắt đầu bằng cách kiểm tra với chữ ký trên cùng đó)', // Iterate through each public key: Verify the key against the stack-topmost signature. If it is valid, remove both the key and the signature and continue with the next public key. If it is not valid, remove the public key only and continue to the next public key (which will begin by checking against that same topmost signature)
      multisig_list_seven:
 'Nếu tất cả các khóa chung đã được kiểm tra và vẫn còn chữ ký nào đó, thao tác sẽ thất bại.', // If all public keys have been tested and there are any signatures remaining, the operation fails.
      multisig_list_eight:
 'Sau khi tất cả các chữ ký đã được xóa, thao tác có thể kết thúc sớm với thành công, ngay cả khi vẫn còn nhiều khóa chung.', // Once all signatures have been removed the operation can finish early with success, even if more public keys remain.
      paragraph_one:
 'Lưu ý rằng m <= n. Có thể có nhiều khóa chung hơn chữ ký nhưng không bao giờ có nhiều chữ ký hơn khóa chung. Ngoài ra, hãy lưu ý rằng các khóa và chữ ký PHẢI theo cùng một thứ tự, ngay cả khi một số khóa không được sử dụng để ký.', // Note that m <= n. There may be more public keys than signatures but never more signatures than public keys. Also note that the keys and signatures MUST be in the same order, even if some keys are not used to sign.
      paragraph_two: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
    },
    opcodes_nine: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Chờ đợi để mở khóa', // Wait to unlock
      heading: 'Khóa thời gian', // Time Locks
      paragraph_one:
 "Cách trở lại thế kỷ trước, một tài liệu có tiêu đề BIP 65 đã đề xuất một opcode mới cho Bitcoin, cuối cùng đã được thêm vào các quy tắc đồng thuận. Nó được sử dụng để yêu cầu rằng nLocktime của một giao dịch phải ở mức hoặc cao hơn một giá trị được chỉ định bởi script. Các quy tắc đồng thuận của Bitcoin đã cấm bao gồm một giao dịch trong một khối nếu chiều cao của khối đó lớn hơn nLocktime của giao dịch. Nói cách khác, opcode này khiến một giao dịch không thể chi tiêu cho đến khi blockchain đạt đến một độ cao nhất định vào một thời điểm nào đó trong tương lai. Vì nó đã được thêm vào với một nhánh mềm, nó KHÔNG thực sự bật bất kỳ mục nào ra khỏi ngăn xếp, có nghĩa là hầu hết các lần sử dụng cũng sẽ yêu cầu một <span className=\"text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm\">OP_DROP</span> cũng vậy. Nếu opcode xác định rằng quá sớm để bao gồm giao dịch này trong một khối, việc thực thi script sẽ dừng lại ngay lập tức với lỗi.", // Way back in the last century a document entitled BIP 65 proposed a new opcode to bitcoin which was eventually added to the consensus rules. It is used to require that the nLocktime of a transaction is at or above a value specified by the script. Bitcoin's consensus rules already prohibit including a transaction in a block if that block's height is greater than the transaction's nLocktime. In other words, this opcode makes a transaction unspendable until the blockchain reaches a certain height some time in the future. Because it was added with a soft fork, it does NOT actually pop anything off the stack, meaning most uses will also require an <span className=\"text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm\">OP_DROP</span> as well. If the opcode determines it is too early to include this transaction in a block, script evaluation stops immediately with an error.
      subheading_one: 'Các opcode thực hiện khóa thời gian khối', // Opcodes that do block timelocks
      optimelock_list_one_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DROP</span>',
      optimelock_list_one_paragraph: 'Bỏ một mục khỏi ngăn xếp, bỏ qua nó.', // Pops one item off the stack, ignores it.
      optimelock_list_two_heading:
 '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span>',
      optimelock_list_two_paragraph:
 'Đọc (không bật) mục trên cùng của ngăn xếp và hiểu nó như một độ cao khối. Nếu đối số chiều cao được sử dụng bởi opcode không ít nhất bằng với chiều cao khối TIẾP THEO, thì thao tác sẽ không hợp lệ.', // Reads (does not pop) the top stack item and interprets it as a block height. If the height argument consumed by the opcode is not at least equal to the NEXT block height, the operation is invalid.
      paragraph_two: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
    },
    opcodes_ten: {
      title: 'OpCodes', // OpCodes
      nav_title: 'Xây dựng logic', // Build some logic
      heading: 'Điều kiện', // Conditionals
      paragraph_one:
 'Giống như bất kỳ ngôn ngữ lập trình tốt nào khác, script Bitcoin cũng có các nhánh logic! Đường dẫn qua các nhánh thường được người chi tiêu chọn để chọn kết hợp điều kiện xác thực mà họ cần thỏa mãn,', // Just like any other good programming language, bitcoin script has logic branches! The path through the branches is typically chosen by the spender to pick which combination of authentication conditions they need to satisfy,
      paragraph_two:
 '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> Các nhánh logic.', // <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> Logic branches.
      paragraph_three:
 '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> bật một giá trị khỏi ngăn xếp và đánh giá nó dưới dạng boolean. Nếu đúng, việc thực thi mã sẽ tiếp tục lên đến <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> sau đó bỏ qua đến <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>, nếu không, nó sẽ bỏ qua đến <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> và tiếp tục thực thi đến <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>. Các nhánh logic có thể được lồng nhau nhưng mỗi <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> phải được ghép nối với một <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> để đóng mỗi nhánh, nếu không trình thông dịch sẽ ném ra lỗi và script sẽ thất bại.', // <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> pops one value off the stack and evaluates it as a boolean. If it is true, code execution continues up to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> then skips to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>, otherwise it skips to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> and continues executing to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>. Logic branches may be nested but every <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> must be paired with an <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> to close each branch, otherwise a the interpreter will throw an error and the script will fail.
      paragraph_four: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
    },
    proposal_one: {
      title: 'Nâng cao', // Advanced
      nav_title: 'Trở lại Câu chuyện', // Back to The Story
      heading: 'Trở lại Câu chuyện!', // Back to The Story!
      paragraph_one: `Làm tốt! Chúng tôi đã xem xét hầu hết các opcode mà bạn sẽ cần khi xây dựng script cho các giao dịch cơ bản. Bây giờ hãy đưa chúng vào thử nghiệm.`, // Nice Work! We've gone over most of the opcodes you will need when building scripts for basic transactions. Now let's put them to the test.
      paragraph_two: `Đối với mỗi đề xuất hợp đồng mà bạn thảo luận, hãy cung cấp một lệnh (script) Bitcoin và một ngăn xếp chi tiêu hợp lệ.`, // For each contract proposal you discuss, provide a bitcoin script and one valid spending stack.
    },
    proposal_two: {
      title: '2 of 2 multisig', // 2 of 2 multisig
      nav_title: 'Sign cooperatively', // Sign cooperatively
      heading: '2 of 2 multisig', // 2 of 2 multisig
      paragraph_one: `The first thing Vanderpoole suggests is a 2-of-2 multisig. All donations will be split between you and the Lil Bits Foundation 50/50. This will be managed by you both, with each of you signing all spending transactions from the donation address. This means you will have to agree on all withdrawals from the donation address.`, // The first thing Vanderpoole suggests is a 2-of-2 multisig. All donations will be split between you and the Lil Bits Foundation 50/50. This will be managed by you both, with each of you signing all spending transactions from the donation address. This means you will have to agree on all withdrawals from the donation address.
      paragraph_two: `Vanderpoole hands you his public key, it's PUBKEY(vanderpoole) and yours is PUBKEY(me).`, // Vanderpoole hands you his public key, it's PUBKEY(vanderpoole) and yours is PUBKEY(me).
      paragraph_three: 'Provide the initial stack to spend from the script.', // Provide the initial stack to spend from the script.
      next_step_message: 'Looks good! Now lets try with your own signature.', // Looks good! Now lets try with your own signature.
    },
    proposal_three: {
      title: 'Conditional time locked transaction', // Conditional time locked transaction
      nav_title: 'Làm cho ông ta chờ đợi', // Make him wait
      heading: 'Giao dịch bị khóa thời gian có điều kiện', // Conditional time locked transaction
      paragraph_one: `Chờ một chút, điều đó không có ý nghĩa gì - bạn không muốn phải đối phó với ông ta mãi mãi! Thỏa thuận mới là bạn nhận được tất cả các khoản quyên góp trong hai giờ tiếp theo trong khi bạn vẫn đang ở trên TV. Quỹ Lil Bits nhận được bất cứ điều gì đến sau đó. Bạn nhìn vào khối Bitcoin trên tường trong studio và đồng ý rằng chiều cao khối 6930300 có thể sẽ được khai thác(đào) khối trong khoảng hai giờ.`, // Wait a minute, that doesn't make sense—you don't want to deal with him forever! The new deal is you get all donations for the next two hours while you are still on TV. The Lil Bits Foundation gets anything that comes in afterwards. You look at the bitcoin block block on the wall in the studio and agree that block height 6930300 will probably be mined in about two hours.
      paragraph_two: `Hãy nhớ rằng khóa chung của Vanderpoole là PUBKEY(vanderpoole) và của bạn là PUBKEY(me).`, // Remember Vanderpoole's public key is PUBKEY(vanderpoole) and yours is PUBKEY(me).
      paragraph_three: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
      next_step_message: 'Looks good! Now lets try with your own signature.', // Looks good! Now lets try with your own signature.
    },
    proposal_four: {
      title: 'Secret preimage locked transaction', // Secret preimage locked transaction
      nav_title: 'Làm việc với một oracle', // Work with an oracle
      heading: 'Giao dịch bị khóa tiền ảnh bí mật', // Secret preimage locked transaction
      paragraph_one:
 "Vanderpoole thay đổi ý kiến ​​của mình một lần nữa. Ông ta không thích thỏa thuận đó vì những điều không chắc chắn. Ông ta quyết định rằng Quỹ Lil Bits sẽ nhận được 1.0 BTC đầu tiên của tổng số tiền quyên góp và bạn có thể chi tiêu phần còn lại sau đó.", // Vanderpoole changes his mind again. He doesn't like that deal because of the unknowns. He decides that the Lil Bits Foundation will get the first 1.0 BTC of total donations, and you can spend the rest afterward.
      paragraph_two:
 'Không có cách nào để kiểm tra tổng số dư trên nhiều UTXO trong script Bitcoin nên bạn đồng ý với một oracle trung lập thứ ba: Deborah Chunk! Cô ấy sẽ theo dõi tổng số tiền quyên góp trên blockchain và khi chúng cộng lại thành ít nhất 1.0 BTC, cô ấy sẽ thông báo trực tiếp trên TV về tiền ảnh của một giá trị mã hóa mà bạn sẽ cam kết trong script.', // There is no way to check a total balance across multiple UTXOs in bitcoin script so you agree on an unbiased third-party oracle: Deborah Chunk! She will monitor the total donation amount on the blockchain and once they add up to at least 1.0 BTC she will announce, live on TV, the preimage to a hash value you will commit to in the script.
      paragraph_three: {
 a: 'Cô ấy tạo ra một nonce ngẫu nhiên an toàn trong bí mật, sau đó đưa cho bạn tóm tắt mã hóa: <span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">HASH256(FD3771E8)</span>. Bạn có thể chi tiêu tất cả các đồng xu bạn nhận được khi cô ấy tiết lộ bí mật này và không một ', // She generates a secure random nonce in private, then hands you the hash digest: <span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">HASH256(FD3771E8)</span>. You can spend all the coins you receive once she reveals this secret, and not one 
 b: ' một giây nào trước đó!' // one second earlier!
      },
      paragraph_four: `Hãy nhớ rằng khóa chung của Vanderpoole là PUBKEY(vanderpoole) và của bạn là PUBKEY(me).`, // Remember Vanderpoole's public key is PUBKEY(vanderpoole) and yours is PUBKEY(me).
      paragraph_five: 'Cung cấp ngăn xếp ban đầu để chi tiêu từ script.', // Provide the initial stack to spend from the script.
      tooltip_one: {
 question: 'What is a satoshi?',
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520a%2520satoshi%253F',
 highlighted: 'satoshi',
      },
      next_step_message: "Hãy xem liệu chúng ta có sử dụng chữ ký của mình với tiền ảnh chính xác không.", // Let's see if we used our signature with the preimage correctly.
    },
    outro_one: {
      title: 'Phần kết ', // Outro
      nav_title: 'Hoàn thành chương', // Chapter Complete
      heading: 'Làm tốt!', // Way to go!
      paragraph_one:
 "Các khoản quyên góp hiện đã được phân phối cho bạn và Quỹ Lil Bits và nhiều người xem cảm ơn bạn đã soi sáng hành động của Vanderpoole. Mặc dù bản chất phi tập trung (không qua trung gian) của Bitcoin khiến việc chiếm đoạt mạng lưới trở nên khó khăn nhưng nó không ngăn cản những người như ông ta cố gắng. Bạn cảm thấy nhẹ nhõm vì sự thật cuối cùng đã được phơi bày, đặc biệt là sau tất cả những nỗ lực để đến được đây.", // The donations have now been distributed to you and the Lil Bits Foundation and many viewers thank you for shining a light on Vanderpoole’s actions. While the decentralized nature of bitcoin makes it difficult to overtake the network, it doesn’t stop people like him from trying. You're relieved the truth is finally out, especially after all the effort it took to get here.
    },

    resources: {
      opcodes_five: {
 arithmetic_heading: 'Các opcode số học', // Arithmetic opcodes
 arithmetic_paragraph:
   'Trong script Bitcoin, các phép toán số học giống như trong toán học lấy một số đầu vào để thực hiện các phép toán số học. Trong script Bitcoin thực tế, các đầu vào bị giới hạn ở các số nguyên 32 bit có dấu nhưng đầu ra có thể tràn.', // In bitcoin script arithmetic operations like in math take in some inputs to conduct math operations on. In actual bitcoin script the inputs are limited to signed 32-bit integers but the output may overflow.
 spoiler: `Đặt hai số nguyên có tổng là 3 vào ngăn xếp ban đầu` // Put in two integers that give the sum of 3 in the initial stack
      },
      opcodes_six: {
 cryptography_heading: 'Các opcode mật mã', // Cryptographic opcodes
 cryptography_paragraph:
   'Những opcode này rất quan trọng trong các giao dịch hàng ngày vì chúng đảm bảo rằng các đầu ra chỉ có thể được chi tiêu bằng chữ ký của chủ sở hữu của utxo đó. Lưu ý rằng không có danh mục chính thức nào của opcode và chúng chỉ được sắp xếp theo biểu diễn mã hex của chúng.', // These opcodes are important in everyday transactions as they ensure that the outputs can only be spent with the signature of the owner of that utxo. Note that there are no formal categories of opcodes and that they are only organzied by their hex code representation.
 spoiler: `Script kiểm tra chữ ký so với khóa chung đã mã hóa. Đặt một khóa chữ ký trước, sau đó là một khóa chung` // The script checks a signature against a hashed public key. Put a signature key first then a public key
      },
      opcodes_eight: {
 multisig_heading: 'Các opcode đa chữ ký', // Multisig opcodes
 multisig_paragraph:
   '<span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> có một lỗi đáng chú ý yêu cầu ngăn xếp bao gồm một giá trị khác không được sử dụng ở đầu ngăn xếp không liên quan đến đa chữ ký thực tế.', // <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> has a notable bug that requires the stack to include another unused value on the top of the stack unrelated to the actual multisig.
 spoiler: `Đó là một lệnh (script) đa chữ ký yêu cầu hai chữ ký và giá trị đầu tiên trên ngăn xếp là một giá trị giữ chỗ cho một lỗi kỳ lạ trong hoạt động CHECKMULTISIG.` // It's a multisig script requiring two signatures, and the first value on the stack is a placeholder for a quirk in the CHECKMULTISIG operation.
      },
      opcodes_nine: {
 timelock_heading: 'Các opcode khóa thời gian', // Timelock opcodes
 timelock_paragraph:
   'Script Bitcoin có thể đọc chiều cao khối hiện tại cho phép các giao dịch bị khóa dựa trên các khối Bitcoin trong tương lai. Ngữ nghĩa chính xác của <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span> thực tế có thể được tìm thấy', // Bitcoin script can read the current block height allowing transactions to be locked based on bitcoin blocks in the future. the exact semantics of the actual <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span> can be found
 timelock_link:
   '<Link target="_blank" href="https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" className="underline">ở đây</Link>.', // here
 spoiler: `Script khóa chi tiêu cho đến một chiều cao khối cụ thể và sau đó xác minh chữ ký trong ngăn xếp ban đầu.` // The script locks spending until a specific block height and then verifies the signature in the initial stack.
      },
      opcodes_ten: {
 conditionals_heading: 'Logic opcode', // Opcode logic
 conditionals_paragraph:
   'Các opcode điều kiện cho phép một số nhánh logic lập trình cơ bản. Mặc dù logic điều kiện cho phép một loạt các khả năng bổ sung trong script Bitcoin, nhưng nó vẫn bị giới hạn so với ngôn ngữ lập trình truyền thống.', // Conditional opcodes allow for some basic programming logic branches.  While the conditional logic allows for a broad range of additional possibilities in bitcoin script, it is still limited in comparison to a traditional programming language.
 spoiler: `Tổng của hai giá trị đầu tiên trên ngăn xếp ban đầu là sai, vì vậy script theo nhánh OP_ELSE.` // The sum of the first two values on the intial stack is false, so the script follows the OP_ELSE branch.
      },
      proposal_two: {
 making_script_heading: 'Tạo script', // Making script
 making_script_paragraph:
   'Hãy nhớ rằng các script chỉ có thể được xác thực nếu kết thúc với một giá trị đúng duy nhất trên ngăn xếp. một số phiên bản cho phép bất kỳ giá trị đúng nào nhưng trình chỉnh sửa script của chúng tôi chỉ cho phép các giá trị bằng 1 hoặc true.', // Remember that scripts can only be validated if the finish with a single truthy value on the stack. some versions allow any truthy value but our script editor only allows for values equal to 1 or true.
 tip: 'Đừng quên lỗi trong <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> yêu cầu giá trị không sử dụng bổ sung trên ngăn xếp!', // Don't forget about the bug in <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> that requires the extra unused value on the stack!
 spoiler: `Gợi ý Script: Thỏa thuận đa chữ ký này yêu cầu cả hai bên tham gia ký. Script chỉ định rằng hai chữ ký là bắt buộc và bao gồm cả hai khóa chung. 
Gợi ý ngăn xếp: Để thỏa mãn script, bạn cần cung cấp cả hai chữ ký. Số 0 trên ngăn xếp giải thích cho một hành vi cụ thể của hoạt động CHECKMULTISIG.`, 
 // Script Hint: This multisig arrangement needs both participants to sign. The script specifies that two signatures are required and includes both public keys.
// Stack Hint: To satisfy the script, you need to provide both signatures. The 0 on the stack accounts for a specific behavior of the CHECKMULTISIG operation.
      },
      proposal_three: {
 tip: "Hãy suy nghĩ về việc kết hợp một điều kiện với một số khóa thời gian để tách chữ ký của Vanderpoole khỏi chữ ký của bạn.", // Let's think about combining a conditional with some timelock to separate Vanderpoole's signature from yours.
 spoiler: `Gợi ý Script: Script cho phép chi tiêu theo hai điều kiện: trước khối 6930300 hoặc sau đó. Trước khối, Vanderpoole có thể chi tiêu; sau khối, bạn có thể.
Gợi ý ngăn xếp: Để chi tiêu trước khối được chỉ định, Vanderpoole sử dụng chữ ký của mình. Sau khối, bạn sử dụng chữ ký của mình và cần cung cấp 0 vì script đã vượt qua xác minh khóa thời gian.`,
  // Script Hint: The script allows spending under two conditions: before block 6930300 or after. Before the block, Vanderpoole can spend; after the block, you can.
//Stack Hint: To spend before the specified block, Vanderpoole uses his signature. After the block, you use your signature and need to provide a 0 because the script has moved past the locktime verification.
      },
      proposal_four: {
 tip: 'Tiền ảnh sẽ được tiết lộ sau một khoảng thời gian không xác định nên không cần sử dụng khóa thời gian.', // The preimage will be revealed after an unknown amount of time so no need for using timelocks.
 spoiler: `Gợi ý Script: Script cho phép chi tiêu theo hai điều kiện: trước khi bí mật được tiết lộ hoặc sau đó. Trước khối, Vanderpoole có thể chi tiêu; sau khối, cả hai bạn đều có thể.
Gợi ý ngăn xếp: Để chi tiêu trước khi bí mật được tiết lộ, Vanderpoole sử dụng chữ ký của mình. Sau khi bí mật được tiết lộ, bạn sử dụng chữ ký của mình, mã hóa của bí mật và cung cấp 0 vì script đã vượt qua xác minh chưa tiết lộ.`,
  // Script Hint: The script allows spending under two conditions: before the secret has been revealed or after. Before the block, Vanderpoole can spend; after the block, you both can.
//Stack Hint: To spend before the secret is revealed, Vanderpoole uses his signature. After the secret is revealed, you use your signature, a hash of the secret, and provide a 0 because the script has moved past the unrevealed verification.
      },
    },
  },

  chapter_ten: {
    title: '10 tỷ kết nối', // title: '10 billion connections'
    paragraph_one: `Đèn ON-AIR của trường quay tắt. Các nhân viên sân khấu tắt máy ảnh 3D của họ và tản ra sau một ngày dài và nhiều sự kiện. Mika 3000 đang ở đó chờ bạn.`, // paragraph_one: `The TV studio’s ON-AIR light goes dark. Stagehands shut off their 3D cameras and file out after a long and eventful day. Mika 3000 is there waiting for you.`
    intro_one: {
      title: 'Lễ kỷ niệm', // title: 'Celebration'
      nav_title: 'Lễ kỷ niệm', // nav_title: 'Celebration'
      paragraph_one: `—MIKA 3000: “Bạn đã làm được rồi! Bạn thực sự đã làm được! Hãy cùng nhau uống gì đó và ăn mừng.”`, // paragraph_one: `—MIKA 3000: “You did it! You really pulled it off! Let’s grab something to drink and celebrate.”`
      paragraph_two: `Bạn đi đến một quán bar gần đó tên là The Public Key Pub. Người pha chế, một anh chàng thân thiện với thẻ tên Laszlo, chào đón cả hai bạn.`, // paragraph_two: `You walk to a nearby bar called The Public Key Pub. The bartender, a friendly guy with the name tag Laszlo, welcomes you both.`
      paragraph_three: `—MIKA 3000: “Tôi không biết tại sao nhưng tôi hoàn toàn có thể ăn một chiếc calzone.”`, // paragraph_three: `—MIKA 3000: “I don’t know why but I could totally go for a calzone.”`
      paragraph_four: `—LASZLO: “Chúng tôi không có những thứ đó, nhưng ông cố của tôi đã đảm bảo rằng pizza ở đây là ngon nhất. Một số người nói rằng nó đáng giá 10.000 bitcoin.”`, // paragraph_four: `—LASZLO: “We don’t have those, but my great-great-grandad made sure that the pizza here is the best. Some would say 10,000 bitcoin good.”`
      paragraph_five: {
 a: `—MIKA 3000: “10 nghìn bitcoin? Chờ đã… bạn có tên là Laszlo vì bạn là hậu duệ của `, // a: `—MIKA 3000: “10 thousand bitcoin? Wait… are you named Laszlo because you’re descended from `
 b: `?"`,
      },
      paragraph_six: `—LASZLO: “The one and only.”`,
      tooltip_one: {
 question: 'What is the significance of Laszlo and pizza day?',
 link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520the%2520significance%2520of%2520Laszlo%2520and%2520pizza%2520day%253F',
 highlighted: 'THE Laszlo',
      },
    },
    intro_two: {
      title: 'Lấy đồ uống', // title: 'Getting drinks'
      nav_title: 'Lấy đồ uống', // nav_title: 'Getting drinks'
      paragraph_one:
 '—MIKA 3000: “Điều đó thật tuyệt vời. Miễn là nó không phải là 10.000 bitcoin, chúng tôi sẽ lấy một trong những chiếc pizza đó và một vài loại Lemonade Lightning. Tuy nhiên, thật đáng tiếc về calzones.”', //  '—MIKA 3000: “That is so cool. As long as it isn’t 10,000 bitcoin, we’ll take one of those pizzas and a couple of Lightning Lemonades. Shame about the calzones, though.”'
      paragraph_two:
 'Mika 3000 và Laszlo rút ra ePhone Infinities chạy bằng năng lượng mặt trời của họ và bắt đầu nhấn nút.', //   'Mika 3000 and Laszlo pull out their solar-powered ePhone Infinities and start tapping buttons.'
      paragraph_three:
 '—MIKA 3000: “Uh oh. Chiêu trò nhỏ của bạn ở phía sau đã gây ra một số vấn đề về phí khai thác(đào) khối. Mạng lưới bitcoin đang trải qua sự gia tăng hoạt động và phí giao dịch đang tăng vọt! Chúng ta sẽ phải trả tiền cho điều này ngoại tuyến.”', //   '—MIKA 3000: “Uh oh. Your little stunt back there did a number on miner fees. The bitcoin network is experiencing a surge in activity and transaction fees are through the roof! We’re going to have to pay for this off-chain.”'
    },
    intro_three: {
      title: 'Ngoại tuyến?', // title: 'Off-chain?'
      nav_title: 'Ngoại tuyến?', // nav_title: 'Off-chain?'
      paragraph_one: `Kể từ khi “Satoshi” lần đầu tiên tiếp cận, bạn chỉ phải làm việc với các giao dịch trên chuỗi. Đó là cách bạn yêu cầu phần thưởng khai thác(đào) khối và cách bạn chuyển tiền cho Mika 3000. Tuy nhiên, các giao dịch trên chuỗi này không lý tưởng cho việc sử dụng hàng ngày thường xuyên vì không gian khối bị hạn chế và phí khai thác(đào) khối có thể thay đổi.`, // paragraph_one: `Since “Satoshi” initially reached out, you’ve only had to work with on-chain transactions. That’s how you claimed your mining rewards and how you transferred funds to Mika 3000. However, these on-chain transactions aren’t ideal for frequent, everyday use because block space is limited and miner fees can vary.`
      paragraph_two: `Vậy thì làm thế nào mà mọi người có thể sử dụng bitcoin hàng ngày theo cách có thể mở rộng? Câu trả lời là thanh toán ngoại tuyến, điều mà bạn có thể đã thấy hàng triệu lần: Một chiếc taxi màu cam đẩy hành khách ra và phóng đi, ai đó mua bữa tối từ một chiếc xe đẩy halal, một đứa trẻ bước ra khỏi cửa hàng với holodog và một hộp sữa digimilk. Và vân vân. Các trường hợp sử dụng tiền gần như vô hạn.`, // paragraph_two: `How is it then, that people are able to use bitcoin daily in a way that is scalable? The answer is off-chain payments, something you have probably seen a million times: An orange cab ejecting its passengers and zooming off, someone buying dinner from a halal cart, a kid exiting a store with her holodog and a carton of digimilk. And so on. Money’s use cases are nearly infinite.`
      paragraph_three: `Mặc dù bitcoin không được thiết kế để xử lý nhiều hoạt động như vậy một mình, nhưng với các khoản thanh toán ngoại tuyến, nó có thể.`, // paragraph_three: `While bitcoin isn’t designed to handle this much activity on its own, with off-chain payments, it can.`
      paragraph_four: `—BẠN: “Đó không phải là vấn đề gì cả, Mika 3000. Tôi có thể xử lý nó. Tôi sẽ chứng minh điều đó bằng cách sử dụng một khoản thanh toán ngoại tuyến để mua một ly bia từ Laszlo.”`, // paragraph_four: `—YOU: “That’s not a problem at all, Mika 3000. I can handle it. I’ll prove it by using an off-chain payment to purchase a beer from Laszlo.”`
    },
    opening_a_channel_one: {
      title: 'Số tiền ban đầu', // title: 'The initial funds'
      nav_title: 'Số tiền ban đầu', // nav_title: 'The initial funds'
      heading_one: 'Số tiền ban đầu', // heading_one: 'The initial funds'
      paragraph_one:
   'Bạn có một UTXO được xác nhận trong blockchain cho 101.000 satoshi. Có vẻ như rất đơn giản để thực hiện một khoản thanh toán ngoại tuyến, phải không?', //  'You have a confirmed UTXO in the blockchain for 101,000 satoshis. It seems pretty simple to make an off-chain payment, right?'
    },
    opening_a_channel_two: {
      title: 'Giao dịch ngoại tuyến', // title: 'The off-chain transaction'
      nav_title: 'Giao dịch ngoại tuyến', // nav_title: 'The off-chain transaction'
      heading_one: 'Giao dịch ngoại tuyến', // heading_one: 'The off-chain transaction'
      paragraph_one:
   "Hãy tạo một giao dịch bitcoin hợp lệ nhưng thay vì phát sóng nó ra mạng, chúng ta sẽ gửi trực tiếp cho Laszlo. Đổi lại, anh ấy sẽ cung cấp cho bạn một ly bia vì anh ấy có thể phát sóng giao dịch bất cứ lúc nào anh ấy muốn. Một khi nó được xác nhận và khai thác(đào) khối thành một khối, tiền sẽ thuộc về anh ấy.", // "Let's create a valid bitcoin transaction but instead of broadcasting it out to the network, we'll give it directly to Laszlo. In return, he should provide you with a beer because he can broadcast the transaction anytime he wants. Once it's confirmed and mined into a block, the money is his."
      paragraph_two: `Hãy nhớ rằng năm 2140! Một <span className="italic">SHA-256 Stout</span> có giá 0.00001000 BTC.`, // paragraph_two: `Remember it's the year 2140! A <span className="italic">SHA-256 Stout</span> costs 0.00001000 BTC.`
      heading_two: 'Hướng dẫn', // heading_two: 'Instructions'
      off_chain_list_one:
   'Điền vào hai số tiền đầu ra: 1000 satoshi cho Laszlo ở đầu ra thứ nhất và phần còn lại cho bạn làm tiền thừa ở đầu ra thứ hai.', // 'Fill in the two output amounts: 1000 satoshis to Laszlo in the first output, and the rest to yourself as change in the second output.'
      off_chain_list_two:
   "Để lấy tiền, Laszlo sẽ cần phát sóng giao dịch này lên mạng và điều đó yêu cầu một khoản phí khai thác(đào) khối. Hãy dành riêng 1000 sats để trả phí đó. Cập nhật số tiền trong đầu ra tiền thừa của bạn để tính đến điều này.", // "To get the money, Laszlo will need to broadcast this transaction to the network, and that requires a miner fee. Let's set aside 1000 sats to pay that fee. Update the amount in your change output to account for this."
      off_chain_list_three: 'Viết hai script đầu ra', // off_chain_list_three: 'Write the two output scripts'
      off_chain_list_four:
   'Ký đầu vào bằng cách nhấp vào <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Ký</span>', // 'Sign the input by clicking <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Sign</span>'
     // off_chain_list_four:'Send it to Laszlo by clicking "send to bob"',
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      hint_one: `Laszlo chi tiêu đầu ra 0 với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO)</span>`, // hint_one: `Laszlo spends output 0 with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO)</span>`
      hint_two: `Bạn chi tiêu đầu ra 1 với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU)</span>`, // hint_two: `You spend output 1 with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU)</span>`
      hint_three: `Những chữ ký này không phải là một phần của script đầu ra`, // hint_three: `These signatures are not part of the output script`
    },
    opening_a_channel_three: {
      title: 'Vấn đề tin tưởng thanh toán ngoại tuyến', // title: 'Off-chain payment trust issue'
      nav_title: 'Vấn đề tin tưởng thanh toán ngoại tuyến', // nav_title: 'Off-chain payment trust issue'
      paragraph_one: `—LASZLO: "Chờ một chút, điều đó không có ý nghĩa gì cả - miễn là tôi không phát sóng giao dịch, bạn vẫn có thể chi tiêu 101.000 satoshi đó. Bạn có thể uống bia của mình, tiêu tiền vào việc khác và tôi sẽ không nhận được gì!`, // paragraph_one: `—LASZLO: "Wait a minute, that doesn't make any sense–as long as I don't broadcast the transaction you can still spend those 101,000 sats. You could drink your beer, spend the money on something else, and I would get nothing!`
      paragraph_two: `Nếu chúng ta định giao dịch ngoại tuyến, tôi cần một sự đảm bảo rằng cùng một số tiền bạn đang sử dụng để thanh toán ngoại tuyến cho tôi không thể được di chuyển bởi chính bạn trên chuỗi."`, // paragraph_two: `If we're going to transact off-chain, I need a guarantee that the same money you are using to pay me off-chain cannot be moved by yourself on-chain."`
    },
    opening_a_channel_four: {
      title: 'Multisig', // title: 'Multisig'
      nav_title: 'Multisig', // nav_title: 'Multisig'
      heading_one: 'Multisig', // heading_one: 'Multisig'
      paragraph_one: `Trước khi trả tiền cho Laszlo, trước tiên hãy đưa tiền vào một đa chữ ký 2 trên 2, được xác nhận trên blockchain. Sau đó, chúng ta có thể tìm ra một cách để giao dịch đơn lẻ trên chuỗi đó hoạt động hiệu quả hơn - để làm được nhiều hơn với ít hơn.`, // paragraph_one: `Before paying Laszlo, let's first get the funds into a 2-of-2 multisig, confirmed on the blockchain. Then we can figure out a way to make that single on-chain transaction work harder—to do more with less.`
      heading_two: 'Hướng dẫn', // heading_two: 'Instructions'
      multisig_one: 'Điền số tiền đầu ra và script đầu ra', // multisig_one: 'Fill in the output amount and the output script'
      multisig_two:
   'Ký đầu vào bằng cách nhấp vào <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Ký và Phát sóng</span>', // 'Sign the input by clicking <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Sign and Broadcast</span>'
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      hint_one_a: `Bạn và Laszlo muốn làm việc cùng nhau trong tương lai để chi tiêu đầu ra 0 với <br/> `, // hint_one_a: `You and Laszlo want to work together in the future to spend output 0 with <br/> `
      hint_one_b: `<span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(LASZLO) SIG(YOU) </span>`, // hint_one_b: `<span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(LASZLO) SIG(YOU) </span>`
      hint_two: `Đừng quên dành riêng phí khai thác(đào) khối`, // hint_two: `Don't forget to set aside miner fees`
    },
    opening_a_channel_five: {
      title: 'Bảo vệ hoàn trả trong đa chữ ký', // title: 'Refund protection in multisig'
      nav_title: 'Bảo vệ hoàn trả trong đa chữ ký', // nav_title: 'Refund protection in multisig'
      paragraph_one: `—LASZLO:  "Được rồi, cảm ơn. Đây là một khởi đầu tốt. Nhưng nếu tôi rời khỏi bàn và bạn không bao giờ nhìn thấy tôi nữa thì sao? Tôi có thể phát sóng giao dịch này, và 100.000 satoshi của bạn sẽ bị mắc kẹt trong một đa chữ ký 2 khóa mà bạn không bao giờ có thể khôi phục.`, // paragraph_one: `—LASZLO:  "OK, thanks. This is a good start. But what if I walk away from the table and you never see me again? I could broadcast this transaction, and your 100,000 satoshis would be stuck in a 2-key multisig from which you could never recover.`
      paragraph_two: `Hãy tự giúp mình một việc; trước khi ký vào này, hãy thực hiện một giao dịch hoàn trả để biết rằng bạn có thể lấy lại tiền của mình."`, // paragraph_two: `Do yourself a favor; before signing this, make a transaction to know you can recover your money."`
    },
    updating_the_state_one: {
      title: 'Hoàn trả', // title: 'The refund'
      nav_title: 'Hoàn trả', // nav_title: 'The refund'
      heading_one: 'Hoàn trả', // heading_one: 'The refund'
      paragraph_one: `Một tab mới xuất hiện trên ePhone Infinity của bạn: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Hoàn trả</span> bắt đầu một mẫu TX khác trên cùng một màn hình, với một mũi tên từ đầu ra <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Multisig</span> đến đầu vào TX này.`, // paragraph_one: `A new tab appears on your ePhone Infinity: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Refund</span> which starts another TX template on the same screen, with an arrow from the <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Multisig</span> output to this TX input.`
      heading_two: 'Hướng dẫn', // heading_two: 'Instructions'
      refund_list_one: `Điền số tiền đầu ra và script đầu ra`, // refund_list_one: `Fill in the output amount and the output script`
      refund_list_two: `Gửi nó cho Laszlo bằng cách nhấp vào <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Gửi cho Laszlo</span> sau đó anh ấy có thể cho chúng tôi biết liệu anh ấy có ký hay không.`, // refund_list_two: `Send it to Laszlo by clicking <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Send to Laszlo</span> then he can tell us if he will sign it.`
      refund_list_three: `Đừng tự ký nó! Hãy xem Laszlo nghĩ gì trước`, // refund_list_three: `Don't sign it yourself yet! Let's see what Laszlo thinks, first`
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      hint_one: `Đầu ra 0 được chi tiêu bởi bạn với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU)</span>`, // hint_one: `Output 0 is spent by you with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU)</span>`
    },
    updating_the_state_two: {
      title: 'Bảo mật thanh toán', // title: 'Securing payments'
      nav_title: 'Bảo mật thanh toán', // nav_title: 'Securing payments'
      paragraph_one: `—LASZLO: "Được rồi, tốt. Tôi sẽ ký vào này và gửi lại cho bạn, và sau đó bạn có thể ký giao dịch tài trợ cho đa chữ ký 2 trên 2.`, // paragraph_one: `—LASZLO: "OK, nice. I'll sign this and send it back to you, and then you can sign that funding transaction for the 2-of-2 multisig.`
      paragraph_two: `Chờ đã... đợi một chút. Nếu tôi ký vào này, chúng ta sẽ quay lại điểm xuất phát: Bạn có thể phát sóng giao dịch này ngay cả sau khi tôi đưa cho bạn một ly bia, và tôi sẽ không nhận được tiền của mình.`, // paragraph_two: `Hey... wait a minute. If I sign this, we're back where we started: You can broadcast this transaction even after I give you a beer, and I won't get my money.`
      paragraph_three:
   'Trước khi tôi ký vào này, tôi cần một sự đảm bảo rằng giao dịch hoàn trả này có thể bị thu hồi.', //  'Before I sign this, I need a guarantee that this refund transaction can be revoked.'
      paragraph_four: `Một khi bạn thực sự trả tiền cho tôi cho ly bia, bạn không nên phát sóng giao dịch hoàn trả này. Và nếu bạn <span className="italic">cố gắng</span> phát sóng nó sau khi nó đã bị thu hồi, tôi sẽ giữ <span className="italic">tất cả</span> 100.000 satoshi!"`, // paragraph_four: `Once you actually pay me for the beer, you shouldn't be able to broadcast this refund transaction. And if you DO try to broadcast it after it has been revoked, I get to keep <span className="italic">all</span> 100,000 satoshis!"`
    },
    updating_the_state_three: {
      title: 'Sự thu hồi', // title: 'The revocation'
      nav_title: 'Sự thu hồi', // nav_title: 'The revocation'
      heading_one: 'Sự thu hồi', // heading_one: 'The revocation'
      paragraph_one: `Bạn có thể khiến đầu ra 100.000 satoshi của mình có thể bị Laszlo thu hồi nếu bạn thêm một điều kiện bổ sung vào đó. Nhánh logic sẽ cho phép Laszlo chi tiêu đầu ra với khóa riêng của ông ta VÀ một khóa riêng mới mà bạn tạo ra. Để thu hồi giao dịch, bạn sẽ cung cấp cho Laszlo khóa riêng mới. Đây là một việc rất bất thường, nhưng nó đặt cược 100.000 satoshi và cho phép Laszlo quét sạch tiền nếu bạn cố gắng phát sóng giao dịch sau khi thu hồi nó.`, // paragraph_one: `You can make the 100,000 satoshi output to yourself revocable by Laszlo if you add an extra condition to it. The logic branch should allow Laszlo to spend the output with his own key AND a new private key that you generate. To revoke the transaction, you give Laszlo the new private key. It's a very unusual thing to do, but it puts 100,000 satoshis at stake, and allows Laszlo to sweep the funds if you try to broadcast the transaction after revoking it.`
      paragraph_two: `Bạn tạo một cặp khóa mới: khóa riêng <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span> và <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">PUBKEY(REVOCATION_YOU_1)</span>. Bạn sẽ tạo một cặp khóa mới như thế này mỗi khi bạn muốn cập nhật trạng thái của kênh thanh toán.`, // paragraph_two: `You generate a new key pair: a private key <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span> and <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">PUBKEY(REVOCATION_YOU_1)</span>. You will generate a new key pair like this every time you want to update the state of the payment channel.`
      heading_two: `Hướng dẫn`, // heading_two: `Instructions`
      revocation_list_one: `Thêm điều kiện IF vào script để Laszlo chỉ có thể chi tiêu đầu ra NẾU ông ta CŨNG có khóa thu hồi (bạn sẽ tiếp tục giữ bí mật khóa này cho đến khi đến lúc thu hồi!)`, // revocation_list_one: `Add an IF condition to the script so Laszlo can spend the output ONLY if he ALSO has the revocation key (you will continue keeping the key secret until it is time to revoke!)`
      revocation_list_two: `Gửi nó cho Laszlo bằng cách nhấp vào <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Gửi cho Laszlo</span> để anh ấy có thể ký`, // revocation_list_two: `Send it to Laszlo by clicking <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Send to Laszlo</span> so he can sign it`
      revocation_list_three: `Đừng tự ký nó!`, // revocation_list_three: `Don't sign it yourself yet!`
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      paragraph_three: 'Đầu ra 0 được chi tiêu bởi EITHER:', // paragraph_three: 'Output 0 is spent by EITHER:'
      hint_one: `Stack ban đầu nếu bạn yêu cầu tiền: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) 1 </span>`, // hint_one: `The initial stack if you claim the funds: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) 1 </span>`
      hint_two: `Stack ban đầu nếu Laszlo yêu cầu tiền: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span>`, // hint_two: `The initial stack if Laszlo claims the funds: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span>`
    },
    updating_the_state_four: {
      title: 'Cuộc đua để thu hồi', // title: 'The Race to Revoke'
      nav_title: 'Cuộc đua để thu hồi', // nav_title: 'The Race to Revoke'
      paragraph_one:
   '—LASZLO: "Chà, điều này tốt hơn, nhưng tôi chợt nhận ra rằng ngay cả khi tôi có khóa thu hồi, nó vẫn sẽ là một cuộc đua giữa bạn và tôi để chi tiêu đầu ra này."', // '—LASZLO: "Well, this is better, but it just occurred to me that even if I have the revocation key, it will still be a race between you and me to spend this output.'
      paragraph_two:
   'Tôi cần một sự khởi đầu tốt để có cơ hội nhận thấy nếu bạn đã lừa dối tôi. Sau đó, tôi có thể quét sạch bitcoin bằng khóa thu hồi trước khi bạn yêu cầu hoàn trả đầy đủ."', // 'I need a decent head start so I have a chance to notice if you cheated me. Then I can sweep the bitcoin with the revocation key before you take a full refund."'
    },
    updating_the_state_five: {
      title: 'Khóa thời gian', // title: 'The time lock'
      nav_title: 'Khóa thời gian', // nav_title: 'The time lock'
      heading_one: 'Khóa thời gian', // heading_one: 'The time lock'
      time_lock_list_one:
   'Thêm độ trễ 700 khối trước khi bạn có thể chi tiêu đầu ra', // 'Add a 700 block delay before you can spend the output'
      time_lock_list_two:
   'Gửi nó cho Laszlo bằng cách nhấp vào <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Gửi cho Laszlo</span> để anh ấy có thể ký', // 'Send it to Laszlo by clicking <span className="rounded-sm px-1.5 py-1 h-[28px] bg-[#0000004D] m-0.5 text-base">Send to Laszlo</span> so he can sign it'
      time_lock_list_three: "Đừng tự ký nó!", // time_lock_list_three: "Don't sign it yourself yet!"
      heading_two: 'Gợi ý', // heading_two: 'Hints'
      paragraph_one: 'Đầu ra 0 được chi tiêu bởi EITHER:', // paragraph_one: 'Output 0 is spent by EITHER:'
      hint_one:
   'Stack ban đầu nếu bạn yêu cầu tiền sau 700 khối: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU) 1 </span> ', //  'The initial stack if you claim the funds after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU) 1 </span> '
      hint_two:
   'Stack ban đầu nếu Laszlo yêu cầu tiền: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span> ', //  'The initial stack if Laszlo claims the funds: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span> '
    },
    updating_the_state_six: {
      title: 'Kênh mở với Laszlo', // title: 'Channel open with Laszlo'
      nav_title: 'Kênh mở với Laszlo', // nav_title: 'Channel open with Laszlo'
      paragraph_one:
   'Lần này, khi bạn đưa giao dịch cho Laszlo, anh ấy mỉm cười và vỗ tay! Anh ấy đã ký giao dịch hoàn trả (con) và bây giờ bạn có thể ký và phát sóng giao dịch cha gửi tiền đến đầu ra đa chữ ký 2 trên 2. Kênh thanh toán hiện đã mở!', // 'This time, when you give the transaction to Laszlo, he smiles and applauds! He signs the refund (child) transaction and now you can sign and broadcast the parent transaction that deposits the funds to the 2-of-2 multisig. The payment channel is now open!'
    },
    making_a_payment_one: {
      title: 'Thực hiện thanh toán', // title: 'Making a payment'
      nav_title: 'Thực hiện thanh toán', // nav_title: 'Making a payment'
      heading_one: 'Thực hiện thanh toán', // heading_one: 'Making a payment'
      paragraph_one: "Hãy cùng tóm tắt lại:", // paragraph_one: "Let's recap:"
      list_one:
   'Bạn đã gửi 100.000 satoshi đến đầu ra đa chữ ký 2 trên 2 giữa bạn và Laszlo.', //  'You sent 100,000 satoshis to a 2-of-2 multisig output between you and Laszlo.'
      list_two:
   'Bạn có, ngoại tuyến, một giao dịch hoàn trả chi tiêu đầu ra đó.', // 'You have, offline, a refund transaction that spends that output.'
      list_three:
   'Giao dịch hoàn trả đó chỉ định hai tùy chọn về cách chi tiêu quỹ:', // 'That refund transaction specifies two options for how the funds can be spent:'
      list_three_sub_one:
   'Bạn lấy lại tất cả 99.000 satoshi để tính phí sau 700 khối, hoặc', //  'You to get all 99,000 satoshis back accounting for fees after 700 blocks, or'
      list_three_sub_two:
   'Laszlo nhận được tất cả tiền nếu ông ta lấy được khóa riêng <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span> từ bạn', //  'Laszlo gets all the money if he gets the private key <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span> from you'
      list_four:
   'Laszlo đã ký giao dịch hoàn trả này và bạn có thể ký nó bất cứ khi nào bạn muốn phát sóng nó.', //  'Laszlo has already signed this refund transaction, and you can sign it whenever you want to broadcast it.'
      list_five:
   'Sau khi Laszlo ký giao dịch hoàn trả (con) này, bạn đã an toàn để ký và phát sóng giao dịch cha gửi tiền đến đầu ra đa chữ ký 2 trên 2.', //  'Once Laszlo signed this refund (child) transaction, you were safe to sign and broadcast the parent transaction that sends the funds to the 2-of-2 multisig.'
      paragraph_two:
   'Giao dịch đã cấp vốn cho đầu ra đa chữ ký được gọi là <span className="font-bold">giao dịch tài trợ</span>. Xác nhận nó trên blockchain <span className="font-bold">mở</span> kênh thanh toán.', // 'The transaction that funded the multisig output is called the <span className="font-bold">funding transaction</span>. Confirming it on the blockchain <span className="font-bold">opens</span> the payment channel.'
      paragraph_three: `Giao dịch hoàn trả ngoại tuyến chi tiêu đầu ra của giao dịch tài trợ được gọi là <span className="font-bold">giao dịch cam kết</span>. Xác nhận nó trên blockchain sẽ <span className="font-bold">đóng</span> kênh. Giao dịch cam kết đầu tiên là khoản hoàn trả đầy đủ của bạn vì bạn chưa thực hiện bất kỳ khoản thanh toán nào cho Laszlo.`, // paragraph_three: `The offline refund transaction that spends the output of the funding transaction is called the <span className="font-bold">commitment transaction</span>. Confirming it on the blockchain would <span className="font-bold">close</span> the channel. The first commitment transaction is your full refund because you haven't made any payments to Laszlo yet.`
      paragraph_four:
   'Trong khi kênh đang mở, bạn và Laszlo có thể thực hiện các khoản thanh toán ngoại tuyến cho nhau, qua lại, bằng cách đàm phán các giao dịch cam kết mới và thu hồi các giao dịch cũ. Khi bạn mua thêm đồ uống, số tiền "hoàn trả" của bạn sẽ giảm xuống và phần của Laszlo trong số 100.000 satoshi ban đầu bị khóa trong đa chữ ký sẽ tăng lên.', // 'While the channel is open, you and Laszlo can make offline payments to each other, back and forth, by negotiating new commitment transactions and revoking old ones. As you buy more drinks, your "refund" amount will go down and Laszlo’s portion of the original 100,000 satoshis locked in the multisig goes up.'
    },
    making_a_payment_two: {
      title: 'Mua một ly bia!', // title: 'Buy a beer!'
      nav_title: 'Mua một ly bia!', // nav_title: 'Buy a beer!'
      heading_one: 'Mua một ly bia!', // heading_one: 'Buy a beer!'
      paragraph_one: `Bây giờ cuối cùng cũng đã đến lúc gửi bitcoin ngoại tuyến cho Laszlo. Chúng ta sẽ "đơn giản" thêm một đầu ra 1.000 satoshi cho anh ấy trong một giao dịch cam kết được cập nhật. Chúng tôi cũng sẽ cần phải hứa sẽ không bao giờ phát sóng giao dịch cam kết cũ, giao dịch này không phân bổ bất kỳ khoản tiền nào cho Laszlo. Điều đó được đảm bảo khi chúng tôi gửi cho anh ấy khóa thu hồi cho giao dịch cam kết cũ hiện tại, điều này sẽ được thực hiện tiếp theo.`, // paragraph_one: `Now it's finally time to send bitcoin off-chain to Laszlo. We will "simply" add a 1,000 satoshi output for him in an updated commitment transaction. We will also need to promise never to broadcast the old commitment transaction, which doesn't allocate any money to Laszlo. That is guaranteed when we send him the revocation key for the now old commitment transaction, which we'll do next.`
      paragraph_two: `Bạn tạo một khóa thu hồi khác, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span> cho trạng thái mới này. Nếu bạn muốn lặp lại chu kỳ và mua một ly thứ hai, bạn sẽ thu hồi <span className="font-bold">giao dịch này</span> cho một cam kết mới khác, trong đó Laszlo được trả tiền cho một ly bia thứ hai. Dù sao thì cũng là một bữa tiệc!`, // paragraph_two: `You generate another revocation key, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span> for this new state. If you wanted to repeat the cycle and buy a second drink, you would revoke <span className="font-bold">this</span> transaction for another new commitment where Laszlo gets paid for a second beer. It is a party after all!`
      heading_two: `Hướng dẫn`, // heading_two: `Instructions`
      list_one: `Khấu trừ 1.000 satoshi khỏi đầu ra của bạn`, // list_one: `Deduct 1,000 satoshis from your output`
      list_two: `Thêm 1000 satoshi vào đầu ra thứ hai và điền vào script cho Laszlo`, // list_two: `Add 1000 satoshis to the second output and fill in the script for Laszlo`
      list_three: `Gửi nó cho Laszlo bằng cách nhấp vào "Gửi cho Laszlo" để anh ấy có thể ký`, // list_three: `Send it to Laszlo by clicking "Send to Laszlo" so he can sign it`
      list_four: `Đừng tự ký nó!`, // list_four: `Don't sign it yourself yet!`
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      paragraph_three: 'Đầu ra 0 được chi tiêu bởi:', // paragraph_three: 'Output 0 is spent by either:'
      hint_one: `Tab 'Hoàn trả' bây giờ được gọi là 'Cam kết ban đầu'. Bạn có thể sử dụng nó để xem script bạn đã viết cho trạng thái trước đó.`, // hint_one: `The 'Refund' tab is now known as 'Initial Commitment'. You can use it to see the script you wrote for the previous state.`
      hint_two:
   'Bạn, sau 700 khối: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU) 1 </span>', //  'You, after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(YOU) 1 </span>'
      hint_three: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_2) SIG(LASZLO) 0 </span>`, // hint_three: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_2) SIG(LASZLO) 0 </span>`
      paragraph_four: `Đầu ra 1 được Laszlo chi tiêu: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) </span>`, // paragraph_four: `Output 1 is spent by Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) </span>`
    },
    making_a_payment_three: {
      title: `Mâu thuẫn blockchain của Laszlo`, // title: `Laszlo's blockchain dilemma`
      nav_title: `Mâu thuẫn blockchain của Laszlo`, // nav_title: `Laszlo's blockchain dilemma`
      paragraph_one: `Laszlo nhìn giao dịch này trong giây lát và lấy một chiếc ly từ phía sau quầy bar nhưng không rót bia.`, // paragraph_one: `Laszlo looks at this transaction for a second and grabs a glass from behind the bar but doesn't pour the beer.`
      paragraph_two: `—LASZLO: "Chờ đã. Nếu bạn không ký giao dịch này, tôi sẽ không có gì cả. Bạn có thể biến mất cùng với ly bia này, và tôi sẽ không thể xác nhận bất cứ điều gì trên chuỗi. Có lẽ bạn nên ký nó trước, sau đó gửi cho tôi để cả hai chúng ta đều có một bản sao?"`, // paragraph_two: `—LASZLO: "Wait. If you don't sign this transaction, I have nothing. You could disappear with this beer, and I wouldn't be able to confirm anything on the chain. Maybe you should sign it first, then send it to me so we both have a copy?"`
    },
    making_a_payment_four: {
      title: `Cảnh báo không tin tưởng của Holocat`, // title: `Holocat's trustless warning`
      nav_title: `Cảnh báo không tin tưởng của Holocat`, // nav_title: `Holocat's trustless warning`
      paragraph_one: `Đó là lúccon mèo xuất hiện trên bàn, đứng thẳng bằng hai chân sau với hai chân trước dang rộng và kêu meo meo.`, // paragraph_one: `That's whencon mèo materializes on the table, standing up on her hind legs with her front paws outstretched, and meows.`
      paragraph_two: `—HOLOCAT: "Chờ đã, bạn không thể đưa chữ ký của mình cho Laszlo cho giao dịch này! Lần tới khi bạn thực hiện thanh toán, bạn sẽ đưa cho anh ấy khóa thu hồi <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span>. Anh ấy sẽ có mọi thứ cần thiết để đánh cắp tất cả 100.000 satoshi!"`, // paragraph_two: `—HOLOCAT: "Hang on, you can't give Laszlo your signature for this transaction! Next time you make a payment, you'll give him the revocation key <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span>. He'll have everything he needs to steal all 100,000 satoshis!"`
      paragraph_three: `Mọi thứ đang trở nên hơi lộn xộn. Trước khi anh ấy đưa cho bạn một ly bia, Laszlo cần một thứ gì đó để đảm bảo rằng anh ấy sẽ được trả tiền. Nhưng anh ấy không thể có giao dịch của bạn vì khi đó anh ấy sẽ có quyền truy cập vào tất cả tiền của bạn! Laszlo là một người tuyệt vời, và quán bar của anh ấy là một trong những quán bar tốt nhất thành phố, nhưng sẽ tốt hơn nếu chúng ta không phải tin tưởng anh ấy.`, // paragraph_three: `Things are getting a bit messy. Before he gives you a beer, Laszlo needs something to ensure he will get paid. But he can't have your transaction because then he'll have access to all your money! Laszlo is a great guy, and his bar is one of the best in the city, but it would be nice if we didn't have to trust him.`
    },
    making_a_payment_five: {
      title: `Tính bất đối xứng`, // title: `Asymmetry`
      nav_title: `Tính bất đối xứng`, // nav_title: `Asymmetry`
      heading_one: `Tính bất đối xứng`, // heading_one: `Asymmetry`
      paragraph_one: `Chúng ta biết rằng chúng ta muốn Laszlo ký giao dịch đầu tiên nhưng chúng ta không muốn ông ta có chữ ký của chúng ta trên đó. Chúng ta sẽ cần phải xây dựng một giao dịch thứ hai cho ông ta có <span className="font-bold">chứa</span> chữ ký của chúng ta, nhưng không có khả năng ông ta chi tiêu tất cả tiền một cách bất công.`, // paragraph_one: `We know we want Laszlo to sign the first transaction but we don't want him to have our signature on it. We'll need to construct a second transaction for him that <span className="font-bold">does</span> have our signature on it, but without any possibility of him spending all the money unfairly.`
      paragraph_two: `Nếu Laszlo sẽ có giao dịch cam kết của riêng mình, thì chúng ta cũng không muốn giao dịch đó có thể thu hồi sao? Đúng vậy! Trên thực tế, giao dịch cam kết của Laszlo sẽ là một bản sao gương của bạn. Script khóa thời gian có thể thu hồi sẽ sử dụng khóa thu hồi đầu tiên của Laszlo <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">PUBKEY(REVOCATION_LASZLO_1)</span> và đầu ra hoàn tiền lớn sẽ trực tiếp chuyển cho bạn mà không gặp bất kỳ rắc rối nào.`, // paragraph_two: `If Laszlo is going to have his own commitment transaction, then don't we also want that transaction to be revocable? Yes! In fact, Laszlo's commitment transaction will be a mirror-image of yours. The revocable time lock script will use Laszlo's first revocation key <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">PUBKEY(REVOCATION_LASZLO_1)</span> and the large refund output will go directly to you without any fuss.`
      heading_two: `Hướng dẫn`, // heading_two: `Instructions`
      list_one: `Điền số tiền và các script đầu ra cho giao dịch cam kết của Laszlo`, // list_one: `Fill in the amounts and output scripts for Laszlo's commitment transaction`
      list_two: `Ký nó và gửi nó cho Laszlo, người sau đó sẽ ký giao dịch cam kết của bạn và gửi lại cho bạn`, // list_two: `Sign it and send it to Laszlo, who will then sign your commitment transaction and send that back to you`
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      hint_one: `Bạn có thể chuyển sang tab 'Commitment_you' để xem script bạn đã viết cho giao dịch cam kết của mình.`, // hint_one: `You can switch to the 'Commitment_you' tab to see the script you wrote for your commitment transaction.`
      paragraph_three: 'Đầu ra 0 được chi tiêu bởi:', // paragraph_three: 'Output 0 is spent by either:'
      hint_two:
   'Laszlo, sau 700 khối: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(LASZLO) 1 </span>', // 'Laszlo, after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">SIG(LASZLO) 1 </span>'
      hint_three: `Bạn <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_LASZLO_1) SIG(YOU) 0 </span>`, // hint_three: `You <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_LASZLO_1) SIG(YOU) 0 </span>`
      paragraph_four: `Đầu ra 1 được bạn chi tiêu: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) </span>`, // paragraph_four: `Output 1 is spent by You: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) </span>`
    },
    making_a_payment_six: {
      title: `Hoàn thành thanh toán`, // title: `Complete the payment`
      nav_title: `Hoàn thành thanh toán`, // nav_title: `Complete the payment`
      heading_one: `Hoàn thành thanh toán`, // heading_one: `Complete the payment`
      paragraph_one: "Hãy cùng tóm tắt lại.", // paragraph_one: "Let's do another recap."
      list_one: 'Đầu ra 2 trên 2 được xác nhận trên blockchain', // list_one: 'A 2 of 2 output is confirmed on the blockchain'
      paragraph_two:
   'Có một số giao dịch ngoại tuyến chi tiêu đầu ra 100.000 satoshi (sat) bị khóa trong đa chữ ký 2 trên 2:', // 'There are several off-chain transactions that spend the 100,000 satoshi (sat) output locked in the 2-of-2 multisig:'
      paragraph_three: 'Bạn sẽ kết thúc với những giao dịch này:', // paragraph_three: 'You will end up with these transactions:'
      paragraph_four: 'Cam kết 1 (Bạn)', // paragraph_four: 'Commitment 1 (You)'
      commitment_one_you: {
 list_one:
     '<span className="font-semibold">Đầu vào 0:</span> được ký bởi Laszlo', //'<span className="font-semibold">Input 0:</span> signed by Laszlo'
 list_two:
     '<span className="font-semibold">Đầu ra 0:</span> 99.000 sats cho bạn sau 700 khối hoặc Laszlo với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span>', // '<span className="font-semibold">Output 0:</span> 99,000 sats to you after 700 blocks or Laszlo with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span>'
 list_three: `<span className="font-semibold">Phí khai thác(đào) khối:</span> 1.000 sats`, // list_three: `<span className="font-semibold">Miner fees:</span> 1,000 sats`
      },
      commitment_two_you: {
 list_one:
     '<span className="font-semibold">Đầu vào 0:</span> được ký bởi Laszlo', // '<span className="font-semibold">Input 0:</span> signed by Laszlo'
 list_two:
     '<span className="font-semibold">Đầu ra 0:</span> 98.000 sats cho bạn sau 700 khối hoặc Laszlo với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span>', // '<span className="font-semibold">Output 0:</span> 98,000 sats to you after 700 blocks or Laszlo with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_2</span>'
 list_three:
     '<span className="font-semibold">Đầu ra 1:</span> 1.000 sats cho Laszlo', // '<span className="font-semibold">Output 1:</span> 1,000 sats to Laszlo'
 list_four: `<span className="font-semibold">Phí khai thác(đào) khối:</span> 1.000 sats`, // list_four: `<span className="font-semibold">Miner fees:</span> 1,000 sats`
      },
      paragraph_five: 'Cam kết 2 (Bạn)', // paragraph_five: 'Commitment 2 (You)'
      paragraph_six: 'Laszlo sẽ kết thúc với giao dịch này:', // paragraph_six: 'Laszlo will end up with this transaction:'
      paragraph_seven: 'Cam kết 2 (Laszlo)', // paragraph_seven: 'Commitment 2 (Laszlo)'
      commitment_two_laszlo: {
   list_one:
'<span className="font-semibold">Đầu vào 0:</span> được ký bởi bạn', // '<span className="font-semibold">Input 0:</span> signed by you'
   list_two:
'<span className="font-semibold">Đầu ra 0:</span> 1.000 sats cho Laszlo sau 700 khối hoặc bạn với <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_LASZLO_1</span>', // '<span className="font-semibold">Output 0:</span> 1,000 sats to Laszlo after 700 blocks or you with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_LASZLO_1</span>'
   list_three:
'<span className="font-semibold">Đầu ra 1:</span> 98.000 sats cho bạn', // '<span className="font-semibold">Output 1:</span> 98,000 sats to you'
   list_four: `<span className="font-semibold">Phí khai thác(đào) khối:</span> 1.000 sats`, // list_four: `<span className="font-semibold">Miner fees:</span> 1,000 sats`
      },
      paragraph_eight: `Tất cả ba giao dịch này đều đã được ký và hợp lệ, nhưng Laszlo vẫn chưa đưa cho bạn một ly bia. Tại sao không? Chỉ còn một việc nữa phải làm, gửi cho Laszlo khóa thu hồi trước đó của bạn, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span>!`, // paragraph_eight: `All three of these transactions are signed and valid, but Laszlo hasn't handed you a beer yet. Why not? Only one thing left to do, send Laszlo your previous revocation key, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">REVOCATION_YOU_1</span>!`
      success_bar: 'Gửi REVOCATION_YOU_1 cho Laszlo', // success_bar: 'Send REVOCATION_YOU_1 to Laszlo'
    },
    making_a_payment_seven: {
      title: `🍺 Ahhhhhhh, nice.`,
      nav_title: `Ahhhhhhh, nice.`,
      paragraph_one: '🍺 Ahhhhhhh, nice.',
    },
    making_a_payment_eight: {
      title: `Thực hiện một khoản thanh toán khác`, // title: `Make another payment`
      nav_title: `Thực hiện một khoản thanh toán khác`, // nav_title: `Make another payment`
      heading_one: `Thực hiện một khoản thanh toán khác`, // heading_one: `Make another payment`
      paragraph_one: `Đêm vẫn còn dài và bạn không bay về nhà bằng Budgetcopter của mình. Có thời gian cho một ly bia nữa không? Bây giờ bạn và Laszlo đã có các giao dịch bất đối xứng và một luồng hoạt động được thực hiện với các khóa thu hồi, hãy chạy lại giao thức.`, // paragraph_one: `The night is still young, and you're not flying your Budgetcopter home. Got time for another beer? Now that you and Laszlo have your asymmetric transactions and a flow worked out with revocation keys, let's run the protocol again.`
      paragraph_two: `Hai giao dịch cam kết đại diện cho trạng thái hiện tại, nơi bạn đã trả cho Laszlo 1.000 sats cho một ly bia, nằm trên màn hình ePhone Infinity của bạn.`, // paragraph_two: `The two commitment transactions representing the current state where you have paid Laszlo 1,000 sats for a beer are on your ePhone Infinity screen.`
      heading_two: `Hướng dẫn`, // heading_two: `Instructions`
      list_one: `Cập nhật số tiền và các script đầu ra cho giao dịch cam kết mới của Laszlo`, // list_one: `Update the amounts and output scripts for Laszlo's new commitment transaction`
      list_two: "Ký giao dịch của Laszlo và gửi cho anh ấy", // list_two: "Sign Laszlo's transaction and send it to him"
      list_three: `Cập nhật giao dịch cam kết của bạn: Laszlo sẽ thu hồi trạng thái cuối cùng của mình bằng cách gửi cho bạn <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">REVOCATION_LASZLO_1</span>. Cập nhật số tiền và các script đầu ra trong giao dịch cam kết của bạn.`, // list_three: `Update your commitment transaction: Laszlo will revoke his last state by sending you <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap">REVOCATION_LASZLO_1</span>. Update the amounts and output scripts in your commitment transaction.`
      list_four: 'Gửi giao dịch của bạn cho Laszlo để anh ấy có thể ký', // list_four: 'Send your transaction to Laszlo so he can sign it'
      list_five: `Sau khi bạn có chữ ký của Laszlo, hãy gửi cho anh ấy khóa thu hồi trước đó của bạn, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_YOU_2 </span> `, // list_five: `Once you have Laszlo's signature, send him your previous revocation key, <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_YOU_2 </span> `
      paragraph_three: 'Thưởng thức 🍺', // paragraph_three: 'Enjoy 🍺'
      heading_three: 'Gợi ý', // heading_three: 'Hints'
      paragraph_four: `Đừng quên dành riêng 1.000 sats cho phí khai thác(đào) khối`, // paragraph_four: `Don't forget to set aside 1,000 sats for miner fees`
      paragraph_five: 'Đầu ra 0 được chi tiêu bởi:', // paragraph_five: 'Output 0 is spent by either:'
      step_one: {
 hint_one: `Laszlo, sau 700 khối:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) 1 </span>`, // hint_one: `Laszlo, after 700 blocks:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) 1 </span>`
 hint_two: `Bạn:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_LASZLO_2) SIG(YOU) 0 </span> `, // hint_two: `You:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_LASZLO_2) SIG(YOU) 0 </span> `
 hint_three: `Đầu ra 1 được bạn chi tiêu <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) </span> `, // hint_three: `Output 1 is spent by You <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) </span> `
      },
      step_two: {
 hint_one: `Bạn, sau 700 khối:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) 1 </span>`, // hint_one: `You, after 700 blocks:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(YOU) 1 </span>`
 hint_two: `Laszlo:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_3) SIG(LASZLO) 0 </span> `, // hint_two: `Laszlo:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> 0 SIG(REVOCATION_YOU_3) SIG(LASZLO) 0 </span> `
 hint_three: `Đầu ra 1 được Laszlo chi tiêu <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) </span> `, // hint_three: `Output 1 is spent by Laszlo <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base whitespace-nowrap"> SIG(LASZLO) </span> `
      },
    },

    outro_one: {
      title: 'Phần kết ', // title: 'Outro'
      nav_title: 'Thâu đêm suốt sáng', // nav_title: 'Going all night'
      paragraph_one:
   'Bạn có thể làm điều này cả đêm! Chà, cho đến khi tất cả 100.000 satoshi của bạn đều được gửi đến Laszlo', // 'You can do this all night long! Well, until your 100,000 satoshis have all been sent to Laszlo anyway'
      paragraph_two:
   "Đừng quên uống một chút nước! Họ cũng có holodogs và nachos.", // "Don't forget to drink some water! They have holodogs and nachos too."
    },

    outro_two: {
      title: 'Phần kết ', // title: 'Outro'
      nav_title: 'Trở về nhà', // nav_title: 'Heading home'
      paragraph_one: `Sau một ngày dài và kỳ lạ, bạn trả tiền đồ uống và trở về nhà. Nhưng khi bạn mở cửa căn nhà gỗ 3D của mình, bạn - ôi trời! Đó là Vanderpoole một lần nữa! Điều này có thực sự xảy ra hay bạn đã uống quá nhiều Mempool Margaritas? Mặc dù có một nhóm nhỏ các holocat bao quanh ông ta ở mọi phía, nhưng ông ta không hề tìm kiếm một cuộc chiến.`, // paragraph_one: `After a long and strange day, you pay for your drinks and head home. But as you open the door to your 3D printed bungalow, you—oh, crap! It’s Vanderpoole again! Is this really happening or did you have one too many Mempool Margaritas? Despite a small cadre of holocats flanking him on every side, he isn’t looking for a fight.`
      paragraph_two: `—VANDERPOOLE: “Chúng ta không thực sự biết nhau, mặc dù, như ông nội tôi thường nói, số phận của người lạ thường gắn liền với nhau. Tôi cần bạn nghe tôi nói. Tất cả những chuyện về Satoshi Nakamoto đều là tôi cố gắng cứu công việc kinh doanh của gia đình mình. Bạn không thể tưởng tượng được việc khai thác(đào) khối có ý nghĩa như thế nào đối với chúng tôi. Tôi đoán là tôi chưa sẵn sàng cho sự thay đổi và muốn giữ mọi thứ ít nhiều như cũ.”`, // paragraph_two: `—VANDERPOOLE: “We don’t really know one another, even though, as my grandpappy used to say, the fates of strangers are often intertwined. I need you to hear me. All of the Satoshi Nakamoto stuff was me trying to save my family’s business. You can’t imagine how much mining meant to us. I guess I wasn’t ready for change and wanted to keep things more or less the same.”`
    },

    outro_three: {
      title: 'Phần kết ', // title: 'Outro'
      nav_title: 'Cộng đồng bitcoin', // nav_title: 'Bitcoin community'
      paragraph_one: `Bạn hỏi tại sao cái tên Satoshi Nakamoto lại quan trọng với ông ấy như vậy.`, // paragraph_one: `You ask why the name Satoshi Nakamoto mattered so much to him.`
      paragraph_two: `—VANDERPOOLE: “Đó là cái tên duy nhất trong bitcoin lớn hơn Bitrey và Vanderpoole. Có một người sử dụng tên Satoshi Nakamoto đã từng nói với tôi rằng bitcoin đã vượt xa tầm kiểm soát của người tạo ra nó hơn một thế kỷ trước. Đây là lý do tại sao, để cứu vãn tên tuổi Vanderpoole, tôi đã cố gắng đòi hỏi một cái tên nổi bật hơn. Bạn không thể hiểu được cảm giác hồi hộp khi tạo ra những đồng coin mới. Đó là điều kỳ diệu đối với tôi lúc đó; nó vẫn là điều kỳ diệu đối với tôi bây giờ.”`, // paragraph_two: `—VANDERPOOLE: “It’s the only name in bitcoin bigger than Bitrey and Vanderpoole. Someone using the name Satoshi Nakamoto once told me that bitcoin had moved far beyond its creator’s control over a century ago. This is why, to salvage the Vanderpoole name, I tried to claim a more prominent name. You can’t understand the thrill of minting new coins. It was magic to me then; it is magic to me now.”`
      paragraph_three: `—VANDERPOOLE: "Tôi nhận ra rằng ngay cả khi tôi là cháu đời thứ của Satoshi, bitcoin cũng không được định nghĩa bởi các nhà lãnh đạo. Nó được định nghĩa bởi cộng đồng của nó. Ngay cả Satoshi cũng không thể thay đổi những gì bitcoin đã trở thành. Đó luôn là điều làm nên sự vĩ đại của bitcoin và lý do tại sao hàng triệu đồng coin khác được tạo ra theo hình ảnh của bitcoin không bao giờ tồn tại lâu dài.”`, // paragraph_three: `—VANDERPOOLE: "I realize now that even if I were Satoshi’s great-grandson, bitcoin isn’t defined by leaders. It’s defined by its community. Not even Satoshi could change what bitcoin has become. That has always been what made bitcoin great and why the millions of other coins made in bitcoin’s image never lasted.”`
    },

    outro_four: {
      title: 'Phần kết ', // title: 'Outro'
      nav_title: "Sự phản diện của Vanderpoole", // nav_title: "Vanderpoole's villainy"
      paragraph_one: `Vanderpoole nhặt chiếc holocat của bạn lên, và nó bắt đầu kêu gừ gừ. Con người thật phức tạp, và không ai hiểu điều đó hơn mèo, dù là mèo thật hay ảo.`, // paragraph_one: `Vanderpoole picks up your holocat, and it begins to pur. People are complicated, and no one knows that better than cats, holo or otherwise`
      paragraph_two: `—HOLOCAT: “Ông không phải là một nhân vật phản diện, ngài Vanderpoole. Nhưng có thể, chỉ có thể, ông đã quan tâm quá nhiều.”`, // paragraph_two: `—HOLOCAT: “You’re not a villain, Mr. Vanderpoole. But you maybe, just maybe, might have cared too much.”`
      paragraph_three: `—VANDERPOOLE: Đúng là sự thật.`, // paragraph_three: `—VANDERPOOLE: Ain’t that the truth.`
    },

    outro_five: {
      title: 'Phần kết ', // title: 'Outro'
      nav_title: 'Bạn đã làm được!!!', // nav_title: 'You did it!!!'
      heading_one: 'Bạn đã làm được!!!', // heading_one: 'You did it!!!'
      paragraph_one: `Giống như Satoshi, bạn cũng là một người vô danh, nhưng ý tưởng của bạn có giá trị nên mọi người đã theo bạn. Satoshi đã ra đi, nhưng tinh thần và ý tưởng của ông vẫn còn sống mãi. Với những kỹ năng lập trình bitcoin dev mới tìm thấy, một liều khiêm tốn lành mạnh và sự kiên trì tốt đẹp, bạn có thể để lại dấu ấn lâu đời trên hệ thống thanh lịch này, đã thống nhất thế giới dưới một loại tiền tệ không cần sự cho phép, chống kiểm duyệt trong hơn 100 năm. Những cuộc phiêu lưu mới đang chờ đón bạn trong mã nguồn và thị trường ý tưởng mở. bitcoin chỉ tồn tại vì những người như bạn đóng góp những gì họ có thể. Đó là lý do tại sao tất cả chúng ta đều là Satoshi.`, // paragraph_one: `Like Satoshi, you were a nobody, but your ideas had merit, so people followed you. Satoshi is gone, but his spirit and ideas live on. Armed with your newfound bitcoin dev coding skills, a healthy dose of humility, and some good old-fashioned persistence, you can leave an enduring mark on this elegant system that has united the world under permissionless, censorship-resistant money for more than 100 years. New adventures await you in the code and the open market of ideas. bitcoin only survives because people like you contribute what theycan. That’s why we are all Satoshi.`
    },

    outro_six: {
      title: 'Vượt ra ngoài Cứu Satoshi', // title: 'Beyond Saving Satoshi'
      nav_title: 'Vượt ra ngoài Cứu Satoshi', // nav_title: 'Moving beyond Saving Satoshi'
      heading: 'Bitcoin vẫn cần sự giúp đỡ của bạn...', // heading: 'Bitcoin still needs your help...'
      paragraph_one:
   'Mặc dù năm 2139 có vẻ xa vời, sứ mệnh của Bitcoin vẫn tồn tại mãi mãi: tạo ra đồng tiền công bằng, cởi mở và trung thực. Tuy nhiên, để đạt được tầm nhìn này sẽ cần đến nỗ lực của mọi người, bao gồm cả bạn.', //  'Although 2139 may seem distant, Bitcoin’s mission remains timeless: to create money that is fair, open, and honest. However, achieving this vision will require everyone’s efforts—including yours.'
      paragraph_two:
   'Bạn đã chứng tỏ rằng bạn hiểu về bitcoin. Bây giờ là thời điểm hoàn hảo để biến kiến ​​thức đó thành hành động bằng cách đóng góp vào một trong những công nghệ quan trọng nhất từ ​​trước đến nay.', //   'You’ve shown that you understand bitcoin. Now is the perfect time to turn that knowledge into action by contributing to one of the most important technologies ever.'
      paragraph_three:
   'Dự án <Link className="underline" href="https://bitcoindevs.xyz/">Phát triển Bitcoin</Link> ở đây để hướng dẫn các thế hệ tương lai của những người đóng góp mã nguồn mở. Trở thành anh hùng bitcoin ngày nay chỉ với một cú nhấp chuột.', //  'The <Link className="underline" href="https://bitcoindevs.xyz/">Bitcoin Dev Project</Link> is here to guide future generations of open-source contributors. Becoming a present day bitcoin hero today is just one click away.'
      paragraph_four: 'Chúng ta đều là Satoshi.', // paragraph_four: 'We are all Satoshi.'
    },
    tab_data: {
      signed: 'đã ký', // signed: 'signed'
    pending: 'đang chờ xử lý', // pending: 'pending'
    deposit:
 'Đây là một đầu ra 101.000 sats trong ví của bạn mà bạn sẽ sử dụng cho các khoản thanh toán ngoại tuyến với Laszlo.', //  'This is an output of 101,000 sats in your wallet that you are going to use for your off-chain payments with Laszlo.'
    payment: 'Đây là khoản thanh toán ngoại tuyến của bạn cho Laszlo.', // payment: 'This is your off-chain payment to Laszlo.'
    multisig:
 'Giao dịch này sẽ tài trợ cho đầu ra đa chữ ký giữa bạn và Laszlo.', // 'This transaction will fund a multisig output between you and Laszlo.'
    refund_0:
 'Giao dịch này đảm bảo rằng tiền không bị mất nếu Laszlo biến mất.', //  'This transaction ensures funds are not lost if Laszlo disappears.'
    refund_1:
 'Giao dịch này đảm bảo rằng tiền không bị mất nếu Laszlo biến mất. Nó cũng đảm bảo với Laszlo rằng bạn sẽ không phát sóng nó sau khi trả tiền bia.', //'This transaction ensures funds are not lost if Laszlo disappears. It also ensures Laszlo that you will not broadcast it after paying for your beer.'
    refund_2:
 'Giao dịch này đảm bảo rằng tiền không bị mất nếu Laszlo biến mất. Nó cũng ngăn bạn yêu cầu hoàn tiền đầy đủ ngay lập tức sau khi trả tiền bia. Nếu bạn cố gắng lấy lại toàn bộ khoản hoàn tiền, bao gồm cả 1.000 satoshi đã sử dụng để trả tiền bia, thì thời gian trễ 700 khối sẽ cho Laszlo vài ngày để nhận thấy.', // 'This transaction ensures funds are not lost if Laszlo disappears. It also prevents you from claiming the funds immediately after paying for your beer. If you try to take a full refund, including the 1,000 satoshis used to pay for the beer, the 700 block delay gives Laszlo a few days to notice.'
    commitment_you:
 'Đây là giao dịch cam kết thứ hai cho kênh thanh toán này, trả cho Laszlo 1.000 sats', // 'This is the second commitment transaction for this payment channel, that pays Laszlo 1,000 sats'
    commitment_laszlo:
 'Đây là phiên bản giao dịch cam kết của Laszlo.', //   'This is Laszlo’s version of the commitment transaction.'
    },
    resources: {
      output_zero_sig: 'Chữ ký Đầu ra 0', // output_zero_sig: 'Output 0 Signature'
    output_one_sig: 'Chữ ký Đầu ra 1', // output_one_sig: 'Output 1 Signature'
    sats_distribution:
 'Laszlo nên nhận đủ số sats cho bia và không chịu trách nhiệm về phí khai thác(đào) khối 1.000 sat. Phí được trừ vào tiền thừa của bạn.', // sats_distribution: 'Laszlo should receive enough sats for the beer, and is not responsible for the 1,000 sat miner fees. The fee comes out of your change.'
    output_script:
 'Script khóa trên đầu ra không nên chứa bất kỳ chữ ký nào (tức là <span className="rounded-sm px-1.5 py-1 font-mono bg-[#0000004D] m-1 text-base whitespace-nowrap">OP_PUSH SIG()</span>). Nếu đây là một phần của script của bạn, chỉ cần xóa nó đi.', // output_script: 'The locking script on the output should not contain any signatures (i.e. <span className="rounded-sm px-1.5 py-1 font-mono bg-[#0000004D] m-1 text-base whitespace-nowrap">OP_PUSH SIG()</span>). If this is part of your script, simply remove it.'
    miner_fees_basic: `Đừng quên dành riêng 1.000 sats cho phí khai thác(đào) khối.`, // miner_fees_basic: `Don't forget to set aside 1,000 sats for miner fees.`
    miner_fees: `Đừng quên dành riêng 1.000 sats từ tiền thừa của bạn cho phí khai thác(đào) khối.`, // miner_fees: `Don't forget to set aside 1,000 sats from your change for miner fees.`
    },
  },

  ///CHALLENGE PAGE
  challenge_list: {
    coming_soon: 'Sắp ra mắt. Chờ chút.', // coming_soon: 'Coming soon. Hang tight.'
  },

  chapter: {
    chapter_locked_one: 'Hoàn thành Chương', // chapter_locked_one: 'Complete Chapter'
    chapter_locked_two: 'để mở khóa.', // chapter_locked_two: 'to unlock.'
    coming_soon: 'Sắp ra mắt. Chờ chút.', // coming_soon: 'Coming soon. Hang tight.'
    description:
 'Khám phá những bí ẩn của Satoshi và tìm hiểu về bitcoin trên đường đi.', // description:  'Explore the mysteries of Satoshi and learn about bitcoin along the way.'
  },

  hero: {
    title: 'Cứu Satoshi', // title: 'Saving Satoshi'
    description: 'Mã hóa con đường của bạn thông qua những bí ẩn của bitcoin.', // description: 'Code your way through the mysteries of bitcoin.'
    start_journey: 'Bắt đầu', // start_journey: 'Start'
    tell_more: 'Cho tôi biết thêm', // tell_more: 'Tell me more'
  },

  footer: {
    paragraph_one: 'Một sản phẩm mã nguồn mở do cộng đồng bitcoin sản xuất.', // paragraph_one: 'An open-source production by the bitcoin community.'
    link: 'Kiểm tra mã', // link: 'Check the code'
  },

  navbar: {
    intro: 'Phần mở đầu', // intro: 'Intro'
    chapter: 'Chương', // chapter: 'Chapter'
    chapter_complete: 'Chương hoàn thành', // chapter_complete: 'Chapter complete'
    challenge: 'Thử thách', // challenge: 'Challenge'
    help_tooltip: 'Cần trợ giúp?', // help_tooltip: 'Need help?'
    your_language: 'Ngôn ngữ của bạn', // your_language: 'Your Language'
  },

  modal_signin: {
    heading: 'Đăng nhập', // heading: 'Sign in'
    pre_signin_paragraph_one:
 'Nhập khóa riêng của bạn bên dưới để khôi phục tài khoản và tiến trình của bạn.', // pre_signin_paragraph_one: 'Enter your private key below to restore your account and progress.'
    post_signin_paragraph_one:
 'Rất vui được gặp lại bạn để cứu Satoshi! Bạn có thể trực tiếp đến bài học cuối cùng của mình từ đây.', // post_signin_paragraph_one:  'Nice to see you return to save Satoshi! You can go directly to your last lesson from here.'
    prompt: 'Nhập khóa riêng của bạn', // prompt: 'Enter your private key'
    confirm: 'Đăng nhập', // confirm: 'Sign in'
    create_account: 'Bạn chưa có tài khoản?', // create_account: 'Don’t have an account?'
    login: 'Đăng nhập', // login: 'Log in'
    welcome_back: 'Chào mừng quay trở lại!', // welcome_back: 'Welcome back!'
    progress_redirect: 'Đưa tôi đến nơi tôi đã dừng lại', // progress_redirect: 'Take me to where I left off'
  },

  modal_logout: {
    heading: 'Bạn đã đăng nhập', // heading: 'You are logged in'
    paragraph_one:
 'Phiên của bạn sẽ vẫn hoạt động cho đến khi bạn đăng xuất bằng nút bên dưới.', // paragraph_one: 'Your session will remain active until you sign out using the button below.'
    private_key: 'Khóa riêng tư của bạn', // private_key: 'Your private key'
    signout: 'Đăng xuất', // signout: 'Sign out'
  },

  modal_signup: {
    heading: 'Lưu tiến trình của bạn', // heading: 'Save your progress'
    paragraph_one:
 'Sao chép và lưu trữ một mã đơn giản để lưu và tải tiến trình của bạn trong trình duyệt này. Nếu bạn đã có mã, hãy tải tiến trình của bạn ở đây.', // paragraph_one:'Copy and store a simple code to save and load your progress in this browser. If you already have a code, load your progress here.'
    subheading_one: 'Chọn một hình đại diện', // subheading_one: 'Choose an avatar'
    subheading_two: 'Sao lưu khóa riêng của bạn', // subheading_two: 'Back up your private key'
    generate:
 'Đã sẵn sàng? Mã đã được sao chép và sao lưu? Hãy chắc chắn rằng bạn đã làm như vậy, vì nó không thể được khôi phục nếu bạn bị mất.', // generate:'All set? Code copied and backed-up? Make sure your do, as it can’t be recovered if you lose it.'
    confirm: 'Hoàn thành', // confirm: 'Done'
    acknowledged:
 'Tôi xác nhận rằng tôi đã lưu khóa riêng này và biết rằng tôi sẽ cần nó cho các thử thách trong tương lai.', // acknowledged:'I acknowledge I have saved this private key and know that I will need it for challenges in the future.'
  },

  difficulty_selection: {
    NORMAL: 'Bật chế độ khó để tăng độ khó của thử thách.', // NORMAL: 'Enable hard mode to increase the difficulty of the challenges.'
    HARD: 'Tắt chế độ khó để giảm độ khó của thử thách.', // HARD: 'Disable hard mode to decrease the difficulty of the challenges.'
  },

  social: {
    twitter_share: 'Chia sẻ qua X', // twitter_share: 'Share via X'
    nostr_share: 'Chia sẻ qua nostr', // nostr_share: 'Share via nostr'
    sharing: 'Đang chia sẻ...', // sharing: 'Sharing...'
    shared: 'Đã chia sẻ!', // shared: 'Shared!'
    share_error: 'Chia sẻ thất bại', // share_error: 'Failed to share'
  },

  disclaimer: {
    description:
      'Chúng tôi rất vui mừng vì bạn đã tham gia. Lưu ý rằng một số thử thách yêu cầu kiến ​​thức lập trình cơ bản (có sẵn các mẹo). Hãy thử và chia sẻ <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">phản hồi</Link> của bạn.', //We’re excited for you to dive in. Note that some challenges require basic programming experience (tips are available). Give it a try and share your <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">feedback</Link>'
  },

  opcode: {
    run: 'Chạy Script', // run: 'Run the Script'
    reset: 'Đặt lại', // reset: 'Reset'
  },

  status_bar: {
    begin_message: 'Hoàn thành thử thách ở trên để tiếp tục...', // begin_message: 'Complete the challenge above to continue...'
    error_message: 'Hm... điều đó chưa hoàn toàn chính xác...', // error_message: 'Hm... that is not quite right yet...'
    in_progress_message: 'Đang tiến triển tốt...', // in_progress_message: 'Looking good so far...'
    success_message: 'Làm tốt!', // success_message: 'Nicely done!'
    next_step_message: 'Trông có vẻ ổn rồi, bây giờ chúng ta hãy chuyển sang bước tiếp theo.', // next_step_message: 'Looks good now lets move on to the next step.'
    im_stuck: "Tôi bị mắc kẹt", // im_stuck: "I'm Stuck"
    try_again: 'Thử lại', // try_again: 'Try Again'
    next: 'Tiếp theo', // next: 'Next'
    skip_challenge_first: "Hãy chuyển sang thử thách đầu tiên!", // skip_challenge_first: "Let's move on to the first challenge!"
    skip_challenge_last: "Hãy chuyển sang thử thách cuối cùng!", // skip_challenge_last: "Let's move on to the last challenge!"
  },

  hasher: {
    placeholder: 'Nhập ở đây...', // placeholder: 'Type here...'
    return_hash: 'Dưới đây bạn sẽ thấy đầu vào của bạn được chuyển đổi thành một hàm mã hóa', // return_hash: 'Below you will see your input converted to a hash'
  },

  hashrate: {
    start: 'Bắt đầu', // start
    running: 'Đang chạy', // running
    blocks_found: 'Khối tìm thấy', // blocks_found
    hashrate: 'Tốc độ mã hóa', // hashrate
    partial_solutions: 'Giải pháp một phần', // partial_solutions
  },

  runner: {
    run: 'Chạy script', // Run the script
    running: 'Đang chạy', // Running
    pause: 'Tạm dừng', // Pause
    result: 'Phần ra', // Result
    computing: 'Đang tính toán...', // Computing...
    evaluation: 'Đánh giá', // Evaluation
    script_output: 'Đầu ra script', // Script output
    waiting: 'Đang chờ đầu vào của bạn ở trên...', // Waiting for your input above...
    poor: "Đây là mã hợp lệ nhưng không hoàn toàn là những gì chúng tôi đang tìm kiếm. Hãy thử lại.", // This is valid code but it's not quite what we are looking for. Try again.
    good: 'Làm tốt, nó không hoàn toàn hoàn hảo nhưng vẫn được coi là chính xác. Tiếp tục làm việc hoặc tiếp tục, tùy bạn.', // Good job, its not quite perfect but still considered correct. Keep working or continue, your choice.
    success: 'Tuyệt vời, mã của bạn trông tuyệt vời!', // Great work your code looks great!
    language_tabs: {
      locked: "Ngôn ngữ bị vô hiệu hóa kể từ khi bạn bắt đầu chương này trong", // Language disabled since you've started this chapter in
      reset: 'Đặt lại thiết bị đầu cuối', // Reset the terminal
    },
  },
  notfound: {
    first: 'Hmm...chúng ta đang ở đâu?', // Hmm...where are we?
    second: 'Không rõ ràng lắm nơi này là đâu hay cái gì.', // It’s not quite clear where or what this place is.
    third: 'Có thể chúng ta đã lạc trong không gian (hoặc thời gian).', // We might have gotten lost in space (or time).
    back_safety: 'Trở lại an toàn', // Back to safety
  },
  error: {
    first: 'Có điều gì đó không ổn!', // Something is wrong!
    second: 'Holocat có thể đã gặm nhấm một số dây cáp một lần nữa. Con mèo xấu xa!', //con mèo may have chewed on some cables again. Bad cat!
    reload: 'Thử lại', // Retry
  },
  help_page: {
    main_heading: 'Tài nguyên học tập', // Learning Resources
    main_subheading:
      'Chúng tôi có thể cung cấp những thông tin và tài nguyên hữu ích nào để học tập thêm?', // What helpful info and resources can we provide for further learning?
    tips_heading: 'Mẹo', // Tips
    tips_subheading:
      'Chúng tôi muốn cung cấp cho người học những mẹo cụ thể nào nếu họ gặp khó khăn?', // What specific tips can/do we want to give learners if they are stuck?
    spoilers_heading: 'Giải đáp', // Spoilers
    spoilers_confirm: 'Có, tôi muốn xem giải pháp', // Yes, I want to see the solution
    pseudo_confirm: 'Có, tôi muốn xem mã giả', // Yes, I want to see the pseudocode
    solution: 'Giải pháp cho thử thách này', // Solution to this challenge
    pseudo_solution: 'Giải pháp mã giả cho thử thách này', // Pseudocode solution to this challenge
    solution_one: 'Giải pháp cho phần một của thử thách này', // Solution to part one of this challenge
    feedback:
      'Phản hồi của bạn rất có giá trị và giúp chúng tôi cải thiện công việc của mình hơn nữa, vui lòng cung cấp phản hồi bằng cách sử dụng <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">liên kết này</a>.', // Your feedback is valuable and helps us in enhancing our work more, please give us feedback using <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">this link</a>.
    help_suggestion:
      'Nếu bạn gặp khó khăn, hãy nhấn nút "?" ở góc trên cùng bên phải. Nó cung cấp các tài nguyên và mẹo hữu ích.', // If you're ever stuck, press the "?" button in the top-right corner. It provides helpful resources and tips.
  },
}
export default translations
