---
title: 手把手教你免费生成Labubu潮玩！无需抢购，轻松实现Labubu自由
is_draft: false
date: 2025-06-16
keywords:
cover: 
seoTitle: 
seoDesc: 
description:  想拥有火爆全网的Labubu潮玩却抢不到？二手价格太高？本文教你用AI技术免费生成专属Labubu图片！通过Together AI的免费API和Labubu Lora模型，只需简单几步提示词，就能轻松创作各种风格的Labubu形象。附Python代码教程，小白也能轻松上手，快来解锁你的Labubu自由吧！
---

labubu太火热，实体店难买，二手太贵，本文教你用 Labubu Doll Generator Lora, 借助together ai的免费api，通过简单的提示词生成我们想要的labubu图片。

> 本文涉及基本python代码，若不想自己折腾，可以在线体验： [ai-labubu-generator](https://kontextflux.io/image-generator/ai-labubu-generator)




<!-- <video src="https://cdn.kontextflux.io/labubu-generator/video/labubu-generator-hero-video.webm" controls="controls" width="300" height="500"></video> -->

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0orivtyekx5v1nml9esz.png)

简略步骤：

1. 获取 Labubu lora 链接
2. 注册together ai 获取免费1美元api额度
3. python调用api生成图片

## 获取 Labubu lora 链接

lora 路径： https://huggingface.co/spaces/yeekal/lbb_lora/resolve/main/flux_lbb_style_v1_2ksteps.safetensors?download=true

我们不用下载到本地，这个链接后面会作为一个参数传入到together ai 里面。

除非你是本地部署模型lora，需要下载

## 注册together ai

这一步主要是获取together api的密钥

访问[together.ai](https://www.together.ai/)注册，注册完成之后进入到个人账号页面，点击Dashboard，可以看到赠送的1美元额度。如下图左侧`API Keys`, 点击复制密钥

![](https://cdn.kontextflux.io/blog/2025-06-16_13-10.png)

## python 调用

安装together 依赖

> pip install --upgrade together

调用 together api:

1. copy 代码
2. 修改密钥api_key
3. 修改提示词
4. 运行，等待5-10s即可出结果

```python
from together import Together

# Set the API key directly in the client
client = Together(api_key="") # 设置密钥

help(client.images.generate)

response = client.images.generate(
    # 设置自己的提示词
    prompt="Labubu style, walking on street with a pack", #"labubu style, an astronaut",
    # 基模，不用改
    model="black-forest-labs/FLUX.1-dev-lora",
    width=768,
    height=1024,
    image_loras=[
    {
      "path": "https://huggingface.co/spaces/yeekal/lbb_lora/resolve/main/flux_lbb_style_v1_2ksteps.safetensors?download=true",
      "scale": 0.8
    }
  ],
    steps=30
)

# 生成之后会返回一个图片url链接，点击即可看到结果
print(response.data[0].url)
```

图片中的宽高可以自定义设置，但是根据together ai的收费说明，图片越大，费用越贵。代码里面默认设置的`768x1024`清晰度也够用了，可以不用改，下面的图都是这个尺寸，可以参照下面生成的图。
![](https://cdn.kontextflux.io/blog/2025-06-16_15-01.png)



## 生成结果展示


> **懒人试用链接: [ai-labubu-generator](https://kontextflux.io/image-generator/ai-labubu-generator)**


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jby2wr6ijt0tgzng4mne.png)



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lm6ev6st5e7yfuu3d9hq.png)


![](https://cdn.kontextflux.io/labubu-generator/44e778f9340ee9eb2ad964c1f19e73feb5ca0461954c8b0d2038145c86390345.png)
![](https://cdn.kontextflux.io/labubu-generator/491f31a9262d2111b78edcd0cc01d8a01837f254fc17cdbb2e661df1f1ec3dc0.png)
![](https://cdn.kontextflux.io/labubu-generator/79127e5615845dda8a1599d1141b252d37f8eab3498d495c3fef90946f4fd5fd.png)
![](https://cdn.kontextflux.io/labubu-generator/970e77964a615c17337918dab381eface276cfc4318c568515875bea2892bf04.png)
![](https://cdn.kontextflux.io/labubu-generator/lbb-lora-astronaut.jpg)



**懒人试用链接: [ai-labubu-generator](https://kontextflux.io/image-generator/ai-labubu-generator)**





