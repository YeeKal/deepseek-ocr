# deepseek-ocr

我在开发一个ocr工具网站，网站主要使用开源的paddleocr vl模型，辅助使用 DeepSeek OCR 。其中paddleocr vl模型由于其较小的参数量，较快的启动速度以及相当的准确度会作为大部分任务的处理引擎。但是首页的体验会结合DeepSeek OCR和paddleocr vl，以吸引用户。DeepSeek OCR: 作为“明星产品”和“技术展示”，负责吸引对精度要求极高的用户，制造话题性，提升网站的专业形象。PaddleOCR: 作为“主力产品”，负责处理大部分免费流量，其低成本的 API 能极大降低你的运营开销，保证免费服务的可持续性。结合使用 DeepSeek OCR（高精度、高成本）和 PaddleOCR（高性价比）两个模型，形成一个既能吸引眼球又能控制成本的产品矩阵。

基本背景信息：
- 网站域名： deepseekocr.io， 借助 DeepSeek OCR 的热度进行冷启动，吸引第一波流量
- 技术栈采用 nextjs + tailwildcss

技术支持：
- DeepSeek OCR 没有找到合适的api提供商，当前模型部署在runpod上，现在人数比较少，请求一次在10s-20s左右，如果遇上冷启动，冷启动会额外增加60s左右，单次0.03$左右，耗费较高，维护成本高
- PaddleOCR VL：https://aistudio.baidu.com/ 有提供api服务，根据token计费，单次耗费较低，预测0.001$左右,维护成本低，接入方便
- DeepSeek OCR参考信息
    - 开源代码： https://github.com/deepseek-ai/DeepSeek-OCR
    - 技术报告： https://github.com/deepseek-ai/DeepSeek-OCR/blob/main/DeepSeek_OCR_paper.pdf
- paddle ocr
    - 技术报告： https://arxiv.org/pdf/2510.14528
    - 开源代码：https://github.com/PaddlePaddle/PaddleOCR
    - huggingface 页面：https://huggingface.co/PaddlePaddle/PaddleOCR-VL

网站布局：
- /： hero部分-> 免费试用playground ...
- /models/[model]: 模型详细页面，后续可能添加更多的ocr模型
- /tools/[tool]: 分类工具页面， passport ocr/text scanner/ocr invoice/receipt ocr 等等，瞄准更多相关词汇

盈利模式：
- googole adsense 广告
- 高级会员订阅
- 借助Rapidapi或者apify的API服务

开发阶段
- step1(0-1week): 主页 + 模型页 + 工具页，开始在社交媒体宣传
- step2(1-2week): 添加订阅+支付系统， 逐步添加外链
- step3(2-3week): rappidapi 和apify 开发api服务，网页内添加api相关页面（介绍+开发接口+ 定价信息），进一步添加外联
- step4(3-4week): 申请google adsense 广告，网站内部署广告位置，添加更多模型或者工具页，进一步完善seo
- 添加多语言




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

公式识别
latex ocr
image ocr
pdf ocr
batch ocr
document ocr
free mathpix alternative
free-online-math-equation-ocr

image into text generator
image into text converter
convert pdf into text
handwriting ocr

passport ocr
ocr receipt scanner
ocr scanner online
scan text to word
text scanner
ocr invoice scanning
receipt ocr

image to text 1M
picture to text
photo to text

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