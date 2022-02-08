import { useState } from "react";
import { Form, Input, Button, Checkbox, Modal } from 'antd'

const NavBar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-wrap">
            <div className="text-white h-20 w-1/2 bg-gray-900 px-8 py-4 text-lg">
                <div className="flex flex-row gap-16 pt-2 text-white">
                    <a href="/" className="font-medium text-purple-500 text-3xl font-bold hover:text-purple-500">
                        Tudor
                    </a>
                    <div className="flex flex-row gap-16 pt-2 font-light">
                        <a href="/about">
                            About Us
                        </a>
                        <a href="/">
                            Safety
                        </a>
                        <a href="/">
                            Team
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-end bg-gray-900 w-1/2 py-5 px-8">
                <button onClick={showModal} className="rounded-md font-medium text-lg bg-gray-200 text-red-700 px-8">
                    Log in
                </button>
                <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className="bg-gray-400 text-white font-normal border-gray-400 hover:bg-green-400" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default NavBar 