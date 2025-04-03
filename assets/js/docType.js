/**
 * docType (js)
 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const dt_doctype_table = document.querySelector('.invoice-list-table');
  // const modalCloseBtn = document.querySelector('.btn-close');
  if (dt_doctype_table) {
    // modalCloseBtn.addEventListener("click", function () {
    //   document.getElementById("OnModal").style.display = 'none';
    //   document.getElementById("OnModal").className = 'modal fade';
    // });

    window.addEventListener("click", function (event) {
      if (event.target == document.getElementById("OnModal")) {
        document.getElementById("OnModal").style.display = 'none';
        document.getElementById("OnModal").className = 'modal fade';
      } else if (event.target == document.getElementById("SearchModal")) {
        document.getElementById("SearchModal").style.display = 'none';
        document.getElementById("SearchModal").className = 'modal fade';
      } else if (event.target == document.getElementById("DeleteModal")) {
        document.getElementById("DeleteModal").style.display = 'none';
        document.getElementById("DeleteModal").className = 'modal fade';
      }

    });
    const dt_doctype = new DataTable(dt_doctype_table, {
      ajax: assetsPath + 'json/invoice-list.json',
      pageLength: 25,
      columns: [
        { data: 'invoice_id' },
        { data: 'invoice_id', orderable: false, render: DataTable.render.select() },
        { data: 'invoice_id' },
        { data: 'client_name' },
        { data: 'client_name' },
        { data: 'issued_date' },
      ],
      columnDefs: [
        {
          className: 'control',
          responsivePriority: 2,
          searchable: false,
          targets: 0,
          render: function () {
            return '';
          }
        },
        {
          targets: 1,
          orderable: false,
          searchable: false,
          responsivePriority: 4,
          render: function () {
            return '';
          }
        },
        {
          targets: 2,
          render: function (data, type, full) {
            return `<a href="">#${full['invoice_id']}</a>`;
          }
        },
        {
          targets: 3,
          render: function (data, type, full) {
            const clientName = full['client_name'];
            return `
                        <div class="d-flex justify-content-start align-items-center">
                          <div class="d-flex flex-column">
                            <a href="pages-profile-user.html" class="text-heading text-truncate"><span class="fw-medium">${clientName}</span></a>
                          </div>
                        </div>
                      `;;
          }
        },
        {
          targets: 4,
          render: function (data, type, full) {
            const clientName = full['client_name'];
            return `
                        <div class="d-flex justify-content-start align-items-center">
                          <div class="d-flex flex-column">
                            <a href="pages-profile-user.html" class="text-heading text-truncate"><span class="fw-medium">${clientName}</span></a>
                          </div>
                        </div>
                      `;;
          }
        },
        {
          targets: 5,
          render: function (data, type, full) {
            const issueDate = new Date(full['issued_date']);
            return `
                          <span class="d-none">${issueDate.toISOString().slice(0, 10).replace(/-/g, '')}</span>
                          ${issueDate.toLocaleDateString('ar', { month: 'short', day: '2-digit', year: 'numeric' })}
                        `;
          }
        },
        {
          targets: 6,
          // title: 'Actions',
          searchable: false,
          orderable: false,
          render: function () {
            return (
              '<div class="d-flex align-items-center">' +
              '<button type="button" class="btn btn-icon btn-text-secondary rounded-pill waves-effect" title="حذف" data-bs-toggle="modal" data-bs-target="#DeleteModal"><i class="icon-base ti tabler-trash icon-22px"></i></button>' +
              '<a href="app-invoice-preview.html" data-bs-toggle="tooltip" class="btn btn-icon btn-text-secondary rounded-pill waves-effect" data-bs-placement="top" title="عرض"><i class="icon-base ti tabler-eye icon-22px"></i></a>' +
              '<div class="dropdown">' +
              '<a href="javascript:;" class="btn dropdown-toggle hide-arrow btn-icon btn-text-secondary rounded-pill waves-effect p-0" data-bs-toggle="dropdown"><i class="icon-base ti tabler-dots-vertical icon-22px"></i></a>' +
              '<div class="dropdown-menu dropdown-menu-end">' +
              '<a href="javascript:;" class="dropdown-item">Download</a>' +
              '<a href="app-invoice-edit.html" class="dropdown-item">Edit</a>' +
              '<a href="javascript:;" class="dropdown-item">Duplicate</a>' +
              '</div>' +
              '</div>'
            );
          }
        }
      ],
      layout: {
        top: {
          rowClass: 'row m-3 my-5 align-items-center',
          features: [
            {
              // pageLength: {
                // menu: [25, 50, 100],
                // text: 'اظهار عدد نتائج لكل صفحة_MENU_'
              // },
              buttons: [
                {
                  text: '', // Simple vertical bar as text
                  className: 'button-separator',
                  enabled: false, // Optional: Disable interaction
                },
                {
                  text: '<i class="icon-base ti tabler-plus icon-16px me-md-2"></i><span class="d-md-inline-block d-none">اضافة</span>',
                  className: 'btn btn-primary',
                  attr: {
                    'data-bs-toggle': 'modal',
                    'data-bs-target': '#OnModal',
                    
                  }
                },
                {
                  text: '', // Simple vertical bar as text
                  className: 'button-separator',
                  enabled: false, // Optional: Disable interaction
                },
                {
                  text: '<i class="icon-base ti tabler-rotate-clockwise icon-16px me-md-2"></i><span class="d-md-inline-block d-none">تحديث</span>',
                  className: 'btn btn-primary',
                  action: function () {
                    //Add update logic here
                  },
                },
                {
                  text: '', // Simple vertical bar as text
                  className: 'button-separator',
                  enabled: false, // Optional: Disable interaction
                },
                {
                  text: '<i class="icon-base ti tabler-search icon-16px me-md-2"></i><span class="d-md-inline-block d-none">بحث</span>',
                  className: 'btn btn-primary',
                  attr: {
                    'data-bs-toggle': 'modal',
                    'data-bs-target': '#SearchModal',
                  }
                },
              ]
            }
          ]
        },
        topStart:null,
        topEnd: null //{
          // rowClass: 'row m-3 my-0 justify-content-between',
          // features: [
            // {
            //   search: {
            //     placeholder: 'بحث بالاسم او بالرقم',
            //     text: '_INPUT_'
            //   }
            // }
          // ]
        //},
        ,
        bottomStart: {
          rowClass: 'row mx-3 justify-content-between',
          features: ['info']
        },
        bottomEnd: 'paging',

      },
      language: {
        paginate: {
          next: '<i class="icon-base ti tabler-chevron-right scaleX-n1-rtl icon-18px"></i>',
          previous: '<i class="icon-base ti tabler-chevron-left scaleX-n1-rtl icon-18px"></i>',
          first: '<i class="icon-base ti tabler-chevrons-left scaleX-n1-rtl icon-18px"></i>',
          last: '<i class="icon-base ti tabler-chevrons-right scaleX-n1-rtl icon-18px"></i>'
        }
      },
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.childRowImmediate,
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            const data = columns
              .map(function (col) {
                return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                  ? `<tr data-dt-row="${col.rowIndex}" data-dt-column="${col.columnIndex}">
                              <td>${col.title}:</td>
                              <td>${col.data}</td>
                            </tr>`
                  : '';
              })
              .join('');

            if (data) {
              const div = document.createElement('div');
              div.classList.add('table-responsive');
              const table = document.createElement('table');
              div.appendChild(table);
              table.classList.add('table');
              const tbody = document.createElement('tbody');
              tbody.innerHTML = data;
              table.appendChild(tbody);
              return div;
            }
            return false;
          }
        }
      },
    })
  }

  setTimeout(() => {
    const elementsToModify = [
      { selector: '.dt-buttons .btn', classToRemove: 'btn-secondary' },
      { selector: '.dt-buttons', classToRemove: 'btn-secondary' },
      { selector: '.dt-buttons.btn-group', classToAdd: 'mb-0' },
      { selector: '.dt-search .form-control', classToRemove: 'form-control-sm' },
      { selector: '.dt-length .form-select', classToRemove: 'form-select-sm' },
      { selector: '.dt-length', classToAdd: 'me-0 mb-md-6 mb-6' },

      {
        selector: '.dt-layout-end',
        classToRemove: 'justify-content-between ms-auto',
        classToAdd: 'justify-content-md-between justify-content-center d-flex flex-wrap gap-4 mb-sm-0 mb-4 mt-0'
      },
      {
        selector: '.dt-layout-start',
        classToRemove: 'd-md-flex me-auto justify-content-between',
        classToAdd: 'col-12 d-flex justify-content-center justify-content-md-start gap-2'
      },
      { selector: '.dt-layout-table', classToRemove: 'row mt-2' },
      { selector: '.dt-layout-full', classToRemove: 'col-md col-12', classToAdd: 'table-responsive' }
    ];

    elementsToModify.forEach(({ selector, classToRemove, classToAdd }) => {
      document.querySelectorAll(selector).forEach(element => {
        if (classToRemove) {
          classToRemove.split(' ').forEach(className => element.classList.remove(className));
        }
        if (classToAdd) {
          classToAdd.split(' ').forEach(className => element.classList.add(className));
        }
      });
    });
  }, 100);
});