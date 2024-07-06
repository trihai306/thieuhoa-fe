import React, { useEffect, useState } from 'react';

import { getAppLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/types';

import './style.module.scss';

const storeList = [
  {
    id: 33,
    nhanh_id: 100220,
    name: '63 Đại Lộ Đồng Khởi - Bến Tre',
    city_nhanh_id: 264,
    district_nhanh_id: 432,
    ward_nhanh_id: 10953,
    address: '63 Đại Lộ Đồng Khởi, P. Phú Khương, Bến Tre',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-28T04:05:53.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/dySb8mViwApW1UNxXEGWE9pDernjpE1kpPuncHta.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/vnA95nuu7juz4kfC6',
    last_order_time: null,
    slow_shipping_count: 1,
    confirm_returned_count: 17,
  },
  {
    id: 34,
    nhanh_id: 100225,
    name: '254 Cô Bắc - Quận 1',
    city_nhanh_id: 255,
    district_nhanh_id: 329,
    ward_nhanh_id: 10273,
    address: '254 Cô Bắc, Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/XzTVBZ6AWWcqq9F41Z5GRcNxrDzfnfi9afk6CP99.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/C52tV9XJvWUej4hi7',
    last_order_time: 1693404039,
    slow_shipping_count: 3,
    confirm_returned_count: 6,
  },
  {
    id: 36,
    nhanh_id: 100228,
    name: '422 Quang Trung - Gò Vấp',
    city_nhanh_id: 255,
    district_nhanh_id: 359,
    ward_nhanh_id: 10319,
    address: '422 Quang Trung, phường 10, Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/HKPW5WGLPV05M4WwxEXILXQQ3aDDHcAcFkAvfCFl.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/Fo2LktniniT815m9A',
    last_order_time: 1689908889,
    slow_shipping_count: 2,
    confirm_returned_count: 9,
  },
  {
    id: 37,
    nhanh_id: 100229,
    name: '317 Nguyễn Thị Thập - Quận 7',
    city_nhanh_id: 255,
    district_nhanh_id: 349,
    ward_nhanh_id: 10522,
    address: '317 Nguyễn Thị Thập, Tân Phú, Quận 7, TP. HCM',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/04/wwauZSgbRmcjItMSc1az1593nmdJrRAN5nWnvYqK.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/ueTXY9Qgw1vho4EY7',
    last_order_time: 1689909669,
    slow_shipping_count: 2,
    confirm_returned_count: 8,
  },
  {
    id: 40,
    nhanh_id: 128717,
    name: '114 Đặng Văn Bi - Thủ Đức',
    city_nhanh_id: 255,
    district_nhanh_id: 361,
    ward_nhanh_id: 10297,
    address: '114 Đặng Văn Bi, Bình Thọ, Thủ Đức, TP. HCM',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2022/10/x0R2vpl59uFacHqqj6hTBUghBjq1erwlgDGpXcjD.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/LjvGQiZEHPJRvaAc8',
    last_order_time: 1689126791,
    slow_shipping_count: 0,
    confirm_returned_count: 8,
  },
  {
    id: 41,
    nhanh_id: 128718,
    name: '789 Lũy Bán Bích - Tân Phú',
    city_nhanh_id: 255,
    district_nhanh_id: 356,
    ward_nhanh_id: 10367,
    address: '789 Lũy Bán Bích',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2022/10/dM4FFVzmuts4CJJcR3VW6Amz2LyxPHGYHyh0aCpL.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/JzunQXou9eTmoE117',
    last_order_time: 1689915055,
    slow_shipping_count: 0,
    confirm_returned_count: 9,
  },
  {
    id: 43,
    nhanh_id: 136740,
    name: '49G Phan Đăng Lưu - Phú Nhuận',
    city_nhanh_id: 255,
    district_nhanh_id: 358,
    ward_nhanh_id: 10377,
    address: '49G Phan Đăng Lưu',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2022/10/Q3f8AOsdU2CqkiwpWHNoiXoVyy1GaraYwiufbFrL.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/VLdM2iNnqzAxGbDv8',
    last_order_time: 1689909920,
    slow_shipping_count: 2,
    confirm_returned_count: 10,
  },
  {
    id: 44,
    nhanh_id: 147616,
    name: '245B Nguyễn Thị Tú - Bình Tân',
    city_nhanh_id: 255,
    district_nhanh_id: 357,
    ward_nhanh_id: 10507,
    address: '245B Nguyễn Thị Tú',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/03/eqFbIJpeAKFP8pzLRYFh6ARoUV0Mr2MgLWP7AQyt.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/LrtpVeGAH3DtB4az8',
    last_order_time: 1689127025,
    slow_shipping_count: 2,
    confirm_returned_count: 5,
  },
  {
    id: 45,
    nhanh_id: 147617,
    name: '2/4A Nguyễn Ảnh Thủ - Quận 12',
    city_nhanh_id: 255,
    district_nhanh_id: 1002,
    ward_nhanh_id: 10555,
    address: '2/4A Nguyễn Ảnh Thủ',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/03/ZqXbsRCzrfLmjA15ZtsLggUHRKmO4lI95cP2bV77.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/6DQriWHGWH3xnnQr8',
    last_order_time: 1689127067,
    slow_shipping_count: 2,
    confirm_returned_count: 4,
  },
  {
    id: 46,
    nhanh_id: 147618,
    name: '174 Bạch Mai - Hai Bà Trưng - HN',
    city_nhanh_id: 254,
    district_nhanh_id: 322,
    ward_nhanh_id: 1144,
    address: '174 Bạch Mai,',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/V1LgGxOCThWGlpkdbcSJ7QAFIsyYotLOO0b1KV4t.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/uEnqTqTkMN3yzBNT8',
    last_order_time: null,
    slow_shipping_count: 2,
    confirm_returned_count: 12,
  },
  {
    id: 47,
    nhanh_id: 148800,
    name: '850 Hậu Giang - Quận 6',
    city_nhanh_id: 255,
    district_nhanh_id: 348,
    ward_nhanh_id: 10479,
    address: '850 Hậu Giang,',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/03/3Xpt40uVPlSTNrzvaq98wZVS0R2IPbwFGZmSLjPE.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/fsch7HHzt7PLHeRQ6',
    last_order_time: 1691977819,
    slow_shipping_count: 1,
    confirm_returned_count: 6,
  },
  {
    id: 48,
    nhanh_id: 148814,
    name: '187 Lê Văn Việt - Quận 9',
    city_nhanh_id: 255,
    district_nhanh_id: 361,
    ward_nhanh_id: 12534,
    address: '187 Lê Văn Việt, Tăng Nhơn Phú B',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/03/yfuE3L5clBkFmYE88yf2xxSQyLpOSiMTDU16PjSD.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/tx8S1eCbEZWj3nfg7',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 2,
  },
  {
    id: 49,
    nhanh_id: 148815,
    name: '65 Nguyễn Lương Bằng -  Đống Đa - HN',
    city_nhanh_id: 254,
    district_nhanh_id: 321,
    ward_nhanh_id: 1122,
    address: '65 Nguyễn Lương Bằng, Nam Đồng',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/zWzFiw0qz4uXNCVS8AljtnfQxkmIqDRGl7QKPv4X.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/bxZXDDFTvTezPv5H8',
    last_order_time: null,
    slow_shipping_count: 1,
    confirm_returned_count: 5,
  },
  {
    id: 50,
    nhanh_id: 148816,
    name: '172 Yersin - Bình Dương',
    city_nhanh_id: 260,
    district_nhanh_id: 444,
    ward_nhanh_id: 9922,
    address: '172 Yersin, Thủ Đâu Một, Bình Dương',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/03/5ni3Hyp6g6ojhI6BFS6xEg6zDisKHNPE6jNqCRCI.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/7V3SNn3mrb2TPLR68',
    last_order_time: 1694514744,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 51,
    nhanh_id: 148817,
    name: '180 Bacu - Vũng Tàu',
    city_nhanh_id: 257,
    district_nhanh_id: 395,
    ward_nhanh_id: 10187,
    address: '180 Ba Cu',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/04/sfXFwoBnGLixunXCjrb7D8j38TNXKRa8jGrFC4fv.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/ADurwFAxoqLqQuvq5',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 52,
    nhanh_id: 148818,
    name: '19 Nguyễn Trãi - Cần Thơ',
    city_nhanh_id: 266,
    district_nhanh_id: 375,
    ward_nhanh_id: 11783,
    address: '19 Nguyễn Trãi, Tân An, Ninh Kiều, Cần Thơ',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/04/WGKGQvizPgwdsC6Fm67umBQ4R6g3nEPn7LKTiyF6.webp\r\n',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/ifLDMLvHcayhVWGP9\r\n',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 53,
    nhanh_id: 152558,
    name: '130 Quang Trung - Hà Đông - HN',
    city_nhanh_id: 254,
    district_nhanh_id: 379,
    ward_nhanh_id: 1312,
    address: '130 Quang Trung',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/ZYm7cqU2vWu67IkRUwPB6NeFwDApLj0pXDmMQGjj.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/Vg98iNvk8b228tZx5',
    last_order_time: null,
    slow_shipping_count: 5,
    confirm_returned_count: 1,
  },
  {
    id: 54,
    nhanh_id: 152559,
    name: '46 Xô Viết Nghệ Tĩnh - Bình Thạnh',
    city_nhanh_id: 255,
    district_nhanh_id: 360,
    ward_nhanh_id: 10346,
    address: '46 Xô Viết Nghệ Tĩnh',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/CV2NxsUtWqjtulsQCcENvoSF4UbYnmIPkm76W3s4.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/QuE1AXgfrGoGoBkw8',
    last_order_time: 1689909764,
    slow_shipping_count: 5,
    confirm_returned_count: 2,
  },
  {
    id: 55,
    nhanh_id: 152560,
    name: '228 Nguyễn Văn Cừ - Nghệ An',
    city_nhanh_id: 289,
    district_nhanh_id: 705,
    ward_nhanh_id: 6713,
    address: '228 Nguyễn Văn Cừ',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/fYCHh569bMg1uZcLV4cC2fO7dI44e5tCft0NAchv.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/1gDsxRk5Sho4ZgeE6',
    last_order_time: null,
    slow_shipping_count: 3,
    confirm_returned_count: 0,
  },
  {
    id: 56,
    nhanh_id: 152562,
    name: '44 Thái Nguyên - Nha Trang',
    city_nhanh_id: 267,
    district_nhanh_id: 629,
    ward_nhanh_id: 8666,
    address: '44 Thái Nguyên',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/06/NXI1ErMrDqP5vUkOkEtB8KaKmEWS66bUoqbwfVpR.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/hXSazGLRwiJvFNN97?coh=178573&entry=tt',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 57,
    nhanh_id: 152563,
    name: '1559 Phạm Văn Thuận - Biên Hòa',
    city_nhanh_id: 271,
    district_nhanh_id: 506,
    ward_nhanh_id: 10025,
    address: '1559 Phạm Văn Thuận',
    status: 1,
    type: 2,
    created_at: '2023-06-29T03:48:20.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/07/j73sujGnxKgcmHXDWWvkB04FhSt8jVPQkjBotiPt.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/3kFNHKGwMojoyB9h9',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 2,
  },
  {
    id: 58,
    nhanh_id: 159721,
    name: '400 Nguyễn Trung Trực - Kiên Giang',
    city_nhanh_id: 283,
    district_nhanh_id: 614,
    ward_nhanh_id: 11637,
    address: '400 Nguyễn Trung Trực, Phường Vĩnh Lạc, Rạch Giá, Kiên Giang',
    status: 1,
    type: 2,
    created_at: '2023-07-27T08:25:41.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/08/H0SAgtCNaWaqsC8uA6C8jdVHhS7BeDu7efy86SI7.webp',
    lat: null,
    long: null,
    map_url: 'https://goo.gl/maps/TgBedmk1sA68YoiV6',
    last_order_time: 1693403872,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 59,
    nhanh_id: 159722,
    name: '186 Ấp Bắc - Tiền Giang',
    city_nhanh_id: 304,
    district_nhanh_id: 790,
    ward_nhanh_id: 10780,
    address: '186 Ấp Bắc Mỹ Tho',
    status: 1,
    type: 2,
    created_at: '2023-07-27T08:25:41.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2023/09/DLTdaEXFo2dmxRHh5HKsEpWQeNM3FbfyGbEwbulV.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/yoWKGUyCT6chALjE7',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 60,
    nhanh_id: 159723,
    name: '122 Nguyễn Văn Linh - Đà Nẵng',
    city_nhanh_id: 312,
    district_nhanh_id: 371,
    ward_nhanh_id: 7914,
    address: '122 Nguyễn Văn Linh',
    status: 1,
    type: 2,
    created_at: '2023-07-27T08:25:41.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/03/SIgbYguswyp0naBuOdVENq4Tohwxot5iyPiNPvX6.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/gcXu3KVJ1sEHqs66A',
    last_order_time: null,
    slow_shipping_count: 0,
    confirm_returned_count: 0,
  },
  {
    id: 61,
    nhanh_id: 175151,
    name: '15 Phan Chu Trinh - Buôn Ma Thuột',
    city_nhanh_id: 310,
    district_nhanh_id: 488,
    ward_nhanh_id: 9329,
    address: '15 Phan Chu Trinh',
    status: 1,
    type: 2,
    created_at: '2024-03-28T16:34:28.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/N3UzblMe9qEkHhr56gegWOueogyQk9Z10ROGo9aA.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/YT1NviPGGbwNuDcf9',
    last_order_time: null,
    slow_shipping_count: null,
    confirm_returned_count: null,
  },
  {
    id: 62,
    nhanh_id: 175648,
    name: '871 Hà Hoàng Hổ - An Giang',
    city_nhanh_id: 256,
    district_nhanh_id: 402,
    ward_nhanh_id: 11479,
    address: '871 Hà Hoàng Hổ',
    status: 1,
    type: 2,
    created_at: '2024-03-28T16:34:28.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/AWAZpoWIG4KVuUWOXcYxTZzSCAyynxa6lrOqIokc.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/kDzCJSoaZWneyKx9A',
    last_order_time: null,
    slow_shipping_count: null,
    confirm_returned_count: null,
  },
  {
    id: 63,
    nhanh_id: 175649,
    name: '801 Cách Mạng Tháng 8 - Tây Ninh',
    city_nhanh_id: 300,
    district_nhanh_id: 784,
    ward_nhanh_id: 9830,
    address: '801 Cách Mạng Tháng 8, Hiệp Ninh, Tây Ninh',
    status: 1,
    type: 2,
    created_at: '2024-03-28T16:34:28.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/cej83rya8kgjWELcQ2Fk3RxQ4wUQDvjQm0PI7gsD.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/LuWqL1BNWy54z4Fj8',
    last_order_time: null,
    slow_shipping_count: null,
    confirm_returned_count: null,
  },
  {
    id: 64,
    nhanh_id: 177463,
    name: '46 Phan Đình Phùng - Đà Lạt',
    city_nhanh_id: 286,
    district_nhanh_id: 656,
    ward_nhanh_id: 9574,
    address: '46 Phan Đình Phùng, Phường 1, Thành phố Đà Lạt, Lâm Đồng',
    status: 1,
    type: 2,
    created_at: '2024-04-28T03:47:26.000000Z',
    updated_at: '2024-05-20T06:17:37.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/wjHW0CcraDalnyzKT0lXtrKfGLWiS5X7cTKNbmqP.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/vjEULPvtnMQs5bn37',
    last_order_time: null,
    slow_shipping_count: null,
    confirm_returned_count: null,
  },
  {
    id: 65,
    nhanh_id: 177464,
    name: '7 Trần Hưng Đạo - Cà Mau',
    city_nhanh_id: 273,
    district_nhanh_id: 466,
    ward_nhanh_id: 12114,
    address: '7 Trần Hưng Đạo, Phường 5, Thành phố Cà Mau',
    status: 1,
    type: 2,
    created_at: '2024-04-28T03:47:26.000000Z',
    updated_at: '2024-05-28T04:06:49.000000Z',
    image:
      'https://thieuhoa.com.vn/wp-content/uploads/2024/05/roFp4kGK8tT0cx8GFMzqay6Eu7UPwpQPbehiTnfh.webp',
    lat: null,
    long: null,
    map_url: 'https://maps.app.goo.gl/QT6DX8N5eHePUoYr8',
    last_order_time: null,
    slow_shipping_count: null,
    confirm_returned_count: null,
  },
];

const StoreListPage: NextPageWithLayout = () => {
  const [filter, setFilter] = useState({ city_nhanh_id: '' });
  const [listStore, setListStore] = useState(storeList);
  const [listCity, setListCity] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCities();
    selectCity();
  }, [filter.city_nhanh_id]);

  const selectCity = () => {
    // fetch(`/webapi/store-list?city_nhanh_id=${filter.city_nhanh_id}`)
    //   .then((response) => response.json())
    //   .then((data) => setListStore(data.data))
    //   .catch(() => setError(true));
  };

  const getCities = () => {
    fetch('/webapi/location/cities?status=1')
      .then((response) => response.json())
      .then((data) => setListCity(data.data))
      .catch(() => setError(true));
  };

  return (
    <div id="content-shop-system">
      <div className="gr-shop-system">
        <div className="title-gr">Hệ Thống Cửa Hàng</div>
        <div className="gr-item">
          <div className="item-form">
            <select
              name="calc_shipping_provinces"
              onChange={(e) => setFilter({ ...filter, city_nhanh_id: e.target.value })}
              value={filter.city_nhanh_id}
            >
              <option value="">Chọn Tỉnh / Thành phố</option>
              {listCity.map((city) => (
                <option key={city.nhanh_id} value={city.nhanh_id}>
                  {city.name}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="billing_address_1" type="hidden" value="" />
          </div>
        </div>
        <div className="list-shop">
          {listStore.map((store) => (
            <div key={store.id} className="item-shop">
              <div className="address-item">{store.address}</div>
              <div className="time-open">
                <div className="time">Giờ mở cửa: 8:00 - 22:00</div>
                <div className="status">
                  <span>Đang mở</span>
                </div>
              </div>
              <a target="_blank" href={store.map_url} className="see-way">
                Xem đường đi
              </a>
              <img
                src={store.image ? store.image : '/v2/img/anh-cua-hang.png'}
                alt="Ảnh cửa hàng"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

StoreListPage.getLayout = getAppLayout;
export default StoreListPage;
