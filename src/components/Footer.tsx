
import React from 'react';
import { FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Về Chúng Tôi</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Giới Thiệu</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tuyển Dụng</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Điều Khoản</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Bảo Mật</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Trung Tâm Trợ Giúp</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Hướng Dẫn Mua Hàng</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Vận Chuyển</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Thanh Toán</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Đối Tác</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Đăng Ký Đối Tác</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Quy Định Đối Tác</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Ưu Đãi Đối Tác</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Đào Tạo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kết Nối</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FiUser className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FiShoppingCart className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FiSearch className="h-6 w-6" /></a>
                        </div>
                        <p className="text-gray-400">Đăng ký nhận thông tin mới nhất</p>
                        <div className="mt-2 flex">
                            <input type="email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full" placeholder="Email của bạn" />
                            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">Gửi</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2024 Tên Công Ty. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



