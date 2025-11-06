# deepseek-ocr

recently deepseek has released a new technology “DeepSeek-OCR: Contexts Optical Compression”。 now i want to create a website for this, the domain is deepseekocr.io
the github source code page: https://github.com/deepseek-ai/DeepSeek-OCR
paper Link: https://github.com/deepseek-ai/DeepSeek-OCR/blob/main/DeepSeek_OCR_paper.pdf
我在开发一个deepseek ocr的网站，
技术栈采用 nextjs + tailwildcss
我已经做出了一个demo，用户可以免登录在线上传图片，然后识别文本。
为了防止用户恶意高频请求，我还增加了cloudflare turnstile进行防护
当前模型部署在runpod上，现在人数比较少，请求一次在10s-20s左右，如果遇上冷启动，冷启动会额外增加60s左右

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
- 左侧面板
    - 提供示例图片 (Provide Samples): 用户第一次来，可能手头没有合适的图片。在上传区域下方提供2-3张预设的、能体现技术优势的示例图片（比如：复杂的论文截图、带表格的财务报表、手写笔记照片）。用户点击一下就能立即看到识别结果，极大降低了使用门OT
    - 明确状态反馈: 这是当前最需要优化的体验。当用户上传图片后，右侧的结果区域不能只是空白。必须要有明确的加载状态，比如一个loading spinner，并配上文字：
        “正在上传...”
        “排队中，当前排在第2位...”
        “模型启动中，大约需要60秒...”
        “正在识别中...”
    - 优化任务类型选项 (Task Type): 每个选项下面可以加一小行灰色的说明文字，解释这个选项的用途。例如：
    Document to Markdown: (适合转换文章、笔记)
    Figure Parse: (从图表中提取结构化数据)
- 右侧面板
    - 状态一：初始欢迎状态 (Initial Welcome State)

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
image ocr
pdf ocr
batch ocr
document ocr
free mathpix alternative
free-online-math-equation-ocr
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