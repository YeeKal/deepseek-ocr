## commands

convert mp4 to gif on ubuntu

> ffmpeg -i formula-ocr-step3.mp4 -r 15 -vf "scale=680:-1" formula-ocr-step3.gif

convert images to webp:

> for file in *.png *.jpeg *.jpg; do cwebp "$file" -o "${file%.*}.webp"; done

batch replace to .webp

> /assert/tools/(.*)\.(png|jpe?g|webp)  -> https://cdn.deepseekocr.io/tools/$1.webp


## todo

- blog 页面，添加对比博客，发10篇左右对比测评文章（DeepSeek OCR vs Gemini vs GPT-4o vs Claude 3.5在手写/表格/多语言上的真实截图对比
- ~~小屏幕 点击生成结果 raw text 会改变ui布局~~
- ~~添加roadmap~~
- 提取turnstile
- ~~paddleocr~~: https://aistudio.baidu.com/account/accessToken
    - https://ai.baidu.com/ai-doc/AISTUDIO/2mh4okm66 api

## 多语言

- 框架： next-intl
- 按模块/页面创建语言json文件
- 语言文件懒加载 服务端/客户端
    - getRequestConfig 只导入 common
    - 服务端： 使用 getmessages 函数 配合动态 import 来实现按需读取文件
    - 客户端“懒加载” (减小 Bundle 体积)
    - layout 只需加载common文件

    - 页面子组件
        - 尽量依赖参数传入
        - 或者通过 NextIntlClientProvider 将翻译数据注入到客户端
        - common 数据可以使用: getTranslations（服务端 API）和 useTranslations(服务端) （依赖 getRequestConfig）
- 获取locale：
    - 在 page.tsx (Home) 中： 推荐使用 params.locale (方法 A) 或 await getLocale() (方法 B)。两者皆可，方法 A 是 Next.js 原生机制，方法 B 代码更简洁。

    - 在子组件中：
        - 如果是 Server Component：也可以直接用 await getLocale()，或者由父组件传 props 进来。
        - 如果是 Client Component：直接使用 const locale = useLocale()。
- tools meta 数据的获取
    - 服务端 读取文件
    - 客户端 参数传入
3. 不要更改任何组件的渲染逻辑以及en语言下的任何文本，我注意到你更改了很多组建的逻辑，请修复。
4. 保持原来数据类型，比如有些事数组类型，那么在json中也应该是数组。另外在json中定义的一些数据，在组件中不需要重复定义了


## technology

- [olmocr](https://github.com/allenai/olmocr/blob/main/olmocr/pipeline.py): 通过特殊定制prompt 可以在deepinfra中实现ocr功能
- lightonocr： https://www.saas.parasail.io/serverless?name=matt-ocr-1-dots
- dot ocr： https://www.saas.parasail.io/serverless?name=matt-ocr-1-dots


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

## dev commands

wsl 开发
> pnpm next dev -H 0.0.0.0

prisma
> pnpm add -D prisma
> pnpm add @prisma/client
> pnpm prisma generate # 生成 prisma client

vercel deploy build config
> pnpm prisma generate && pnpm build