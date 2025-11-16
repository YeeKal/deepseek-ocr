## commands

convert mp4 to gif on ubuntu

> ffmpeg -i formula-ocr-step3.mp4 -r 15 -vf "scale=680:-1" formula-ocr-step3.gif

convert images to webp:

> for file in *.png *.jpeg *.jpg; do cwebp "$file" -o "${file%.*}.webp"; done

batch replace to .webp

> /assert/tools/(.*)\.(png|jpe?g|webp)  -> https://cdn.deepseekocr.io/tools/$1.webp

## technology

- [olmocr](https://github.com/allenai/olmocr/blob/main/olmocr/pipeline.py): 通过特殊定制prompt 可以在deepinfra中实现ocr功能
- lightonocr： https://www.saas.parasail.io/serverless?name=matt-ocr-1-dots
- dot ocr： https://www.saas.parasail.io/serverless?name=matt-ocr-1-dots

## propagate

Dev.to / Hashnode

当然可以！你已经有了Reddit和Twitter的策略，这是一个非常好的开端。为了让你的产品获得最大的曝光度，我们需要一个多渠道、分阶段的推广计划。

你的产品 (`deepseekocr.io`) 最大的优势在于它**对特定用户群体（学生、研究者、开发者）有“杀手级”的吸引力**，同时对**广大普通用户**也非常友好。我们的策略就是要在这两类人群中同时引爆。

下面是我为你制定的一个全面的产品推广渠道列表，分为三大类：**“短期引爆流量”、“中期深耕社群”和“长期持续增长”**。

---

### **第一阶段：短期引爆流量 (第一周)**

这个阶段的目标是在短时间内获得大量关注、初始用户和宝贵的反馈。

1.  **Product Hunt (产品猎手) - [必做项]**
    *   **为什么重要**: 这是全球最大的新产品发现社区。一次成功的发布能给你带来数以万计的访问量、高质量的早期用户、潜在的媒体报道，以及非常有价值的反向链接。
    *   **推广策略**:
        *   **精心准备**: 提前准备好所有的宣传材料：引人注目的产品Logo、简洁明了的标语、一个演示核心功能的GIF或短视频（20-30秒）、以及详细的第一条评论（介绍你的故事和产品特点）。
        *   **找到一个好的“猎人” (Hunter)**: 在社区里找一个有影响力的成员帮你发布产品，可以极大地增加初始曝光度。
        *   **发布日全力以赴**: 发布当天，全天候守在评论区，真诚、快速地回复每一个评论和问题。

2.  **Hacker News (Show HN)**
    *   **为什么重要**: 这是全球最顶尖的技术社区之一，用户主要是开发者、技术创始人和工程师。他们欣赏有技术含量的个人项目。
    *   **推广策略**:
        *   **标题要直接**: `Show HN: I built a free OCR tool powered by DeepSeek and PaddleOCR engines.`
        *   **内容要真诚透明**: 在第一条评论里，分享你的技术故事。谈谈你为什么选择这两个模型，你在`runpod`上遇到的挑战，以及你的成本控制策略。这里的用户对“营销话术”非常反感，但极其尊重“透明的建造者”（Build in Public）。
        *   **准备好接受技术提问**: 这里的评论会非常深入和专业，做好准备。

3.  **Dev.to / Hashnode**
    *   **为什么重要**: 这是开发者博客社区，是内容营销的绝佳起点。
    *   **推广策略**: 不要直接发广告。写一篇技术文章，比如：
        *   `"How I Built a High-Accuracy OCR Tool with Next.js and a Dual-AI Engine"`
        *   `"Comparing DeepSeek OCR and PaddleOCR for a Real-World Application"`
        在文章中，你自然地介绍了你的项目，并链接到你的网站。这提供了巨大的价值，同时也是一种非常有效的推广。

---

### **第二阶段：中期深耕社群 (第一至四周)**

这个阶段的目标是在你的核心用户群体中建立口碑。

1.  **专业领域的Facebook群组和Discord服务器**:
    *   **为什么重要**: 这些是你的目标用户聚集和交流的地方。
    *   **目标社群**:
        *   **学术/研究**: 搜索关于 `LaTeX`, `PhD Students`, `Academic Writing` 的群组。
        *   **数字笔记**: 搜索关于 `Notion`, `Obsidian`, `Roam Research` 的群组（你的Markdown输出是这里的巨大卖点）。
        *   **自由职业/小型企业**: 搜索 `Virtual Assistants`, `Freelance Writers`, `Small Business Owners` 的群组（你的**Receipt OCR**功能是这里的卖点）。
    *   **推广策略**: **绝对不要直接发链接！** 先加入群组，观察讨论。找到有人在问“有没有好用的OCR工具？”或者抱怨“手动输入太麻烦了”的帖子，然后**以一个热心帮助者的身份**回复：“我之前也遇到过这个问题，所以我自己做了一个免费的工具，也许能帮到你：[链接]”。

2.  **Indie Hackers**
    *   **为什么重要**: 这是一个独立开发者和创业者的社区。
    *   **推广策略**: 在这里分享你的整个创业旅程。创建你的产品页面，定期发布里程碑（比如“第一周获得了1000个用户！”），分享你的流量数据、遇到的困难和未来的盈利计划。这里的社区非常支持这种开放和透明的分享。

3.  **AI工具导航/聚合网站**:
    *   **为什么重要**: 这是获取稳定、精准流量的“低垂果实”。用户来到这些网站就是为了发现新的AI工具。
    *   **推广策略**: 花一个下午的时间，把你的产品提交到所有主流的AI工具导航站。例如：
        *   `There's An AI For That (TAAFT)`
        *   `Futurepedia`
        *   `SaaS Hub`
        *   `AlternativeTo` (在这里把你定位为 `Mathpix` 和 `ABBYY` 的免费替代品)

---

### **第三阶段：长期持续增长 (一个月后及以后)**

这个阶段的目标是建立一个稳定的、可持续的流量来源。

1.  **内容营销和SEO (博客)**:
    *   **为什么重要**: 这是你最重要的长期资产。通过撰写高质量的博客文章，你可以持续地从搜索引擎获取免费的、有高意向的流量。
    *   **推广策略**: 在你的网站上开设一个博客，并撰写针对用户痛点的文章：
        *   `"Top 5 Free Mathpix Alternatives in [Year]"` (把你的工具放在第一位)
        *   `"The Ultimate Guide to Converting Handwritten Notes to Digital Text"`
        *   `"How to Extract Tables from a PDF without Losing Formatting"`
        每一篇文章都应该提供真正的价值，并在结尾处自然地引出你的工具作为最佳解决方案。

2.  **YouTube / TikTok / Instagram Reels**:
    *   **为什么重要**: 视频是展示你产品“魔法”一刻的最直观方式。
    *   **推广策略**:
        *   **制作简短的演示视频 (Shorts/Reels)**: 一个15秒的视频，展示一张模糊的手写公式图片被瞬间转换成完美的LaTeX代码。这种“前后对比”极具冲击力，很容易传播。
        *   **制作教程视频 (YouTube)**: 一个2-3分钟的视频，展示如何使用你的`Receipt OCR`功能来管理一个月的开销。


## reference

- starter kit: https://github.com/Idea-To-Business/raphael-starterkit-v1
- deepseek ocr: https://github.com/deepseek-ai/DeepSeek-OCR
- deepseek ocr-webui: https://github.com/neosun100/DeepSeek-OCR-WebUI


demo
- https://huggingface.co/spaces/axiilay/DeepSeek-OCR-Demo
- https://huggingface.co/spaces/khang119966/DeepSeek-OCR-DEMO
- colab demo:
- vpn colab education: https://hackmd.io/@thc1006/HyNK0etUxe
- https://huggingface.co/spaces/merterbak/DeepSeek-OCR-Demo  带排版

others blog：

https://simonwillison.net/2025/Oct/20/deepseek-ocr-claude-code/: 这个人的博客一直排名都很高，写的内容确实都是自己的实际操作和真是见解，参考其用一个统一的仓库管理平时的脚本和技术文档， 主要写了自己用显卡部署deepseekocr，并尝试了官方推荐的不同任务的提示词，并给出不同任务的适用场景

$$\begin{aligned}
\mathcal{L}_{\text{QG}} ={}& 
\underbrace{\frac{1}{2\kappa^2} R}_{\text{Einstein--Hilbert}} 
- \underbrace{\frac{1}{4} F^{a}_{\mu\nu} F^{a\mu\nu}}_{\text{Yang--Mills}} \\
&+ \underbrace{\bar{\psi} \gamma^\mu \left( \nabla_\mu - i g A^a_\mu T^a \right) \psi}_{\text{Dirac--gauge coupling}} \\
&+ \underbrace{\lambda \left( \phi^\dagger \phi - v^2 \right)^2}_{\text{Higgs potential}} \\
&+ \underbrace{\xi R \phi^\dagger \phi}_{\text{non-minimal coupling}} \\
&+ \underbrace{\frac{1}{\sqrt{-g}} \partial_\mu \left( \sqrt{-g} \, K^{\mu\nu\rho\sigma} \nabla_\nu R_{\rho\sigma} \right)}_{\text{higher-derivative gravity}}
\end{aligned}$$

## todo

- 小屏幕 点击生成结果 raw text 会改变ui布局
- ~~添加roadmap~~
- 提取turnstile
- paddleocr: https://aistudio.baidu.com/account/accessToken
    - https://ai.baidu.com/ai-doc/AISTUDIO/2mh4okm66 api

## pro features
comming soon / roadmap
Get early-bird discounts on upcoming Pro features

- Higher Priority Queue: 付费用户将享受更快的处理速度，无需排队。
- Batch Processing: 支持一次上传并处理多个文件。
- 更多OCR模型: 
- Advanced Formats: 支持PDF文档识别，并保留格式。
- API Access: 为开发者提供接口，按量计费。


## tools

image describer
- https://imagedescriber.online/



## 域名

- mathpix free
- ai ocr

## ocr tools

- olmocr: https://github.com/allenai/olmocr
    - [demo](https://olmocr.allen.ai/)
- paddleocr: https://www.paddleocr.ai/latest/version3.x/pipeline_usage/PaddleOCR-VL.html
    - [demo](https://huggingface.co/spaces/PaddlePaddle/PaddleOCR-VL_Online_Demo)
- latexocr：https://github.com/lukas-blecher/LaTeX-OCR
    - pic2tex
    - blog: https://www.breezedeus.com/article/cnocr
- easy ocr: https://github.com/JaidedAI/EasyOCR
- multimodal-ocr3： https://huggingface.co/spaces/prithivMLmods/Multimodal-OCR3
    - https://prithivmlmods-multimodal-ocr3.hf.space/

cloud api：
- google
- azure
- mistral

blog：
- https://liduos.com/en/ai-develope-tools-series-2-open-source-doucment-parsing.html
- [Supercharge your OCR Pipelines with Open Models](https://huggingface.co/blog/ocr-open-models)

tail words:
- https://www.reddit.com/r/LaTeX/comments/1klp0ks/good_mathpix_alternative_with_handwritten_support/
- https://www.reddit.com/r/LaTeX/comments/1b1e3km/all_you_need_is_a_better_opensourced_latexocr/
- https://www.reddit.com/r/MLQuestions/comments/1hlj2vc/ultimate_solution_for_ocr_of_maths_textbooks/

## technology

turnstile error code : https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/error-codes/