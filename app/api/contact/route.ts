import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, requirements, timestamp } = body

    // 验证必填字段
    if (!name || !email || !phone || !requirements) {
      return NextResponse.json({ success: false, message: "请填写所有必填字段" }, { status: 400 })
    }

    // 记录到服务器日志（您可以在 Vercel 控制台查看）
    console.log("=== 新询盘信息 ===")
    console.log(`姓名: ${name}`)
    console.log(`邮箱: ${email}`)
    console.log(`电话: ${phone}`)
    console.log(`公司: ${company || "未提供"}`)
    console.log(`需求: ${requirements}`)
    console.log(`时间: ${timestamp}`)
    console.log("==================")

    const emailData = {
      access_key: "c695095f-8c25-4827-a6f5-82de6aafdfff",
      subject: `产品询盘 - ${name}`,
      from_name: name,
      from_email: email,
      to_email: "linda@czqttools.com",
      message: `客户询盘信息：

姓名：${name}
邮箱：${email}
电话：${phone}
公司：${company || "未提供"}
需求：${requirements}
提交时间：${timestamp}

请及时联系客户！`,
    }

    // 发送邮件
    try {
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      const emailResult = await emailResponse.json()

      if (emailResult.success) {
        console.log("✅ 邮件发送成功")
      } else {
        console.error("❌ 邮件发送失败:", emailResult.message)
      }
    } catch (emailError) {
      console.error("❌ 邮件发送异常:", emailError)
    }

    const emailContent = `客户询盘信息：

姓名：${name}
邮箱：${email}
电话：${phone}
公司：${company || "未提供"}
需求：${requirements}
提交时间：${timestamp}`

    return NextResponse.json({
      success: true,
      message: "询盘提交成功，我们会尽快联系您",
      emailContent: emailContent,
      customerInfo: { name, email, phone, company, requirements },
    })
  } catch (error) {
    console.error("API处理错误:", error)
    return NextResponse.json(
      {
        success: false,
        message: "提交失败，请稍后重试",
      },
      { status: 500 },
    )
  }
}
